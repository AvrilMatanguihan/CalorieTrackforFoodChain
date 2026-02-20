const intake = require("../models/intakelogs.models");

const getIntake = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await intake.getUserIntake(id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllIntakefromAllUsers = async (req, res) => {
  try {
    const data = await intake.getAllIntakes();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getIntake, getAllIntakefromAllUsers };