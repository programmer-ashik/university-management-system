import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
const app: Application = express();
app.use(cors);
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  // Added missing types from earlier fix
  res.send("Server is running, attempting connection...");
  next();
});
export default app;
