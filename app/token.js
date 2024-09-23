"use server";

import { headers } from "next/headers";
import crypto from "crypto";
import { reverse } from "dns";

function getIp() {
  const FALLBACK_IP_ADDRESS = "0.0.0.0";
  const forwardedFor = headers().get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0] ?? FALLBACK_IP_ADDRESS;
  }

  return headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS;
}

export async function genToken() {
  const secretKey = "mp3youtubeccshiraz";
  const userId = 1000003;

  // Get the user's IP address from Cloudflare
  const userIp = getIp();

  // Get the current timestamp and encode it to base64
  const timestamp = Buffer.from(Date.now().toString()).toString("base64");

  // Combine user ID, IP, and timestamp
  const data = `${userId}|${userIp}|${timestamp}`;

  // Generate the hash using HMAC with SHA-256
  const token = crypto
    .createHmac("sha256", secretKey)
    .update(data)
    .digest("hex");

  // Reverse the token and append the reversed timestamp
  const result = `${token}|${timestamp}`.split("").reverse().join("");

  return result;
}
export async function getFormattedDateTime() {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  const now = new Date();
  return now.toLocaleString("en-GB", options).replace(",", "");
}
