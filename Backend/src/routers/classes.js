const express = require("express");
const classeroute = express.Router();
const classeController = require("../controllers/classesController");

classeroute.get("/", classeController.getAllClasses);
classeroute.post("/", classeController.createClasse);
classeroute.get("/:id", classeController.getClasseById);
classeroute.delete("/:id", classeController.deleteClasse);
classeroute.put("/:id", classeController.updateClasse);
module.exports = classeroute;
