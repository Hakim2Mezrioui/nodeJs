const mongoose = require("mongoose");

const connectionUrl = "mongodb://127.0.0.1:27017/todoDB";
const connectMongodb = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL);
    console.log("The connection etablished");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectMongodb;
