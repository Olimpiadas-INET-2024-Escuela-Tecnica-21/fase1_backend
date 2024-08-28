import { Entity } from './entity.js';
import salesRegisterSchema from '../validators/sales.schema.js';
import { SellerRepository } from './repository.js';

class Seller extends Entity {
    constructor() {
        super(salesRegisterSchema , SellerRepository)
    }

    async create(data) {
        throw new Error("1: Cant create a new Seller" )
    }

    async update(id , data){
        throw new Error("1: Cant update a Seller")
    }

    async delete(id){
        throw new Error("1: Cant delete a Seller")
    }
}

export default Seller