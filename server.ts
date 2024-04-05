import express, { Application } from "express";
import Server from "./src/index";

const app: Application = express();
const server: Server = new Server(app);
const PORT:number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

app.listen(PORT, "localhost", () => {
    console.log(`Server corriendo en: http://localhost:${PORT}/`)
})
.on("error", (err: any) => {
    console.error(err.code === "EADDRINUSE" ? "Error: address already in use" :err);
});