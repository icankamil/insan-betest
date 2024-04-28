const { createProxyMiddleware } = require("http-proxy-middleware");
const axios = require("axios");
const express = require("express");
const router = express.Router();

const setupProxies = (app, routes) => {
  routes.forEach((r) => {
    app.use(r.url, createProxyMiddleware(r.proxy));
  });
};

module.exports = { setupProxies };
