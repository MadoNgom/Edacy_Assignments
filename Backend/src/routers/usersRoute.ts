import express, { Router } from "express";
import { usersController } from "./../controllers/usersController";

export class userRoute {
  public router: Router;
  private usersController: usersController;
  constructor() {
    this.router = express.Router();
    this.usersController = new usersController();
    this.configRoute();
  }
  private configRoute() {
    this.router.get(
      "/",
      this.usersController.getAll.bind(this.usersController)
    );
    this.router.get(
      "/:id",
      this.usersController.getById.bind(this.usersController)
    );
    this.router.post(
      "/",
      this.usersController.create.bind(this.usersController)
    );
    this.router.put(
      "/:id",
      this.usersController.update.bind(this.usersController)
    );
    this.router.delete(
      "/:id",
      this.usersController.delete.bind(this.usersController)
    );
  }
}
