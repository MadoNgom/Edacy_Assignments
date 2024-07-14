let classes = [];

exports.getAllClasses = () => {
  return classes;
};
exports.getClasseById = (id) => {
  classes = classes.find((classe) => classe.id == id);
};
exports.createClasse = (item) => {
  // create tne item
  const newclasse = { ...item, id: Date.now().toString() };
  //   push it the table
  classes.push(newclasse);
  return newclasse;
};
// to delete
exports.deleteClasse = (id) => {
  classes.filter((item) => item.id !== id);
};
exports.updateClasse = (item, id) => {
  const index = classes.findIndex((obj) => obj.id === id);
  if (index !== -1) {
    classes = { ...item, id: new Date.now() };
  }
};
