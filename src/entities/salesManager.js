import { Entity } from './entity.js';
import salesRegisterSchema from '../validators/sales.schema.js';
import { SalesManagerRepository } from './repository.js';

class SalesManager extends Entity {
    constructor() {
        super(salesRegisterSchema , SalesManagerRepository)
    }

    async create(data) {
        throw new Error("1: Cant create a new Sales Manager" )
    }

    async update(id , data){
        throw new Error("1: Cant update a Sales Manager")
    }

    async delete(id){
        throw new Error("1: Cant delete a Sales Manager")
    }
}

export default SalesManager