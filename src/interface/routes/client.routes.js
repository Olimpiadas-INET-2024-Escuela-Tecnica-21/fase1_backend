import { Router } from "express";
import ClientController from "../../controllers/clientController.js";

const clientRouter = Router();



clientRouter.get("/" , ClientController.findClient)
clientRouter.get("/sayHello" , ClientController.sayHelloResponse)

export default clientRouter