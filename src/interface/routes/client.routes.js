import { Router } from "express";
import ClientController from "../../controllers/clientController.js";

const clientRouter = Router();

clientRouter.post("/sayHello" , ClientController.sayHelloResponse)

clientRouter.put("/register" , ClientController.register)

clientRouter.post("/login" , ClientController.login)

clientRouter.post("/logout" , ClientController.logout)

clientRouter.get("/" , ClientController.findClient)

export default clientRouter