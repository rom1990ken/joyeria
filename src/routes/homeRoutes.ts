import { Router } from "express";
import IndexC from "../controllers/indexController";

class HomeRoutes {
  router = Router();
  indexController:IndexC = new IndexC();

  constructor() {
      this.intializeRoutes();
  }

  intializeRoutes():void {
      this.router.get("/", this.indexController.welcome);


      //this.router.get("/", welcome);
  }
}

export default new HomeRoutes().router;