// const redisClient = require("../configs/redis.config");
// const verifyUserMengantar = require("../utils/verifyUserMengantar/verifyUserMengantar.util");
// const { CACHE_EXPIRE_TIME } = require("../modules/internal/constatns/cache");
// const checkUserInDB = require("../utils/checkUserInDB/checkUserInDB.util");

// async function internalPublicAccess(req, res, next) {
//   const authHeader = req.headers.authorization;

//   const token = authHeader && authHeader.split(" ")[1];

//   if (token == null) return res.sendStatus(401);

//   const cache = await redisClient.get(`internal-${token}`);

//   if (cache == null) {
//     const result = await verifyUserMengantar({ token });

//     if (result.error) {
//       return res.sendStatus(401);
//     }

//     const { _id } = result.data.data;

//     // check the user in db
//     if (!(await checkUserInDB(res, _id))) {
//       return null;
//     }

//     // set user to cache redis and
//     await redisClient.set(
//       `internal-${token}`,
//       JSON.stringify({ userUuid: _id }),
//       "EX",
//       CACHE_EXPIRE_TIME
//     );

//     next();

//     return null;
//   }

//   next();

//   return null;
// }

// module.exports = { internalPublicAccess };
