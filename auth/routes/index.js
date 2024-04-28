const express = require("express");

const router = express.Router();
const AuthControllers = require("../controllers/index");

router.post("/login", AuthControllers.login);

module.exports = router;
