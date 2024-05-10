const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectMongodb = require("./init/mongodb");
const { authRoute, categoryRoute } = require("./routes"); // automatically index import we can also require("./routes/index.js");
const morgan = require("morgan");
const { errorHandler } = require("./middlewares");
const notfound = require("./controllers/notfound");

dotenv.config();

// init app
const app = express();

// connect database
connectMongodb();

// third-party middleware
app.use(express.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
app.use(morgan("dev"));

// route section
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoute);

app.use("*", notfound);

// error handling middelware
app.use(errorHandler);

module.exports = app;
