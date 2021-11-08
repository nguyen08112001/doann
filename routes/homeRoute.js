const express = require("express");
const route = express.Router();
const homeController = require("../controllers/homeController");

route.get("/", homeController.viewlogin);
route.post("/", homeController.authen);


module.exports = route;