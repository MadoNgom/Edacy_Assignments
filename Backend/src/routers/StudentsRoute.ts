import { studentController } from "../controllers/studentController";
import express from "express";
const studentRoute = express.Router();

studentRoute.get("/", studentController.getStudents);
studentRoute.post("/", studentController.addStudent);
studentRoute.get("/:id", studentController.getByIdStudent);
studentRoute.delete("/:id", studentController.deleteStudent);
studentRoute.put("/:id", studentController.updateStudent);

export default studentRoute;
