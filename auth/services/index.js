require("dotenv").config();
const ResponseEntity = require("../utils/response/response.entity");
const jwt = require("jsonwebtoken");

class AuthServices {
  constructor() {
    this.res = new ResponseEntity();
  }
  async generateToken(user) {
    const payload = {
      // Add relevant user data to payload
      userId: user.id,
      username: user.username,
      // Add any other relevant data
    };
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });
    this.res.success = true;
    this.res.data = { token: token };
    this.res.message = "token generated successfully";
    return this.res;
  }
  catch(error) {
    throw { error, res: this.res };
  }
}

module.exports = AuthServices;
