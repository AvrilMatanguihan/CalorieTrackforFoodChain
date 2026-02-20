const express = require("express");
const cors = require("cors");

const restaurantRoutes = require("./routes/restaurants.routes");
const categoriesRoutes = require("./routes/categories.routes");
const menuRoutes = require("./routes/menu.routes");
const usersRoutes = require("./routes/users.routes");
const intakelogsRoutes = require("./routes/intakelogs.routes");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use('/restaurants', restaurantRoutes);
app.use("/menu", menuRoutes);
app.use("/users", usersRoutes);
app.use("/intakelogs", intakelogsRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

module.exports = app;