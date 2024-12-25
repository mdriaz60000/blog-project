import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

// Middleware
app.use(express.json()); 
app.use(cors()); 

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Export the app
export default app;
