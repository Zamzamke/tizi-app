const express = require("express");
const auth = require("../middleware/auth");
const Exercise = require("../models/Exercise");

const router = express.Router();

// @route   POST /api/exercises
// @desc    Log a new exercise
router.post("/", auth, async (req, res) => {
  const { type, duration } = req.body;

  if (!type || !duration) {
    return res.status(400).json({ msg: "Please provide exercise type and duration" });
  }

  try {
    const exercise = new Exercise({ user: req.user.id, type, duration });
    await exercise.save();
    res.json(exercise);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   GET /api/exercises
// @desc    Get all exercises for the logged-in user
router.get("/", auth, async (req, res) => {
  try {
    const exercises = await Exercise.find({ user: req.user.id }).sort({ date: -1 });
    res.json(exercises);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
