
/**
 * Abstract class that defines the basic methods for a controller
 * @class @abstract
 * @property {Entity} model - Model to handle the data
 */
export default class Controller {
    model


    /**
     * A test method to say hello
     * @returns {String} - A greeting
     */
    static sayHello(){
        return Controller.model.sayHello()
    }


    async create(req){

        const entity = await this.model.create(req.body)
        return entity

        // try{
        //     await this.model.create(req.body)
        //     return res.json({ msg: `El ${Object.getPrototypeOf(this)} ha sido creado con exito!` })
        // }
        // catch(error){
        //     return res.json({ msg: `Ha ocurrido el siguiente error: ${error}` })
        // }
    }

    async find(offset = 0){
        const data = await this.model.findMany(offset)

        return data
    } 

    /**
     * Found a specific entity by id
     * @param {Number} id 
     * @returns 
     */
    async findById(id){
        const data = await this.model.findOne(id)

        return data
    }

    async update(req, res){
        try{
            await this.model.update(req.params.id, req.body)
            return res.json({ msg: `Se ha actualizado el ${Object.getPrototypeOf(this)} exitosamente` })
        }
        catch(e){
            return this.findError(e)
        }
    }

    /**
     * 
     * @param {String} error 
     * @param {import("express").Response} res 
     * @returns 
     */
    static findError(error, res){
        error = error.split(":")
        const status = error[0]
        res.status(status).json({ msg: `Ha ocurrido el siguiente error: ${error[1]}` })
    }
}