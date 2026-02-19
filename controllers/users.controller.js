const user = require("../models/users.model");

const getAllUsers = async (req, res) => {
  try {
    const data = await user.getAllUsers();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const data = await user.getUserById(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  getSingleUser,
};
