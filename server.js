// Modules

import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

import app from "./app.js";

import * as mongoose from "mongoose";

(async () => {
  try {
    await mongoose.connect(process.env.LOCAL_CON_STR, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("DB Connection Successfull...\n");
  } catch (err) {
    console.log(`Connection Error: ${err}`);
  }
})();

const port = process.env.PORT || 1000;

app.listen(port, (err) => {
  console.log("The server has started....\n");

  if (err) {
    console.log(err);
  }
});
