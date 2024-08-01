const express = require("express");
const studentRoute = express.Router();
const studentController = require("../controllers/studentController");

studentRoute.get("/", studentController.getStudents);
studentRoute.post("/", studentController.addStudent);
studentRoute.get("/:id", studentController.getByIdStudent);
studentRoute.delete("/:id", studentController.deleteStudent);
studentRoute.put("/:id", studentController.updateStudent);

module.exports = studentRoute;
