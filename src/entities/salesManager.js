import { Entity } from './entity.js';
import salesRegisterSchema from '../validators/sales.schema.js';
import { SalesManagerRepository } from './repository.js';

class SalesManager extends Entity {
    constructor() {
        super(salesRegisterSchema , SalesManagerRepository)
    }


    /** 
         * Cant create sales manager, dont use this method
    */
    async create(data) {
        throw new Error("1: Cant create a new Sales Manager" )
    }

    /** 
         * Cant update sales manager, dont use this method
    */
    async update(id , data){
        throw new Error("1: Cant update a Sales Manager")
    }


    /** 
         * Cant delete sales manager, dont use this method
    */
    async delete(id){
        throw new Error("1: Cant delete a Sales Manager")
    }
}

export default SalesManager