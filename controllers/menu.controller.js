const menu = require("../models/menu.model");

const getAllMenuItems = async (req, res) => {
  try {
    const data = await menu.getAllMenuItems();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleMenuItem = async (req, res) => {
  try {
    const data = await menu.getMenuItemById(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMenuByRestaurant = async (req, res) => {
  try {
    const data = await menu.getMenuByRestaurantId(req.params.restaurant_id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMenuByCategory = async (req, res) => {
  try {
    const data = await menu.getMenuByCategoryId(req.params.category_id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllMenuItems,
  getSingleMenuItem,
  getMenuByRestaurant,
  getMenuByCategory,
};
