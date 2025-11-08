// Import required modules
import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import userRoute from './app/module/users/user.route'
// Create an Express application instance
const app: Application = express()

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors())

// Parse incoming JSON requests
app.use(express.json())

// Parse URL-encoded data (e.g., from forms)
app.use(express.urlencoded({ extended: true }))
//routing start from hare
// Mount user-related routes under /api/v1/user
// applications router
app.use('/api/v1/users/', userRoute.router)

// app.use("/api/v1/user", );
app.get('/', async (_req: Request, res: Response) => {
  res.send('Server run sucessFully')
})
// Export the configured Express application
export default app
