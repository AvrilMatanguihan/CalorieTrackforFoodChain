const express = require("express");
const cors = require("cors");

const restaurantRoutes = require("./routes/restaurants.routes");
const categoriesRoutes = require("./routes/categories.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use('/restaurants', restaurantRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

module.exports = app;