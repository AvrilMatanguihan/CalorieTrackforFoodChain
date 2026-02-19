const db = require("../config/db");

const getAllMenuItems = async () => {
  const [rows] = await db.query("SELECT * FROM menu_items");
  return rows;
};

const getMenuItemById = async (id) => {
  const [rows] = await db.query(
    "SELECT * FROM menu_items WHERE item_id = ?",
    [id]
  );
  return rows[0];
};

const getMenuByRestaurantId = async (restaurant_id) => {
  const [rows] = await db.query(
    "SELECT * FROM menu_items WHERE restaurant_id = ?",
    [restaurant_id]
  );
  return rows;
};

const getMenuByCategoryId = async (category_id) => {
  const [rows] = await db.query(
    "SELECT * FROM menu_items WHERE category_id = ?",
    [category_id]
  );
  return rows;
};

module.exports = {
  getAllMenuItems,
  getMenuItemById,
  getMenuByRestaurantId,
  getMenuByCategoryId,
};
