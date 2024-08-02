// IMPORT THE STUDENTS SERVICES
import { studentService } from "../services/studentService";
import { Request, Response } from "express";
export const studentController = {
  getStudents(req: Request, res: Response) {
    const data = studentService.getStudents();
    res.json(data);
  },
  getByIdStudent(req: Request, res: Response) {
    const studentId = req.params.id;
    const data = studentService.getByIdStudent(studentId);
    res.json(data);
  },

  addStudent(req: Request, res: Response) {
    const student = req.body;
    const data = studentService.addStudent(student);
    res.status(201).json(data);
  },

  updateStudent(req: Request, res: Response) {
    const studentId = req.params.id;
    const student = req.body;
    const data = studentService.updateStudent(studentId, student);
    res.status(200).json(data);
  },
  deleteStudent(req: Request, res: Response) {
    const id = req.params.id;
    studentService.deleteStudent(id);
    res.sendStatus(204);
  },
};
