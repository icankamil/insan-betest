const {
  errorResponse,
  successResponse,
} = require("../utils/response/response.util");
const UserServices = require("../services/index");

class UserController {
  static async create(req, res) {
    try {
      const useCase = new UserServices();
      const result = await useCase.create(req);
      successResponse(res, result);
    } catch (error) {
      errorResponse(res, error);
    }
  }

  static async getUsers(req, res) {
    try {
      const useCase = new UserServices();
      const result = await useCase.getUsers();
      successResponse(res, result);
    } catch (error) {
      errorResponse(res, error);
    }
  }

  static async getUserByAccount(req, res) {
    try {
      const useCase = new UserServices();
      const result = await useCase.getUserByAccount(req);
      successResponse(res, result);
    } catch (error) {
      errorResponse(res, error);
    }
  }

  static async getUserByIdentity(req, res) {
    try {
      const useCase = new UserServices();
      const result = await useCase.getUserByIdentity(req);
      successResponse(res, result);
    } catch (error) {
      errorResponse(res, error);
    }
  }

  static async updateUser(req, res) {
    try {
      const useCase = new UserServices();
      const result = await useCase.updateUser(req);
      successResponse(res, result);
    } catch (error) {
      errorResponse(res, error);
    }
  }

  static async deleteUser(req, res) {
    try {
      const useCase = new UserServices();
      const result = await useCase.deleteOne(req);

      successResponse(res, result);
    } catch (error) {
      errorResponse(res, error);
    }
  }
}

module.exports = UserController;
