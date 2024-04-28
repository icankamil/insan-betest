const prefix = process.env.PREFIX || "/api";
const version = process.env.API_V || "/v1";
const ROUTES = [
  {
    url: "/user/create",
    auth: true,
    rateLimit: {
      windowMs: 15 * 60 * 1000,
      max: 5,
    },
    proxy: {
      target: `http://localhost:5000${prefix}${version}/user/create`,
      changeOrigin: true,
      pathRewrite: {
        [`^/user/create`]: "",
      },
    },
  },
  {
    url: "/users/get",
    auth: true,
    proxy: {
      target: `http://localhost:5000/${prefix}${version}/users/get`,
      changeOrigin: true,
      pathRewrite: {
        [`^/users/get`]: "",
      },
    },
  },
  {
    url: "/user/getByAccount",
    auth: true,
    proxy: {
      target: `http://localhost:5000/${prefix}${version}/user/getByAccount`,
      changeOrigin: true,
      pathRewrite: {
        [`^/users/getByAccount`]: "",
      },
    },
  },
  {
    url: "/user/getByIdentity",
    auth: true,
    proxy: {
      target: `http://localhost:5000/${prefix}${version}/user/getByIdentity`,
      changeOrigin: true,
      pathRewrite: {
        [`^/users/getByAccount`]: "",
      },
    },
  },
  {
    url: "/user/update",
    auth: true,
    proxy: {
      target: `http://localhost:5000/${prefix}${version}/user/update`,
      changeOrigin: true,
      pathRewrite: {
        [`^/user/update`]: "",
      },
    },
  },
  {
    url: "/user/delete",
    auth: true,
    proxy: {
      target: `http://localhost:5000${prefix}${version}/user/delete`,
      changeOrigin: true,
      pathRewrite: {
        [`^/user/delete`]: "",
      },
    },
  },
  {
    url: "/authenticate",
    auth: false,
    proxy: {
      target: `http://localhost:7000${prefix}${version}/login`,
      changeOrigin: true,
      pathRewrite: {
        [`^/authenticate`]: "",
      },
    },
  },
];

module.exports = { ROUTES };
