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


const getUserDailySummary = async(user_id)=>{
  const [rows] = await db.query(
    `
    SELECT
      intake_logs.date_consumed,
      SUM(menu_items.calories * intake_logs.quantity) AS total_calories
    FROM intake_logs
    LEFT JOIN menu_items
      ON intake_logs.item_id = menu_items.item_id
    WHERE intake_logs.user_id = ?
    GROUP BY intake_logs.date_consumed
    ORDER BY intake_logs.date_consumed ASC
    `,
    [user_id]
  );

  return rows;
};

const getUserFavorites = async(user_id)=>{
  const [rows] = await db.query(
    `
    SELECT
      CONCAT(tbl_users.firstname, ' ', tbl_users.lastname) AS user,
      menu_items.item_name,
      tbl_restaurants.restaurant_name,
      SUM(intake_logs.quantity) AS total_eaten
    FROM intake_logs
    LEFT JOIN tbl_users
      ON intake_logs.user_id = tbl_users.user_id
    LEFT JOIN menu_items
      ON intake_logs.item_id = menu_items.item_id
    LEFT JOIN tbl_restaurants
      ON intake_logs.restaurant_id = tbl_restaurants.restaurant_id
    WHERE intake_logs.user_id = ?
    GROUP BY intake_logs.user_id, intake_logs.item_id, intake_logs.restaurant_id
    ORDER BY total_eaten DESC
    `,
    [user_id]
  );

  return rows;
};

const getRestaurantStats = async(restaurant_id)=>{
  const [rows] = await db.query(
    `
    SELECT
      tbl_restaurants.restaurant_name,
      CONCAT(tbl_users.firstname, ' ', tbl_users.lastname) AS user,
      SUM(menu_items.calories * intake_logs.quantity) AS total_calories_consumed,
      COUNT(*) AS times_consumed
    FROM intake_logs
    LEFT JOIN menu_items
      ON intake_logs.item_id = menu_items.item_id
    LEFT JOIN tbl_restaurants
      ON intake_logs.restaurant_id = tbl_restaurants.restaurant_id
    LEFT JOIN tbl_users
      ON intake_logs.user_id = tbl_users.user_id
    WHERE intake_logs.restaurant_id = ?
    GROUP BY intake_logs.user_id
    `,
    [restaurant_id]
  );


  return rows;
};

module.exports = {
  getUserIntake,
  getAllIntakes,
  getUserDailySummary,
  getUserFavorites,
  getRestaurantStats
};