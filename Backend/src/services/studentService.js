let students = [];

exports.getStudents = () => {
  return students;
};
exports.getByIdStudent = (id) => {
  return students.find((item) => item.id == id);
};
// to create
exports.addStudent = (item) => {
  const newStudent = { ...item, id: Date.now().toString() };
  students.push(newStudent);
  return newStudent;
};
// delete
exports.deleteStudent = (id) => {
  students = students.filter((item) => item.id !== id);
};
exports.updateStudent = (id, item) => {
  // find the index
  const index = students.findIndex((obj) => obj.id === id);
  // update the data
  if (index !== -1) {
    students = { ...item, id: Date.now().toString() };
  }
};
