import ClientModel from '../entities/client.js'
import Controller from './controller.js'
import Validator from '../validators/tokens/jwt.validator.js'


const modeloCliente = new ClientModel()

class clientController extends Controller{

    constructor(){
        super(clientController, modeloCliente)
    }

    async register(req, res){
        //const {username, email, password, address} = req.body
        if(client.password == req.body.repeatPassword){
            const client = await this.create(req)
            const clientKey = await Validator.createAuthToken({...client, isSeller: false}, process.env.CLIENT_TOKEN_KEY)
            res.cookie("client", clientKey)
            return res.json(client)
        }
        else{
            return res.json({message : "las contrasenias no coinciden"})

        }
    }

    async login(req, res){
        //const {username, email, password, address} = req.body
        const client = await this.findById(req)

        if(client.email == req.body.email && client.password == req.body.password){
            const clientKey = await Validator.createAuthToken({...client, isSeller: false}, process.env.CLIENT_TOKEN_KEY)
            res.cookie("client", clientKey)
            return res.json(client)
        }
        else{
            return res.json({message : "contrasenia incorrecta"})
        } 

    }

    async logout(req, res){
        res.cookie('client', '', {
          expires: new Date(0), 
        })
        return res.json({message : "cerraste tu cuenta"})
    }

    async view(req, res){
        
        return res.json(client)
    }

    async validate(req, res){

        const client = await this.findById(req)
        const clientKey = await Validator.createAuthToken({...client, isSeller: false}, process.env.CLIENT_TOKEN_KEY)

        if(res.cookie != null && Validator.verify(res.cookie, clientKey).id == client.id){

            return res.json({message : "cuenta cliente validada"})

        }
        else{

            return res.json({message : "cuenta cliente no validada"})

        }
        
    }

    async recover(req, res){
        
    }

}

export default clientController