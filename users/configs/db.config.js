const mongoose = require("mongoose");

async function connect() {
  try {
    mongoose.set("debug", process.env.DB_DEBUG === "true");
    await mongoose.connect(
      `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
    process.exit(1);
  }
}

module.exports = { connect };
