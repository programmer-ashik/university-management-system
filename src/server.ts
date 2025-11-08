// import required dependencies
import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
async function connectDB() {
  try {
    // attempt to connect to the mongoDB
    await mongoose.connect(config.database_url as string)
    // start the express server after a successful database connection
    app.listen(config.port, () => {
      console.log(`✅ Server is running on port ${config.port}`)
    })
    // login COnferimation of successful Database connection
    console.log(`Data base connection successfull`)
  } catch (error) {
    // console if have some error in connection of database
    console.error(`❌Fail to connect database`, error)
  }
}
connectDB()
