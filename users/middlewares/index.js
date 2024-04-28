const { Redis } = require("ioredis");
const redis = new Redis();

async function accountNumberCache(req, res, next) {
  const cache = await redis.get(req.body.accountNumber);
  if (cache === null) {
    next();
  } else {
    return res.json(JSON.parse(cache));
  }
}

async function identityNumberCache(req, res, next) {
  const cache = await redis.get(req.body.identityNumber);
  if (cache === null) {
    next();
  } else {
    return res.json(JSON.parse(cache));
  }
}

async function allUserCache(req, res, next) {
  // get url path
  const urlPath = req.originalUrl.split("/")[3];

  const cache = await redis.get(urlPath);
  if (cache === null) {
    next();
  } else {
    return res.json(JSON.parse(cache));
  }
}

module.exports = { accountNumberCache, identityNumberCache, allUserCache };
