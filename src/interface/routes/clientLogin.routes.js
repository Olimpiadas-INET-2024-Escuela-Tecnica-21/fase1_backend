import { Router } from "express";
import ClientController from "../../controllers/clientController.js";

const clientRouter = Router();

clientRouter.post("/sayHello" , ClientController.sayHelloResponse)


export default clientRouter