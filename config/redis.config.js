const redis = require("redis");

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT, 4),
  password: process.env.REDIS_PASSWORD,
});

redisClient.on("connect", () => {
  console.log("Connected to Redis");
});

redisClient.on("error", (err) => {
  console.log(`Redis error: ${err}`);
});

module.exports = redisClient;
