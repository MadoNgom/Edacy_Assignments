const express = require("express");
const classeroute = express.Router();

// TO GET ALL CLASSES
classeroute.get("/", (req, res) => {
  res.send("classes ");
});
// TO GET A SINGLE ITEME
classeroute.get("/:id", (req, res) => {
  res.send("classes ");
});
// TO add CLASSES
classeRoute.post("/", (req, res) => {
  res.send("classes ");
});
// TO modify CLASSES
classeRoute.put("/:id", (req, res) => {
  res.send("classes ");
});
// TO delete CLASSES
classeRoute.delete("/:id", (req, res) => {
  res.send("classes ");
});
module.exports = classeroute;
