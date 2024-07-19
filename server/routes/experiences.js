// routes/experience.js
const express = require("express");
const Experience = require("../models/Experience.js");
const router = express.Router();

// Get all experiences
router.get("/", async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
