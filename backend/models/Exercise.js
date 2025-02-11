const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  type: { type: String, required: true },
  duration: { type: Number, required: true }, // in minutes
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Exercise", ExerciseSchema);
