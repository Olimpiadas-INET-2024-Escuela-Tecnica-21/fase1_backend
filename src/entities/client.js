import Entity from "./entity.js"
import clientRegisterSchema from "../validators/client.schema.js"
import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient()

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
     * @param {number} offset - limit query
     * @returns {object|Array} - The created client
     * @throws {Error} - If the repository throws an error
     */
    static async findMany(offset = 0){
        const clients = await prisma.client.findMany({
            take : offset
        })
        return clients
    }

    static async findClient(id){
        const client = await prisma.client.findUnique({
            where : {
                id : id
            }
        })
        return client
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
     * @returns {object} - The created client
     */
    static async create({ username, password, email, address }) {
        const newClient = await prisma.client.create({
            username : username,
            password : password,
            email : email,
            address : address
        })
        return newClient
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
    static async update(id, data) {
        ClientModel.validate(data)

        const updatedClient = await prisma.client.update({
            where : {
                id : id
            },
            data
        })

        return updatedClient
    }

    /**
     * Delete a client
     * @async
     * @param {number} id
     * @throws {Error} - If the repository throws an error
     */
    static async delete(id) {
        await prisma.client.delete({
            where : {
                id : id
            }
        })
    }
}

export default ClientModel