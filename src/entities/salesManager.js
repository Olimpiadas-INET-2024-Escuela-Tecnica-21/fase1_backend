import { Entity } from './entity.js';
import salesRegisterSchema from '../validators/sales.schema.js';
import { SalesManagerRepository } from './repository.js';

// skipcq: JS-D1001
class SalesManager extends Entity {
    constructor() {
        super(salesRegisterSchema , SalesManagerRepository)
    }


    /** 
         * Cant create sales manager, dont use this method
    */
    // skipcq: JS-0116, JS-0128, JS-0105
    async create(data) {
        throw new Error("4: Cant create a new Sales Manager" )
    }

    /** 
         * Cant update sales manager, dont use this method
    */
    // skipcq: JS-0116, JS-0105, JS-0128
    async update(id , data){
        throw new Error("4: Cant update a Sales Manager")
    }


    /** 
         * Cant delete sales manager, dont use this method
    */
    // skipcq: JS-0116, JS-0105, JS-0128
    async delete(id){
        throw new Error("4: Cant delete a Sales Manager")
    }
}

export default SalesManager