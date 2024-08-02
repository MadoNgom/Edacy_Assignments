let classes: any = [];

export const classeService = {
  getAllClasses() {
    return classes;
  },
  getClasseById(id: any) {
    classes = classes.find((classe: any) => classe.id == id);
  },
  createClasse(item: any) {
    // create the item
    const newclasse = { ...item, id: Date.now().toString() };
    //   push it the table
    classes.push(newclasse);
    return newclasse;
  },
  // to delete
  deleteClasse(id: any) {
    classes.filter((item: any) => item.id !== id);
  },
  updateClasse(item: any, id: any) {
    const index = classes.findIndex((obj: any) => obj.id === id);
    if (index !== -1) {
      classes = { ...item, id: Date.now().toString() };
    }
  },
};
