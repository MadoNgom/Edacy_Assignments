const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");
usersRoute.get("/", usersController.getAll);
usersRoute.get("/:id", usersController.getById);
usersRoute.post("/", usersController.create);
usersRoute.put("/:id", usersController.update);
usersRoute.delete("/:id", usersController.delete);

module.exports = router;
