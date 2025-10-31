// import required dependencies
import mongoose from "mongoose";
import app from "./app";

// define the server port
const port: number = 5000;
/**
 * Connect to the MongoDB database using Mongoose
 * and start express server once the conncetion is successful.
 */
async function connectDB() {
  try {
    // attempt to connect to the mongoDB
    await mongoose.connect(
      "mongodb+srv://ashikhasan998:ashik123456@ashik.4x9wv.mongodb.net/?retryWrites=true&w=majority&appName=ashik"
    );
    // start the express server after a successful database connection
    app.listen(port, () => {
      console.log(`✅ Server is running on port ${port}`);
    });
    // login COnferimation of successful Database connection
    console.log(`Data base connection successfull`);
  } catch (error) {
    // console if have some error in connection of database
    console.error(`❌Fail to connect database`, error);
  }
}

connectDB();
