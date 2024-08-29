import { Router } from "express";
// import { ClientController } from "../../controllers/client.controller";

const clientRouter = Router();

clientRouter.get("/" , async (req , res) => {
    res.send(req.query)
})

export default clientRouter