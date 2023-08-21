// ageGroup.routes.js
const express = require("express");
const router = express.Router();
const AgeGroup = require("../models/ageGroup");
const Category = require("../models/category");

// POST route to NewAgeGroup
router.post("/NewAgeGroup", async (req, res) => {
  try {
    const { name, description } = req.body;
    const newAgeGroup = new AgeGroup({
      name,
      description,
    });
    await newAgeGroup.save();

    res.status(201).json(newAgeGroup);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET route to GetAgeGroups
router.get("/GetAgeGroups", async (req, res) => {
  try {
    const ageGroups = await AgeGroup.find();
    res.status(200).json(ageGroups);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;
