import { Application } from "express";
import IndexC from "./homeRoutes";

export default class Routes {

  //URL's
  constructor(app: Application) {
    app.use("/api", IndexC);
  }
}