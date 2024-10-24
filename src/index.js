// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log(`Express Connection error !!! ${error}`);
    });
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is Running on port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error(`MONGODB connection failed (index) !!! ${error}`);
  });
