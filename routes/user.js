const express = require("express");
const Router = express.Router();

const user_controller = require("../controller/user_controller");

Router.post("/signup", user_controller.createUser);
Router.post("/login", user_controller.login);

module.exports = Router;
