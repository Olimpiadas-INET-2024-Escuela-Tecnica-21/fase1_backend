import Entity from "./entity.js"
import clientRegisterSchema from "../validators/client.schema.js"
import { ClientRepository } from "./repository.js"

// skipcq: JS-D1001
class ClientModel extends Entity {
    static schema = clientRegisterSchema
    static repository = ClientRepository

    /**
     * A test method to say hello from the model
     * @returns {string} - A greeting
     */
    static sayHello() {
        return ClientModel.repository.sayHello()
    }

    /**
     * Finds one or many clients
     * @async
     * @param {object} data - Data to be created
     * @returns {object|Array} - The created client
     * @throws {Error} - If the repository throws an error
     */
    static async find(obj){
        const clients = await ClientModel.repository.find(obj)
        return clients
    }

    /**
     * Validation method, uses the schema to validate the object
     * @param {object} object - Object to be validated
     * @param {Boolean} isOptional - If the object is optional
     * @returns {object} - The validated object
     * @throws {Error} - If the object is not valid
     */
    static validate(object, isOptional = false) {
        return isOptional ? this.schema.parse(object) : this.schema.optional().parse(object)
    }

    /**
     * Create a new client
     * @async
     * @param {object} data - Data to be created
     * @throws {Error} - If the data is not valid
     * @throws {Error} - If the repository throws an error
     * @returns {object} - The created client
     */
    static async create(data) {
        ClientModel.validate(data)

        const client = await ClientModel.repository.create(data)
        return client
    }

    // crear acá update y delete
}

export default ClientModel