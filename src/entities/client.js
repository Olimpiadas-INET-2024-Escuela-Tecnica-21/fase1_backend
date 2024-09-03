import Entity from "./entity.js"
import clientRegisterSchema from "../validators/client.schema.js"
import { ClientRepository } from "./repository.js"

// skipcq: JS-D1001
class ClientModel extends Entity {

    /**
     * A test method to say hello from the model
     * @returns {string} - A greeting
     */
    static sayHello() {
        return ClientRepository.sayHello()
    }

    /**
     * Finds one or many clients
     * @async
     * @param {object} data - Data to be created
     * @returns {object|Array} - The created client
     * @throws {Error} - If the repository throws an error
     */
    static async find(obj){
        const clients = await ClientRepository.find(obj)
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
        console.log("validating")
        return isOptional ? clientRegisterSchema.optional(object) : clientRegisterSchema.parse(object)
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

        const client = await ClientRepository.create(data)
        return client
    }


    /**
     * Update a client
     * @async
     * @param {number} id 
     * @param {object} obj
     * @throws {Error} - If the data is not valid
     * @throws {Error} - If the repository throws an error
     * @returns {object} - The updated client
     */
    static async update(obj) {
        ClientModel.validate(obj.data, true)

        const updatedClient = await ClientRepository.update(obj.data)

        return updatedClient
    }

    /**
     * Delete a client
     * @async
     * @param {object} obj
     * @throws {Error} - If the repository throws an error
     */
    static async delete(obj) {
        await ClientRepository.delete(obj)
    }
}

export default ClientModel