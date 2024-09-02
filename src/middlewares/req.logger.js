
/**
 * Logger for all requests
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
function mainLogger(req , res , next){
    
    console.log(`method: ${req.method}`)
    console.log(`url: ${req.url}`)
    console.log(`headers: ${JSON.stringify(req.headers)}`)
    console.log(`cookies: ${JSON.stringify(req.cookies)}`)
    console.log(`params: ${JSON.stringify(req.params)}`)
    console.log(`query: ${JSON.stringify(req.query)}`)
    console.log(`body: ${JSON.stringify(req.body)}\n`)

    next();
}

export {mainLogger}