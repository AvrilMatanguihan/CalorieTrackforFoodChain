const db = require("../config/db");

const getAllUsers = async () => {
  const [rows] = await db.query(
    `SELECT 
      user_id,
      firstname,
      lastname,
      gender,
      age,
      weight_kg,
      height_cm,
      activity_level,
      daily_calorie_goal,
      created_at
     FROM tbl_users`
  );
  return rows;
};

const getUserById = async (id) => {
  const [rows] = await db.query(
    `SELECT 
      user_id,
      firstname,
      lastname,
      gender,
      age,
      weight_kg,
      height_cm,
      activity_level,
      daily_calorie_goal,
      created_at
     FROM tbl_users
     WHERE user_id = ?`,
    [id]
  );

  return rows[0];
};

module.exports = {
  getAllUsers,
  getUserById,
};
