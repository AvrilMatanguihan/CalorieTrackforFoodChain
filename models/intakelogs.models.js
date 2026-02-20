const db = require("../config/db");

const getUserIntake = async(user_id)=>{
  const [rows] = await db.query(
    `
    SELECT
      intake_logs.log_id,
      CONCAT(tbl_users.firstname, ' ', tbl_users.lastname) AS user,
      tbl_restaurants.restaurant_name AS restaurant_name,
      menu_items.item_name,
      menu_items.calories,
      intake_logs.quantity,
      (menu_items.calories * intake_logs.quantity) AS total_calories,
      intake_logs.date_consumed
    FROM intake_logs
    LEFT JOIN tbl_users
      ON intake_logs.user_id = tbl_users.user_id
    LEFT JOIN menu_items
      ON intake_logs.item_id = menu_items.item_id
    LEFT JOIN tbl_restaurants
      ON intake_logs.restaurant_id = tbl_restaurants.restaurant_id
    WHERE intake_logs.user_id = ?
    ORDER BY intake_logs.date_consumed ASC
    `,
    [user_id]
  );

  return rows;
};

const getAllIntakes = async()=>{
  const [rows] = await db.query(
    `
    SELECT
      intake_logs.log_id,
      CONCAT(tbl_users.firstname, ' ', tbl_users.lastname) AS user,
      tbl_restaurants.restaurant_name AS restaurant_name,
      menu_items.item_name,
      menu_items.calories,
      intake_logs.quantity,
      (menu_items.calories * intake_logs.quantity) AS total_calories,
      intake_logs.date_consumed
    FROM intake_logs
    LEFT JOIN tbl_users
      ON intake_logs.user_id = tbl_users.user_id
    LEFT JOIN menu_items
      ON intake_logs.item_id = menu_items.item_id
    LEFT JOIN tbl_restaurants
      ON intake_logs.restaurant_id = tbl_restaurants.restaurant_id
    ORDER BY intake_logs.date_consumed ASC
    `
  );

  return rows;
};

module.exports = { getUserIntake, getAllIntakes };