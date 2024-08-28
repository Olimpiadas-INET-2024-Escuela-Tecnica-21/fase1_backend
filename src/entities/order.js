import { Entity } from './entity.js';
import orderRegisterSchema from '../validators/order.schema.js';
import { OrderRepository } from './repository.js';

class Order extends Entity {
    constructor() {
        super(orderRegisterSchema , OrderRepository)
    }
}

export default Order