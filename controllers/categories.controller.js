const category = require("../models/categories.model");

const getCategories = async (req, res) => {
  try {
    const categories = await category.getAllCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCategories };
