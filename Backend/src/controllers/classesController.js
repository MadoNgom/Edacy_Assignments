const classeService = require("../services/classeService");
exports.getAllClasses = (req, res) => {
  const classes = classeService.getAllClasses();
  res.json(classes);
};
exports.getClasseById = (req, res) => {
  const classeId = req.params.id;
  const classes = classeService.getClasseById(classeId);
  res.status(200).json(classes);
};
// create classe
exports.createClasse = (req, res) => {
  const classe = req.body;
  const classes = classeService.createClasse(classe);
  res.status(200).json(classes);
};
// DELETE CLASSES
exports.deleteClasse = (req, res) => {
  const classeId = req.params.id;
  const classes = classeService.deleteClasse(classeId);
  res.sendStatus(204).json(classes);
};
exports.updateClasse = (req, res) => {
  const classeId = req.params.id;
  const classe = res.params.body;
  const classes = classeService.updateClasse(classeId, classe);
  res.sendStatus(201).json(classes);
};
