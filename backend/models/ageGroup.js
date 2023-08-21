const mongoose = require("mongoose");

const ageGroupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
});

const AgeGroup = mongoose.model("AgeGroup", ageGroupSchema);

module.exports = AgeGroup;
