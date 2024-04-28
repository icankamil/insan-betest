const express = require("express");
const middleware = require("../middlewares/index");
const router = express.Router();
const UserController = require("../controllers/index");

router.post("/v1/user/create", UserController.create);
router.get("/v1/users/get", middleware.allUserCache, UserController.getUsers);
router.get(
  "/v1/user/getByAccount",
  middleware.accountNumberCache,
  UserController.getUserByAccount
);
router.get(
  "/v1/user/getByIdentity",
  middleware.identityNumberCache,
  UserController.getUserByIdentity
);
router.put("/v1/user/update", UserController.updateUser);
router.delete("/v1/user/delete", UserController.deleteUser);

module.exports = router;
