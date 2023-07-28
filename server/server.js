const express = require("express");
const cors = require("cors"); // This is new
const app = express();
require("dotenv").config();
const port = process.env.PORT;

app.use(cors()); // This is new
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require("./routes/FoodController.routes")(app);
app.listen(port, () => console.log(`Listening on port: ${port}`));
