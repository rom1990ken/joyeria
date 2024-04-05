"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = __importDefault(require("../controllers/indexController"));
class HomeRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.indexController = new indexController_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.get("/", this.indexController.welcome);
    }
}
exports.default = new HomeRoutes().router;
//# sourceMappingURL=homeRoutes.js.map