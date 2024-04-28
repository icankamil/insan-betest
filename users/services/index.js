const ResponseEntity = require("../utils/response/response.entity");
const { validateRequest } = require("../utils/validators/index");
const {
  UserValidation,
  IdentityNumber,
  AccountNumber,
  UserUpdateValidation,
} = require("../validations/index");
const userRepository = require("../repositories/index");
const { Redis } = require("ioredis");
const redis = new Redis();
class UserServices {
  constructor() {
    this.res = new ResponseEntity();
  }

  async create(req) {
    try {
      const sanitized = {
        ...req.body,
      };
      validateRequest(sanitized, UserValidation);
      const result = await userRepository.create(sanitized); // create user

      this.res.success = true;
      this.res.data = result;
      this.res.message = "Create user successfully";
      return this.res;
    } catch (error) {
      throw { error, res: this.res };
    }
  }

  async getUserByAccount(req) {
    try {
      const sanitized = {
        ...req.body,
      };
      validateRequest(sanitized, AccountNumber);
      const result = await userRepository.findOne(sanitized);

      this.res.success = true;
      this.res.data = result;
      this.res.message =
        result === null ? "User not found" : "User fetched successfully";
      redis.set(req.body.accountNumber, JSON.stringify(this.res));
      return this.res;
    } catch (error) {
      throw { error, res: this.res };
    }
  }
  async getUserByIdentity(req) {
    try {
      const sanitized = {
        ...req.body,
      };
      validateRequest(sanitized, IdentityNumber);
      const result = await userRepository.findOne(sanitized); // create user
      this.res.success = true;
      this.res.data = result;
      this.res.message =
        result === null ? "User not found" : "User fetched successfully";
      redis.set(req.body.identityNumber, JSON.stringify(this.res));
      return this.res;
    } catch (error) {
      throw { error, res: this.res };
    }
  }
  async getUsers() {
    try {
      const result = await userRepository.findAll(); // create user
      this.res.success = true;
      this.res.data = result;
      this.res.message =
        result === null ? "User not found" : "User fetched successfully";
      redis.set("users", JSON.stringify(this.res));
      return this.res;
    } catch (error) {
      throw { error, res: this.res };
    }
  }
  async updateUser(req) {
    try {
      const sanitized = {
        ...req.body,
      };
      validateRequest(sanitized, UserUpdateValidation);
      const result = await userRepository.updateOne(sanitized); // create user
      this.res.success = true;
      this.res.data = result;
      this.res.message = result === "User updated successfully";
      return this.res;
    } catch (error) {
      throw { error, res: this.res };
    }
  }

  async deleteOne(req) {
    try {
      const sanitized = {
        ...req.body,
      };
      validateRequest(sanitized, UserUpdateValidation);
      const result = await userRepository.deleteOne(sanitized); // create user
      this.res.success = true;
      this.res.data = result;
      this.res.message = result === "User updated successfully";
      return this.res;
    } catch (error) {
      throw { error, res: this.res };
    }
  }
}

module.exports = UserServices;
