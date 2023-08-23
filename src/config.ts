// export const WEBSITE_URL = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";
export const WEBSITE_URL = "https://blog-test-livid.vercel.app/";

// export const WEBSITE_URL = "https://fetch-fun.vercel.app"
// export const WEBSITE_URL = "http://localhost:3000"

const IS_SERVER = typeof window === "undefined";
export default function getURL(path: string) {
  const baseURL = IS_SERVER ? process.env.NEXT_PUBLIC_SITE_URL! : window.location.origin;
  return new URL(path, baseURL).toString();
}