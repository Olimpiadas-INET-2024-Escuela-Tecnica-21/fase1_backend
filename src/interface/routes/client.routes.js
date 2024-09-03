import { Router } from "express";
import ClientController from "../../controllers/clientController.js";
import {auth} from "../../middlewares/auth.js";

const clientRouter = Router();


clientRouter.get("/" , ClientController.findClient)

clientRouter.get("/sayHello" , ClientController.sayHelloResponse)

clientRouter.post("/register" , ClientController.register)

clientRouter.put("/login" , ClientController.login)

clientRouter.post("/update:id" , (req , res , next) => {
                                auth(req, res , next , process.env.CLIENT_TOKEN_KEY)},
                                ClientController.updateClient
)

clientRouter.delete("/delete:id" , (req , res , next) => {
                                auth(req, res , next , process.env.CLIENT_TOKEN_KEY)},
                                ClientController.deleteClient
)

export default clientRouter