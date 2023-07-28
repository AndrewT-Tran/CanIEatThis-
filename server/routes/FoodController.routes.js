const FoodController = require("../controllers/Food.controller");
module.exports = function (app) {
	app.get("/api/nutrition-data", FoodController.index);
};
