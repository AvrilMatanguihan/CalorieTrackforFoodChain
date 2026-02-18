const express = require("express");
const router = express.Router();
const pool = require("../config/db");

router.get("/:id/menu", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT name, calories FROM menu_items WHERE restaurant_id = ?",
      [req.params.id]
    );

    res.json({
      restaurant_id: req.params.id,
      menu: rows,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});


module.exports = router;
