const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
require("dotenv").config();
const productRouter = require("./routes/productRouter");
const categoryRouter = require("./routes/categoryRouter");
const ssCategoryRouter = require("./routes/sousCategoryRouter");
const roleRouter = require("./routes/roleRouter");
const userRouter = require("./routes/userRouter");
const payementMethodRouter = require("./routes/payementMethodRouter")
const db = require("./config/database");

app.use(express.json());
app.use(fileUpload());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, PATCH, POST, OPTIONS, PUT, DELETE"
  );
  next();
});

db.on("error", (err) => console.log(err));
db.once("open", () => console.log("connected to database"));

app.use("/product", productRouter);
app.use("/category", categoryRouter);
app.use("/ssCategory", ssCategoryRouter);
app.use("/role", roleRouter);
app.use("/user", userRouter);
app.use('/payementMethod',payementMethodRouter)
app.listen(process.env.PORT, () =>
  console.log("connected to server" + process.env.PORT)
);
