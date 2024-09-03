import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import {config} from "dotenv";
import bearerToken from "express-bearer-token";
import { mainLogger } from "../middlewares/req.logger.js";
import clientRouter from "./routes/client.routes.js";



const app = express();
/*dotenv*/config();

app.use(cors());
app.use(cookieParser());
app.use(bearerToken());
// skipcq: JS-P1003
app.use(express.json());
app.use(mainLogger);

app.use("/client", clientRouter);

app.listen(process.env.PORT || 3000 , () => {
    console.log("Server is running on port 3000");
})