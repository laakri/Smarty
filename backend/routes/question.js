const express = require("express");
const router = express.Router();
const Question = require("../models/question");
const Category = require("../models/category");

// POST route to create a NewQuestion
router.post("/NewQuestion", async (req, res) => {
  try {
    const { categoryId, text, options, correctOption } = req.body;

    const category = await Category.findById(categoryId);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    const newQuestion = new Question({ text, options, correctOption });
    category.questions.push(newQuestion);

    await Promise.all([newQuestion.save(), category.save()]);

    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET route to retrieve questions within a category by category ID
router.get("/questions/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    const category = await Category.findById(categoryId).populate("questions");

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json(category.questions);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
