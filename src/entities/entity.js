
/** 
     * Abstract class that represents an entity,
     * responsible for the CRUD operations
     * @class @abstract
     * @property {Object} schema - Zod schema to validate the data
     * @property {Object} repository - Repository to handle the data
    */
export default class Entity {
    constructor(schema , repository) {
        if (new.target === Entity) {
            throw new Error('5: Cannot create an instance of Entity because it is an abstract class');
        }

        this.schema = schema
        this.repository = new repository()
    }

    /** 
        * Method to say hello. for testing purposes
    */
    sayHello() {
        return this.repository.sayHello()
    }

    /** 
        * Validation method, uses the schema to validate the object
        * @param {Object} object - Object to be validated
        * @param {Boolean} isOptional - If the object is optional
        * @returns {Object} - The validated object
        * @throws {Error} - If the object is not valid
    */
    validate(object, isOptional = false) {
        return isOptional ? this.schema.parse(object) : this.schema.optional().parse(object)
    }

    /** 
        * Create a new entity
        * @async
        * @param {Object} data - Data to be created
        * @throws {Error} - If the data is not valid
        * @throws {Error} - If the repository throws an error
    */
    async create(data) {
        this.validate(data)

        await this.repository.create()
    }


    /** 
        * Find all entities
        * @async
        * @returns {Array} - Array of entities
        * @throws {Error} - If the repository throws an error
    */
    async findMany() {
        const data = await this.repository.findMany()

        return data
    }

    /** 
         * Find one entity
         * @async
         * @param {String} id - Id of the entity
         * @returns {Object} - The entity
         * @throws {Error} - If the repository throws an error
    */
    async findOne(id) {
        const data = await this.repository.findOne(id)

        return data
    }

    /** 
         * Update an entity
         * @async
         * @param {String} id - Id of the entity
         * @param {Object} data - Data to be updated
         * @throws {Error} - If the data is not valid
         * @throws {Error} - If the repository throws an error
    */
    async update(id , data){
        this.validate(data , true)

        await this.repository.update(id , data)
    }


    /** 
         * Delete an entity
         * @async
         * @param {String} id - Id of the entity
         * @throws {Error} - If the repository throws an error
    */
    async delete(id){
        await this.repository.delete(id)
    }
}