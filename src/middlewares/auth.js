import JWTValidator from "../validators/tokens/jwt.validator.js";

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Request} res 
 * @param {import("express").Request} next
 * @param {string} key
 * @returns {void}
 */
// skipcq: JS-0045
function auth(req, res, next , key){

    try {
        const authorizationToken = req.header("Authorization");
        if (!authorizationToken) return res.status(403).send("Access denied.");
        const token = authorizationToken.replace("Bearer: ", "");
        const decoded = JWTValidator.verify(token, key);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send("Invalid token");
    }
}

export {auth}