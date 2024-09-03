import Controller from './controller.js'
import Validator from '../validators/tokens/jwt.validator.js'
import client from "../entities/client.js";
class clientController extends Controller{

    /**
     * A test method to say hello from the controller
     * @param {import('express').Response} res 
     * @param {import('express').Request} req 
     */
    static sayHelloResponse(req , res){
        console.log(req)
        res.json({msg : "HOLA "+req.user.nombre})
    }

    /**
     * Check the query params for getting a client
     * @param {import('express').Request} req 
     * @returns 
     */
    // skipcq: JS-0105
    static checkQuery(req){
        return !req.query || (req.query.id && req.query.offset)
    }

    /**
     * Use case to search a client
     * @param {import('express').Request} req 
     * @param {import('express').Response} res 
     * @returns 
     */
    // static async findClient(req, res){
    //     const client = await findById(req.user.id)
    //     res.json(client)
    // }


    /**
     * Use case to create a new client
     * @param {import('express').Request} req 
     * @param {import('express').Response} res 
     */
    static async register(req, res){
        try{
            const clientReturned = await client.create(req)
            const clientKey = await Validator.createAuthToken({id : client.id,
               profile : client.profile},
               process.env.CLIENT_TOKEN_KEY
            )
            clientReturned.token = clientKey
            res.json(clientReturned)
        }catch(e){
            clientController.findError(e.message , res)
        }
    }

    static async login(req, res){

        //const client = await Validator.createAuthToken({id: 123,nombre:"ezequiel"}, "123")
        const client = await Validator.createAuthToken({id: client.id, name: client.name}, process.env.CLIENT_TOKEN_KEY)
        return res.json(client)


        /*
        const {username, password} = req.body


        const client = await client.find(
            where : {
                username : username,
                password : password
            }
        )

        if(client){
            const clientKey = await Validator.createAuthToken({...client, isSeller: false}, process.env.CLIENT_TOKEN_KEY)
            clientReturned.token = clientKey
            return res.json(client)
        }
        else{
            return res.json({message : "contrasenia incorrecta"})
        } 



         */
    }

    static async view(req, res){
        
        return res.json(client)
    }

    static async validate(req, res){

        const client = await this.findById(req)
        const clientKey = await Validator.createAuthToken({id: client.id, name: client.name}, process.env.CLIENT_TOKEN_KEY)

        if(res.cookie != null && Validator.verify(res.cookie, clientKey).id == client.id){  //Duda, porque se usa el res y no el req?

            
            return res.json({message : "cuenta cliente validada"})

        }
        else{

            return res.json({message : "cuenta cliente no validada"})

        }
        
    }

}

export default clientController