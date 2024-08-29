import Order from '../entities/order.js'
import Controller from './controller.js'
const orderModel = new Order()

class orderController extends Controller {
    constructor() {
        super(orderController, orderModel)
    }

}

export default orderController