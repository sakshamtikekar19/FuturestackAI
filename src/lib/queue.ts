import { Queue } from "bullmq";
import IORedis from "ioredis";

// Use an environment variable for Redis URL, fallback to localhost for development
const connection = new IORedis(process.env.REDIS_URL || "redis://localhost:6379", {
  maxRetriesPerRequest: null, // BullMQ requires this
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const scanQueue = new Queue("scans", { connection: connection as any });
