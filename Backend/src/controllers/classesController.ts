import { classeService } from "../services/classeService";
import { Request, Response } from "express";
export const classeController = {
  getAllClasses(req: Request, res: Response) {
    const classes = classeService.getAllClasses();
    res.json(classes);
  },
  getClasseById(req: Request, res: Response) {
    const classeId = req.params.id;
    const classes = classeService.getClasseById(classeId);
    res.status(200).json(classes);
  },
  // create classe
  createClasse(req: Request, res: Response) {
    const classe = req.body;
    const classes = classeService.createClasse(classe);
    res.status(200).json(classes);
  },
  // DELETE CLASSES
  deleteClasse(req: Request, res: Response) {
    const classeId = req.params.id;
    const classes = classeService.deleteClasse(classeId);
    res.sendStatus(204).json(classes);
  },
  updateClasse(req: Request, res: Response) {
    const classeId = req.params.id;
    const classe = req.body;
    const classes = classeService.updateClasse(classeId, classe);
    res.sendStatus(201).json(classes);
  },
};
