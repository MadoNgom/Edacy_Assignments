const bodyParser = require("body-parser");
const express = require("express");
const app = express();
require("dotenv").config();

// Configuration body parser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// initialiser les routers
const route = require("./routers/admin");
const classeRoute = require("./routers/classes");
const studentRoute = require("./routers/Students");
// connecter les routes
app.use("/admin", route);
app.use("/classes", classeRoute);
app.use("/Students", studentRoute);

app.listen(process.env.PORT || 3000);
console.log(`server running on PORT ${process.env.PORT || 3000}`);
