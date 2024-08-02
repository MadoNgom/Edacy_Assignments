import { userService } from "../services/userService";
import { Request, Response } from "express";
export const usersController = {
  getAll(req: Request, res: Response) {
    const data = userService.getAll();
    res.json(data);
  },
  getById(req: Request, res: Response) {
    const id = req.params.id;
    const data = userService.getById(id);
    res.json(data);
  },

  create(req: Request, res: Response) {
    const item = req.body;
    // verifier le user existe avec le meme email
    if (userService.notExist(item.email)) {
      const data = userService.create(item);
      res.status(201).json(data);
    } else {
      // sinon on affiche un message d'erreur
      res
        .status(400)
        .json({ message: "utilisateur existe déjà avec un meme email" });
    }
  },

  update(req: Request, res: Response) {
    const id = req.params.id;
    const user = req.body;
    const data = userService.update(id, user);
    res.status(200).json(data);
  },

  delete(req: Request, res: Response) {
    const id = req.params.id;
    userService.delete(id);
    res.sendStatus(204);
  },
};
