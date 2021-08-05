const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");

require("dotenv").config();
// console.log(process.env.MONGO_URL);

// const PORT = process.env.PORT || 5000;
const PORT = process.env.PORT || 8080;

//API security
app.use(helmet());

//handle CORS errors
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//-------------------------
//Load Routers
const userRouter = require("./routes/user.router");
const ticketRouter = require("./routes/ticket.router");
//Use Routers
app.use("/v1/user", userRouter);
app.use("/v1/ticket", ticketRouter);
//-----------------------------

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
//------------------------------------------
//Error handler
const handleError = require("./utils/errorHandler");

app.use((req, res, next) => {
  const error = new Error("Not found!");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  handleError(error, res);
});
//--------------------
//Server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
