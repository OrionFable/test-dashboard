import express, { Application } from "express";
import Server from "./src/index";

require("dotenv").config();

const app: Application = express();

new Server(app);

const HOST: string = process.env.HOST ? process.env.HOST : "localhost";
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;

// Middleware
app.use(express.json());

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
