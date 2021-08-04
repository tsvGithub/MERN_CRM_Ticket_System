const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");

require("dotenv").config();
// console.log(process.env.MONGO_URL);

const PORT = process.env.PORT || 5000;

//API security
app.use(helmet());

//handle CORS errors
app.use(cors());

app.use(express.json());

//DB connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

if (process.env.NODE_ENV !== "production") {
  const mongoDB = mongoose.connection;
  mongoDB.on("open", () => {
    console.log("MongoDB is connected!");
  });
  mongoDB.on("error", (error) => {
    console.log(error);
  });

  //Logger
  app.use(morgan("tiny"));
}
