const mongoose = require("mongoose");
const User = require("../models/index");

class UserRepository {
  async create(payload) {
    try {
      return await User.create(payload);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findOne(payload) {
    return User.findOne(payload);
  }

  async findAll() {
    return User.find();
  }

  async updateOne(payload) {
    return User.updateOne(payload);
  }
  async deleteOne(payload) {
    return User.deleteOne(payload);
  }
}

module.exports = new UserRepository();
