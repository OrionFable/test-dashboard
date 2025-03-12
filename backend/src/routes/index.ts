import { Application } from "express";
import playerRoutes from "./playerRoute";

export default class Routes {
  constructor(app: Application) {
    app.use("/api/players", playerRoutes);
  }
}
