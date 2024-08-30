export default class Controller {
    constructor(controller, model) {
        if (new.target === Controller) {
            throw new Error('5: Cannot create an instance of Controller because it is an abstract class');
        }

        this.controller = controller
        this.model = model
    }

    async create(req, res){
        try{
            await this.model.create(req.body)
            return res.json({ msg: `El ${Object.getPrototypeOf(this)} ha sido creado con exito!` })
        }
        catch(e){
            return this.findError(e)
        }
    }

    async find(req, res){
        try{
            const results = await this.model.findmany()
            return res.json({ msg: `Se encontraron los siguientes resultados`, data: results })
        }
        catch(e){
            return this.findError(e)
        }
    } 

    async findById(req, res){
        try{
            const result = await this.model.findOne(req.params.id)
            return res.json({ msg: `Se encontró el siguiente ${Object.getPrototypeOf(this)}`, data: result })
        }
        catch(e){
            return this.findError(e)
        }
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

    async findError(error, res){
        return res.json({ msg: `El error es ${error.name}, cuyo mensaje es: ${error.message}` })
    }
}