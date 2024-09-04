import Entity from './entity.js';
import orderRegisterSchema from '../validators/order.schema.js';
import { OrderRepository } from './repository.js';

// skipcq: JS-D1001
class Order extends Entity {
    constructor() {
        super(orderRegisterSchema , OrderRepository)
    }
}

export default Order