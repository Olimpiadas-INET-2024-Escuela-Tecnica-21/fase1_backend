import Entity from './entity.js';
import productRegisterSchema from '../validators/product.schema.js';
import { ProductRepository } from './repository.js';

class Product extends Entity {
    constructor() {
        super(productRegisterSchema , ProductRepository)
    }
}

export default Product