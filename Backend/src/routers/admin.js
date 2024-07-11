const express = require("express");
const router = express.Router();

// TO GET ALL DATA
router.get("/", (req, res) => {
  req.send();
});
// TO GET A SINGLE DATA
router.get("/:id", (req, res) => {
  req.send();
});
// TO ADD DATA
router.post("/", (req, res) => {
  req.send();
});
// TO MODIFY DATA
router.put("/:id", (req, res) => {
  req.send();
});
// TO DELETE
router.delete("/:id", (req, res) => {
  req.send();
});
