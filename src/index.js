// require('dotenv').config({path: './env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";

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

/* const app = express()
  (async () => {
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      app.on('error', (error) => {
        console.log("Express Error: ", error);
        throw error
      })

      app.listen(process.env.PORT, () => {
        console.log(`The app is listening on the port: ${process.env.PORT}`);
      })
    } catch (error) {
      console.error("Error: ", error);
      throw error;
    }
  })();
 */
