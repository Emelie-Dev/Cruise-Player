// Core Modules

// Third Party Modules

import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

import express from "express";

import morgan from "morgan";


// Local Modules

import locationRouter from "./Routes/LocationRoute.js";

//  import { createRequire } from 'module';
//  const require = createRequire(import.meta.url);

const app = express();

// For middlewares

app.disable("x-powered-by");

// app.use(compression());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(
  express.static("./Public", {
    extensions: ["html"],
  })
);

// Location Router

app.use("/api/v1/user-location", locationRouter);

export default app;
