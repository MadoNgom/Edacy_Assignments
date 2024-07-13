const express = require("express");
const studentRoute = express.Router();
const studentContrroller = require("../controllers/studentController");

studentRoute.get("/", studentContrroller.getStudents);
studentRoute.post("/", studentContrroller.addStudent);
studentRoute.get("/:id", studentContrroller.getByIdStudent);
studentRoute.delete("/:id", studentContrroller.deleteStudent);
studentRoute.put("/:id", studentContrroller.updateStudent);

module.exports = studentRoute;
