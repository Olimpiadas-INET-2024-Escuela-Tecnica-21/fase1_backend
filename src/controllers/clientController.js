import Controller from './controller.js'
import Validator from '../validators/tokens/jwt.validator.js'
import Client from '../entities/client.js'

/**
 * A controller for the client entity
 * @extends Controller
 * @property {ClientModel} model
 */
class clientController extends Controller {

    /**
     * A test method to say hello from the controller
     * @param {import('express').Response} res 
     * @param {import('express').Request} req 
     */
    static sayHelloResponse(req , res){
        res.json({msg : Client.sayHello()})
    }

    /**
     * Finds one or many clients
     * @param {object} obj - Data to be created
     * @returns {object|Array} - The created client
    */
    static async find(obj){
        const clients = await Client.find(obj)

        return clients
    }

    /**
     * Check the query params for getting a client
     * @param {import('express').Request} req 
     * @returns 
     */
    // skipcq: JS-0105
    static checkQuery(req){
        return !req.query || (req.query?.id && req.query?.offset)
    }

    /**
     * Use case to search a client
     * @param {import('express').Request} req 
     * @param {import('express').Response} res 
     * @returns 
     */
    static async findClient(req, res){
        if (clientController.checkQuery(req)){
            res.status(400).json({msg : "Error en la query"})
        }

        try{
            const clients = await clientController.find({
                where : {
                    id : req.query?.id || 0
                },

                limit : {
                    offset : req.query?.offset || 0
                }
            })

            res.json(clients)
        } catch(e){
            clientController.findError(e.message , res)
        }
    }

    /**
     * Use case to create a new client
     * @param {import('express').Request} req 
     * @param {import('express').Response} res 
     */
    static async register(req, res){
        try{
            const existentClient = await Client.find({
                where : {
                    username : req.body.username
                }
            })

            if (existentClient){
                res.status(400).json({msg : "El cliente ya existe"})
                return
            }

            const clientReturned = await Client.create(req.body)

            const clientKey = await Validator.createAuthToken(
                {id : clientReturned.id,
                profile : clientReturned.profile},
                process.env.CLIENT_TOKEN_KEY
            )

            clientReturned.token = clientKey

            res.json(clientReturned)

        }catch(e){
            clientController.findError(e.message , res)
        }
    }

    /**
     * Validate if a token was given
     * @param {import('express').Request} req
     * @returns {string}
     */
    static validateIfTokenGiven(req){
        const header = req.header("Authorization")

        if (!header){
            return null
        }

        const token = header.replace("Bearer: ", "")
        return Validator.verify(token, process.env.CLIENT_TOKEN_KEY)
    }

    /**
     * Use case to login a client
     * @async
     * @param {import('express').Request} req
     * @param {import('express').Response} res
    */
    static async login(req, res){
        try{

            let token = clientController.validateIfTokenGiven(req)
            
            // cambiar a const
            let clientReturned = await Client.find({
                where : {
                    id : token?.id || 0,
                    profile : token?.profile || "",
                    username : req.body?.username || "",
                    password : req.body?.password || ""
                }
            })

            // solo para hacer pruebas haré esto
            console.log(`Token Received: ${token}`)
            console.log("Client Returned: ", clientReturned)
            console.log("Key: ", process.env.CLIENT_TOKEN_KEY)

            
            clientReturned = clientReturned.where
            // fin de la porqueria
            
            if (!clientReturned){
                res.status(400).json({msg : "El cliente no existe"})
                return
            }

            token = Validator.createAuthToken({
                id : clientReturned.id,
                profile : clientReturned.profile
            }, process.env.CLIENT_TOKEN_KEY)
            
            res.json(token)
        } catch(e){
            clientController.findError(e.message , res)
        }
    }


    /**
     * Update a client
     * @param {object} obj
     * @returns {object}
     */
    static async update(obj){
        const client = await Client.update(obj)
        return client
    }

    /**
     * Use case to update a client
     * @param {import('express').Request} req 
     * @param {import('express').Response} res 
     */
    static async updateClient(req, res){
        try{
            await clientController.update({
                where : {
                    id : req.params.id
                },

                data : req.body
            })

            res.json({msg : "Se ha actualizado el cliente exitosamente"})
        } catch(e){
            clientController.findError(e.message , res)
        }
    }

    /**
     * Delete a client
     * @param {object} obj
     */

    static async delete(obj){
        await Client.delete(obj)
    }

    /**
     * Use case to delete a client
     * @param {import('express').Request} req
     * @param {import('express').Response}
     * @returns
     */
    static async deleteClient(req, res){
        try{
            await clientController.delete({
                where : {
                    id : req.params.id
                }
            })

            res.json({msg : "Se ha eliminado el cliente exitosamente"})
        } catch(e){
            clientController.findError(e.message , res)
        }
    }

    /**
     * Response for an error
     * @param {string} error
     * @param {import("express").Response} res
     */
    static findError(error, res){
        error = error.split(":")
        const status = error[0]
        res.status(status).json({ msg: `Ha ocurrido el siguiente error: ${error[1]}` })
    }
}

export default clientController