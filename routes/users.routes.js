const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getSingleUser,
} = require("../controllers/users.controller");

router.get("/", getAllUsers);
router.get("/:id", getSingleUser);

module.exports = router;
