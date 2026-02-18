const express = require("express");
const cors = require("cors");

const restaurantRoutes = require('./routes/restaurants');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/restaurants', restaurantRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

module.exports = app;