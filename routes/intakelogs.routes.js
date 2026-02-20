const express = require("express");
const router = express.Router();
const { getIntake, getAllIntakefromAllUsers } = require("../controllers/intakelogs.controller");

// Use param :id for user_id
router.get("/:id", getIntake);
router.get("/", getAllIntakefromAllUsers);

module.exports = router;