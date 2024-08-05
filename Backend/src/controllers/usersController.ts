import { user } from "../models/user";
import { userService } from "../services/userService";
import { Request, Response } from "express";
export class usersController {
  private userService: userService;
  constructor() {
    this.userService = new userService();
  }
  async getAll(req: Request, res: Response) {
    try {
      const data = await this.userService.getAll();
      res.json(data);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
  async getById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const data = await this.userService.getById(id);
      if (data) {
        res.json(data);
      } else {
        res.sendStatus(404);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async create(req: Request, res: Response) {
    const { firstname, lastname, email, password } = req.body;
    if (
      firstname === undefined ||
      lastname == undefined ||
      email === undefined ||
      password == undefined
    ) {
      res.status(400).json({ message: "body not match contract" });
    } else {
      try {
        const UsernotExist = await this.userService.notExist(email);
        if (UsernotExist) {
          const user: user = { firstname, lastname, email, password };
          const data = await this.userService.create(user);
          res.status(200).json(data);
        } else {
          res.status(400).json({ message: "user already exits" });
        }
      } catch (error: any) {
        // sinon on affiche un message d'erreur
        res.status(400).json({ message: error.message });
      }
    }
  }

  async update(req: Request, res: Response) {
    try {
      const user: user = req.body;
      user.id = req.params.id as string;
      const data = await this.userService.update(user);
      res.status(200).json(data);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const result = this.userService.delete(id);
    } catch (error: any) {
      res.sendStatus(204).json({ message: error.message });
    }
  }
}
