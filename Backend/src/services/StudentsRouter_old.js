const express = require("express");
const studentRoute = express.Router();

// TO GET ALL STUDENTS
studentRoute.get("/", (req, res) => {
  res.status(200).send(res);
});
// TO GET A SINGLE STUDENTS
studentRoute.get("/:id", (req, res) => {
  res.status(200).send(res);
});
// TO GET A ADD STUDENTS
studentRoute.post("/", (req, res) => {
  res.status(200).send(res);
});
// TO GET A ADD STUDENTS
studentRoute.delete("/:id", (req, res) => {
  res.status(200).send(res);
});
module.exports = studentRoute;
