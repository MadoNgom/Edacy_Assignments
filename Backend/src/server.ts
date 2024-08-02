import router from "./routers/usersRoute";
import studentRoute from "./routers/StudentsRoute";
import classeroute from "./routers/classesRoute";
import express from "express";
import bodyParser from "body-parser";
const app = express();

require("dotenv").config();

// Configuration body parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// connecter les routes
app.use("/users", router);
app.use("/classes", classeroute);
app.use("/students", studentRoute);

app.listen(process.env.PORT || 3000);
console.log(`server running on PORT ${process.env.PORT || 3000}`);
