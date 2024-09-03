
/**
 * Abstract class that defines the basic methods for a controller
 * @class @abstract
 * @property {Entity} model - Model to handle the data
 */
export default class Controller {
    /**
     * A test method to say hello
     * @returns {String} - A greeting
     */
    // skipcq: JS-0057
    static sayHello(){
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

    /**
     * Finds one or many entities
     * @async
     * @param {Object} obj - Object to be found
     * @returns {Object|Array} - The found entity
     */
    // skipcq: JS-0128, JS-0057
    static async find(obj){
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
     * Response for an error
     * @override
     * @param {String} error 
     * @param {import("express").Response} res 
     * @returns 
     */
    // skipcq: JS-0057, JS-0128
    static findError(error, res){
    }
}