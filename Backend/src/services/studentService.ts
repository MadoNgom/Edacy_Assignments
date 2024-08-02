let students: any = [];

export const studentService = {
  getStudents() {
    return students;
  },
  getByIdStudent(id: any) {
    return students.find((item: any) => item.id == id);
  },
  // to create
  addStudent(item: any) {
    const newStudent = { ...item, id: Date.now().toString() };
    students.push(newStudent);
    return newStudent;
  },
  // delete
  deleteStudent(id: any) {
    students = students.filter((item: any) => item.id !== id);
  },
  updateStudent(id: any, item: any) {
    // find the index
    const index = students.findIndex((obj: any) => obj.id === id);
    // update the data
    if (index !== -1) {
      students = { ...item, id: Date.now().toString() };
    }
  },
};
