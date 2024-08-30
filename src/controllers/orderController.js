import Order from '../entities/order.js'
import Controller from './controller.js'
const orderModel = new Order()

class orderController extends Controller {
    constructor() {
        super(orderController, orderModel)
    }

    static async postOrders(req, res){
        try {
            const {date, state, totalPrice, check, paymentMethod} = req.body
            await orderModel.create(date, state, totalPrice, check, paymentMethod)
        } 
        catch (error) {
            res.json({msg: error.message})
        }
    }
    
    static async deleteOrder(req, res){
        try {
            const order = await orderModel.delete(req.params.id)
        } 
        catch (error) {
            res.json({msg: error.message})
        }
    }

    static async validate(req, res){
        
    }

}

export default orderController