const authMiddleware = require("../../middlewares/auth.middleware");

const setupAuth = (app, routes) => {
  routes.forEach((r) => {
    if (r.auth) {
      app.use(r.url, authMiddleware.verifyToken);
    }
  });
};

module.exports = { setupAuth };
