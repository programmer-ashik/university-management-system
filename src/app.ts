// Import required modules
import cors from "cors";
import express, { Application } from "express";
import router from "./app/modules/user/user.route";

// Create an Express application instance
const app: Application = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Parse URL-encoded data (e.g., from forms)
app.use(express.urlencoded({ extended: true }));

// Mount user-related routes under /api/v1/user
app.use("/api/v1/user", router);

// Export the configured Express application
export default app;
