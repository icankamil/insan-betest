const jwt = require("jsonwebtoken");
// const {
//   convertPermissionToArrayFormat,
// } = require("../modules/dashboard/helpers/helpers");
// const { clearCookieResponse } = require("../utils/response/response.util");

const secretKey = process.env.JWT_SECRET;

// Middleware to authenticate JWT token
function authenticateToken(req, res, next) {
  const token = req.cookies["x-builder-access"];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      clearCookieResponse(res);
      return res.sendStatus(403);
    }

    req.user = user;
    req.token = token;
    next();

    return null;
  });

  return null;
}

function verifyToken(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token is required" });

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid Token" });
    req.user = decoded;
    next();
  });
}

// Middleware to authenticate user  with specific permission
function permissionMiddleware(permission) {
  return (req, res, next) => {
    const { user } = req;
    if (user.accountType === "member") {
      const permissions = convertPermissionToArrayFormat(user.permission);

      const permissionSet = new Set(permissions);

      if (permissionSet.has(permission)) {
        next();
        return null;
      }

      return res.sendStatus(403);
    }

    next();
    return null;
  };
}

module.exports = { authenticateToken, permissionMiddleware, verifyToken };
