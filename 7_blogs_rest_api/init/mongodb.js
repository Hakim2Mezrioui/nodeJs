const mongoose = require("mongoose");
const { connectionUrl } = require("../config/keys.js");

const connectMongodb = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL);
    console.log("database connection successfully");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectMongodb;
