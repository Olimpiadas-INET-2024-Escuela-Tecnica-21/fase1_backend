import jwt from "jsonwebtoken";


/**
 * Logger for all requests
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
function auth(req , res , next){

    try {
        const authorizationToken = req.header("Authorization");
        if (!authorizationToken) return res.status(403).send("Access denied.");
        const token = authorizationToken.replace("Bearer: ", "");
        const decoded = jwt.verify(token, "123");
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send("Invalid token");
    }
}

export {auth}