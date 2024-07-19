// models/Experience.js
const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  place: { type: String, required: true },
  position: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: false }, // Optional
});

const Experience = mongoose.model("Experience", experienceSchema);

module.exports = Experience;
