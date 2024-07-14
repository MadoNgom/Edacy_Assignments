// IMPORT THE STUDENTS SERVICES
const studentService = require("../services/studentService");

exports.getStudents = (req, res) => {
  const data = studentService.getStudents();
  res.json(data);
};
exports.getByIdStudent = (req, res) => {
  const studentId = req.params.id;
  const data = studentService.getByIdStudent(studentId);
  res.json(data);
};

exports.addStudent = (req, res) => {
  const student = req.body;
  const data = studentService.addStudent(student);
  res.status(201).json(data);
};

exports.updateStudent = (req, res) => {
  const studentId = req.params.id;
  const student = req.body;
  const data = studentService.updateStudent(studentId, student);
  res.status(200).json(data);
};
exports.deleteStudent = (req, res) => {
  const id = req.params.id;
  studentService.deleteStudent(id);
  res.sendStatus(204);
};
