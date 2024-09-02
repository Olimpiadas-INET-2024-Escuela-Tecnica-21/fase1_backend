import ClientModel from '../entities/client.js'
import Controller from './controller.js'
import Validator from '../validators/tokens/jwt.validator.js'

class clientController extends Controller{
    model = ClientModel

    /**
     * A test method to say hello from the controller
     * @param {import('express').Response} res 
     * @param {import('express').Request} req 
     */
    static sayHelloResponse(req , res){
        
        res.json({msg : this.sayHello()})
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
    static async findClient(req, res){
        try{
            if (this.checkQuery(req)){
                throw new Error("400:Revise su solicitud")
            }

            if (req.query.id){
                res.json(await this.findById(req.query.id))
                return
            }
            else {
                res.json(await this.find(req.query?.offset||0))
                return
            }
            
        }
        catch(e){
            clientController.findError(e.message  , res)
            
        }
    }


    /**
     * Use case to create a new client
     * @param {import('express').Request} req 
     * @param {import('express').Response} res 
     */
    static async register(req, res){
        try{
            const client = await this.create(req)

            const clientKey = await Validator.createAuthToken({id : client.id,
                                                               profile : client.profile},
                                                               process.env.CLIENT_TOKEN_KEY
                                                            )
            res.set("Authorization", clientKey)
            res.setHeader("Authorization", clientKey)
            res.json(client)
        }catch(e){
            clientController.findError(e.message , res)
        }
    }

    static async login(req, res){
        //const {username, email, password, address} = req.body
        const client = await this.findById(req)

        if(client.email == req.body.email && client.password == req.body.password){
            const clientKey = await Validator.createAuthToken({...client, isSeller: false}, process.env.CLIENT_TOKEN_KEY)
            res.set("Authorization", clientKey)
            res.setHeader("Authorization", clientKey)
            return res.json(client)
        }
        else{
            return res.json({message : "contrasenia incorrecta"})
        } 

    }

    static async logout(req, res){
        res.set('client', '', {
          expires: new Date(0), 
        })
        return res.json({message : "cerraste tu cuenta"})
    }

    static async view(req, res){
        
        return res.json(client)
    }

    static async validate(req, res){

        const client = await this.findById(req)
        const clientKey = await Validator.createAuthToken({...client, isSeller: false}, process.env.CLIENT_TOKEN_KEY)

        if(res.cookie != null && Validator.verify(res.cookie, clientKey).id == client.id){  //Duda, porque se usa el res y no el req?

            return res.json({message : "cuenta cliente validada"})

        }
        else{

            return res.json({message : "cuenta cliente no validada"})

        }
        
    }

}

export default clientController