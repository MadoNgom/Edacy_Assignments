const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// initialiser les routers
const router = require("./routers/admin");
// const classeRoute = require("./routers/classes");
// const studentRoute = require("./routers/Students");
const usersRoute = require("./routers/users");
const categoryRoute = require("./routers/category");
const orderRoute = require("./routers/order");
const productRoute = require("./routers/products");
// Configuration body parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// connecter les routes

require("dotenv").config();
app.use("/users", usersRoute);
app.use("/orders", orderRoute);
app.use("/products", productRoute);
app.use("/admin", router);
app.use("/classes", classeRoute);
app.use("/Students", studentRoute);
app.use("/category", categoryRoute);
app.listen(process.env.PORT || 3000);
console.log(`server running on PORT ${process.env.PORT || 3000}`);
