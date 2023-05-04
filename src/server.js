require("dotenv").config();
import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import logger from "../logger";

logger.info("info", "Hello", { foo: "bar" });

let app = express();

//config view Engine
configViewEngine(app);

//init all web routes
initWebRoutes(app);

let port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`HoiDanIT app is running at the port ${port}`);
});
