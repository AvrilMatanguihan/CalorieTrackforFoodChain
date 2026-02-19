const restaurant = require("../models/restaurants.models");

const getRestaurants = async (req, res) => {
  try {
    const data = await restaurant.getAllRestaurants();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleRestaurant = async (req, res) => {
  try {
    const data = await restaurant.getRestaurantById(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRestaurantMenu = async (req, res) => {
  try {
    const menu = await restaurant.getMenuByRestaurantId(req.params.id);

    res.json({
      restaurant_id: req.params.id,
      menu,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getRestaurants,
  getSingleRestaurant,
  getRestaurantMenu,
};
