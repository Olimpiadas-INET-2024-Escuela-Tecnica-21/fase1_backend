import { Entity } from './entity.js';
import salesRegisterSchema from '../validators/sales.schema.js';
import { SellerRepository } from './repository.js';

class Seller extends Entity {
    constructor() {
        super(salesRegisterSchema , SellerRepository)
    }

    /** 
         * Cant create Seller, dont use this method
    */
    async create(data) {
        throw new Error("4: Cant create a new Seller" )
    }

    /** 
         * Cant update Seller, dont use this method
    */
    async update(id , data){
        throw new Error("4: Cant update a Seller")
    }
    
    /** 
         * Cant delete Seller, dont use this method
    */
    async delete(id){
        throw new Error("4: Cant delete a Seller")
    }
}

export default Seller