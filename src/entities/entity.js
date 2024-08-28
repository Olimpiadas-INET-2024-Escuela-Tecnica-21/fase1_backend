export default class Entity {
    constructor(schema , repository) {
        if (new.target === Entity) {
            throw new Error('Cannot create an instance of Entity because it is an abstract class');
        }

        this.schema = schema
        this.repository = repository
    }

    validate(object, isOptional = false) {
        return isOptional ? this.schema.parse(object) : this.schema.optional().parse(object)
    }

    async create(data) {
        this.validate(data)

        await this.repository.create()
    }

    async findMany() {
        let data = await this.repository.findMany()

        return data
    }

    async findOne(id) {
        let data = await this.repository.findOne(id)

        return data
    }

    async update(id , data){
        this.validate(data , true)

        await this.repository.update(id , data)
    }

    async delete(id){
        await this.repository.delete(id)
    }
}