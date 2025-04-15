import { headers } from "next/headers";

export default async function robots() {
  const headersList = await headers();
  const host = await headersList.get("host");
  const proto = await headersList.get("x-forwarded-proto");
  const disallow = ["/admin"];
  return {
    rules: {
      userAgent: "*",
      disallow,
    },
    sitemap: `${proto}://${host}/sitemap.xml`,
  };
}
