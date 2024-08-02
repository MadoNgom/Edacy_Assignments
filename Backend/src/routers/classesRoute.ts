import { classeController } from "../controllers/classesController";
import express from "express";
const classeroute = express.Router();

classeroute.get("/", classeController.getAllClasses);
classeroute.post("/", classeController.createClasse);
classeroute.get("/:id", classeController.getClasseById);
classeroute.delete("/:id", classeController.deleteClasse);
classeroute.put("/:id", classeController.updateClasse);

export default classeroute;
