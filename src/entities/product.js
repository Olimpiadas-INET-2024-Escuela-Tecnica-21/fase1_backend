import Entity from './entity.js';
import productRegisterSchema from '../validators/product.schema.js';
import { ProductRepository } from './repository.js';

// skipcq: JS-D1001
class Product extends Entity {
    constructor() {
        super(productRegisterSchema , ProductRepository)
    }
}

export default Product