const express = require("express");
const router = express.Router();
const { getIntake, getAllIntake,getDailySummary, getFavorites, getRestaurantStats  } = require("../controllers/intakelogs.controller");

router.get("/", getAllIntake);
router.get("/:id", getIntake);

// Get total calories per day per user
router.get("/:id/summary", getDailySummary);

// Get most eaten items per user
router.get("/:id/favorites", getFavorites);

// Get restaurant intake logs
router.get("/restaurant/:id", getRestaurantStats);


module.exports = router;