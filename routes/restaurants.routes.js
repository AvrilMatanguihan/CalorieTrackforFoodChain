const express = require("express");
const router = express.Router();

const {
  getRestaurants,
  getSingleRestaurant,
  getRestaurantMenu,
} = require("../controllers/restaurants.controller");

router.get("/", getRestaurants);
router.get("/:id", getSingleRestaurant);
router.get("/:id/menu", getRestaurantMenu);

module.exports = router;
