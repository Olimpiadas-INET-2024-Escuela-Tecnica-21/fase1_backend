import ClientModel from '../entities/client.js'

export default class clientController {

    static async createClient(req, res){
        try{
            await ClientModel.create(req.body)
            return res.json({ msg: 'Se ha creado el cliente con éxito' })
        }
        catch(error){
            return res.json({ msg: `Ha ocurrido el siguiente error: ${error}` })
        }
    }

    static async findClients(req, res){
        try{
            const clients = await ClientModel.findmany()
            return res.json({ msg: 'Se encontraron los siguientes clientes', data: clients })
        }
        catch(error){
            return res.json({ msg: `Ha ocurrido el siguiente error: ${error}` })
        }
    } 

    static async findClientByID(req, res){
        try{
            const client = await ClientModel.findOne(req.params.id)
            return res.json({ msg: 'Se encontró el siguiente cliente', data: client })
        }
        catch(error){
            return res.json({ msg: `Ha ocurrido el siguiente error: ${error}` })
        }
    }

    static async updateClient(req, res){
        try{
            await ClientModel.update(req.params.id, req.body)
            return res.json({ msg: 'Se ha actualizado el cliente exitosamente' })
        }
        catch(error){
            return res.json({ msg: `Ha ocurrido el siguiente error: ${error}` })
        }
    }

}