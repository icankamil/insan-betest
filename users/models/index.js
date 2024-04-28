const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    Id: {
      type: String,
      unique: true,
      required: true,
    },
    userName: {
      type: String,
      unique: true,
      required: true,
    },
    accountNumber: {
      type: String,
      unique: true,
      required: false,
    },
    emailAddress: {
      type: String,
      unique: true,
      required: false,
    },
    identityNumber: {
      type: String,
      unique: true,
      required: false,
    },
  },
  { collection: "User", timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
