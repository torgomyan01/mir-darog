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

export async function SetCallBack(data: any) {
  try {
    const redis = await getRedisClient();

    const getOldData = await redis.get(redisKeys.callBack);

    const array = getOldData ? JSON.parse(getOldData) : [];
    array.push(data);
    await redis.set(redisKeys.callBack, JSON.stringify(array));

    return {
      status: 1,
    };
  } catch (error) {
    return {
      status: 0,
      message: "Redis error",
      error: (error as Error).message,
    };
  }
}
