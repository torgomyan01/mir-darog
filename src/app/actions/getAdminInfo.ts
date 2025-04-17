"use server";

import { createClient } from "redis";
import { redisKeys } from "@/utils/consts";

let redisClient: ReturnType<typeof createClient> | null = null;

async function getRedisClient() {
  if (!redisClient) {
    redisClient = createClient({
      url: process.env.REDIS_URL, // Կարող է լինել նաև տեղական host
    });
    await redisClient.connect();
  }

  return redisClient;
}

export async function getAdminData() {
  try {
    const redis = await getRedisClient();

    const getOldData = await redis.get(redisKeys.callBack);
    const getCalcValue = await redis.get(redisKeys.calc_value);

    return {
      status: 1,
      data: {
        callback: getOldData ? JSON.parse(getOldData) : getOldData,
        calcRegister: getCalcValue ? JSON.parse(getCalcValue) : getCalcValue,
      },
    };
  } catch {
    return {
      status: 0,
    };
  }
}
