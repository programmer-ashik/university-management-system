import mongoose from "mongoose";
import app from "./app";
const port: number = 5000;

// Corrected logic: Use a single, better-structured main function call
async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://ashikhasan998:ashik123456@ashik.4x9wv.mongodb.net/?retryWrites=true&w=majority&appName=ashik"
    );
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
    console.log(`Data base connection successfull`);
  } catch (error) {
    console.log(`Fail to connect database`, error);
  }
}

connectDB();
