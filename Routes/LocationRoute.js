// Modules

import express from "express";

import * as controllers from "../Controllers/LocationController.js";

const Router = express.Router();

Router.route("/").get(controllers.getLocation);

export default Router;
