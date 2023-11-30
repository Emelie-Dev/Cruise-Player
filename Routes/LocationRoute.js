// Modules

import express from "express";

import locationController from "../Controllers/LocationController.js";

const Router = express.Router();

Router.route("/").get(locationController);

export default Router;
