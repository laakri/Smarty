const express = require("express");
const router = express.Router();
const Category = require("../models/category");
const AgeGroup = require("../models/ageGroup");

// POST route to create a new category
router.post("/NewCategory", async (req, res) => {
  try {
    const { name, description, ageGroupId } = req.body;

    const newCategory = new Category({ name, description });
    await newCategory.save();

    // Find the corresponding age group and add the category's _id to its categories array
    const ageGroup = await AgeGroup.findById(ageGroupId);
    if (!ageGroup) {
      return res.status(404).json({ error: "Age group not found" });
    }

    ageGroup.categories.push(newCategory._id);
    await ageGroup.save();

    res.status(201).json({ category: newCategory, ageGroup });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET route to retrieve categories by age group ID
router.get("/categories/:ageGroupId", async (req, res) => {
  try {
    const ageGroupId = req.params.ageGroupId;

    const ageGroup = await AgeGroup.findById(ageGroupId).populate("categories");

    if (!ageGroup) {
      return res.status(404).json({ error: "Age group not found" });
    }

    res.status(200).json(ageGroup.categories);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;
