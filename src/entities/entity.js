/** 
     * Abstract class that represents an entity,
     * responsible for the CRUD operations
     * @class @abstract
     * @property {Object} schema - Zod schema to validate the data
     * @property {Object} repository - Repository to handle the data
    */
export default class Entity {
    /** 
        * Method to say hello. for testing purposes
        * @returns {string} - A greeting
    */
    // skipcq: JS-0057
    static sayHello() {
    }

    /** 
        * Validation method, uses the schema to validate the object
        * @param {object} object - Object to be validated
        * @param {Boolean} isOptional - If the object is optional
        * @returns {object} - The validated object
        * @throws {Error} - If the object is not valid
    */
    // skipcq: JS-0128, JS-0057
    static validate(object, isOptional = false) {
    }

    /** 
        * Create a new entity
        * @async
        * @param {Object} data - Data to be created
        * @throws {Error} - If the data is not valid
        * @throws {Error} - If the repository throws an error
    */
    // skipcq: JS-0057, JS-0128
    static async create(data) {
    }

    /**
     * Find one or many entities
     * @async
     * @param {Object} obj - Object to be found
     * @returns {Object|Array} - The found entity
    */
    // skipcq: JS-0128, JS-0057
    static async find(obj){
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