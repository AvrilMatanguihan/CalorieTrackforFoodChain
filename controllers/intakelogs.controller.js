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

const getAllIntake = async (req, res) => {
  try {
    const data = await intake.getAllIntakes();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDailySummary = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await intake.getUserDailySummary(id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFavorites = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await intake.getUserFavorites(id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRestaurantStats = async (req, res) => {
  try {
    const id = req.params.id; 
    const data = await intake.getRestaurantStats(id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getIntake,
  getAllIntake,
  getDailySummary,
  getFavorites,
  getRestaurantStats
};