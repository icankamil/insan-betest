const {
  errorResponse,
  successResponse,
} = require("../utils/response/response.util");
const AuthServices = require("../services/index");

class AuthControllers {
  static async login(req, res) {
    try {
      const { command } = req.body;
      const authServices = new AuthServices();
      const result = await authServices.generateToken(command);
      successResponse(res, result);
    } catch (error) {
      errorResponse(res, error);
    }
  }
}

module.exports = AuthControllers;
