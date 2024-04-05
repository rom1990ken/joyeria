"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./src/index"));
const app = (0, express_1.default)();
const server = new index_1.default(app);
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;
app.listen(PORT, "localhost", () => {
    console.log(`Server corriendo en: http://localhost:${PORT}/`);
})
    .on("error", (err) => {
    console.error(err.code === "EADDRINUSE" ? "Error: address already in use" : err);
});
//# sourceMappingURL=server.js.map