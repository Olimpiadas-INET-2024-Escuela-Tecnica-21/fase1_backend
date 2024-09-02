import { Router } from "express";
import ClientController from "../../controllers/clientController.js";

const loginRouter = Router();


loginRouter.put("/register" , ClientController.register)
loginRouter.post("/login" , ClientController.login)


export default loginRouter