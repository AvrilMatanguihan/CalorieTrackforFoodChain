const db = require("../config/db");

const getAllCategories = async () => {
  const [rows] = await db.query("SELECT category_id, name FROM tbl_categories");
  return rows;
};

module.exports = { getAllCategories };
