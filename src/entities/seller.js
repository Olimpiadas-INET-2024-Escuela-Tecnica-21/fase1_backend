import { Entity } from './entity.js';
import salesRegisterSchema from '../validators/sales.schema.js';
import { SellerRepository } from './repository.js';

// skipcq: JS-D1001
class Seller extends Entity {
    constructor() {
        super(salesRegisterSchema , SellerRepository)
    }

    /** 
         * Cant create Seller, dont use this method
    */
    // skipcq: JS-0116, JS-0105, JS-0128
    async create(data) {
        throw new Error("4: Cant create a new Seller" )
    }

    /** 
         * Cant update Seller, dont use this method
    */
    // skipcq: JS-0116, JS-0105, JS-0128
    async update(id , data){
        throw new Error("4: Cant update a Seller")
    }
    
    /** 
         * Cant delete Seller, dont use this method
    */
    // skipcq: JS-0116, JS-0105, JS-0128
    async delete(id){
        throw new Error("4: Cant delete a Seller")
    }
}

export default Seller