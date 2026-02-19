const db = require("../config/db");

const getAllRestaurants = async () => {
  const [rows] = await db.query(
    "SELECT restaurant_id, restaurant_name, branch FROM tbl_restaurants"
  );
  return rows;
};

const getRestaurantById = async (id) => {
  const [rows] = await db.query(
    "SELECT restaurant_id, restaurant_name, branch FROM tbl_restaurants WHERE restaurant_id = ?",
    [id]
  );

  return rows[0];
};

const getMenuByRestaurantId = async (id) => {
  const [rows] = await db.query(
    "SELECT item_name, calories FROM menu_items WHERE restaurant_id = ?",
    [id]
  );

  return rows;
};

module.exports = {
  getAllRestaurants,
  getRestaurantById,
  getMenuByRestaurantId,
};
