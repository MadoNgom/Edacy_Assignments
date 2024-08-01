const userService = require("../services/userService");

exports.getAll = (req, res) => {
  const data = userService.getAll();
  res.json(data);
};
exports.getById = (req, res) => {
  const id = req.params.id;
  const data = userService.getById(id);
  res.json(data);
};

exports.create = (req, res) => {
  const item = req.body;
  // si l'utilisateur n'existe pas déjà on créé son compte
  if (userService.notExist(item.email)) {
    const data = userService.create(item);
    res.status(201).json(data);
  } else {
    // sinon on affiche un message d'erreur
    res
      .status(400)
      .json({ message: "utilisateur existe déjà avec un meme email" });
  }
};

exports.update = (req, res) => {
  const id = req.params.id;
  const user = req.body;
  const data = userService.update(id, user);
  res.status(200).json(data);
};

exports.delete = (req, res) => {
  const id = req.params.id;
  userService.delete(id);
  res.sendStatus(204);
};
