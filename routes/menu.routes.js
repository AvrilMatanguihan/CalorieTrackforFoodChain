const express = require("express");
const router = express.Router();

const {
  getAllMenuItems,
  getSingleMenuItem,
  getMenuByRestaurant,
  getMenuByCategory,
} = require("../controllers/menu.controller");

router.get("/restaurant/:restaurant_id", getMenuByRestaurant);
router.get("/category/:category_id", getMenuByCategory);

router.get("/:id", getSingleMenuItem);

router.get("/", getAllMenuItems);

module.exports = router;
