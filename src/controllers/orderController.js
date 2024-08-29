import Order from '../entities/order.js'

class orderController {

    static async createOrder(req, res){
        try {
            await Order.create(req.body)
            return res.json({ msg: 'Se ha creado la orden exitosamente!' })
        }
        catch(error){
            return res.json({ msg: `Ha ocurrido el siguiente error: ${error}` })
        }        
    }

    static async readOrders(req, res){
        try {
            const orderResult = await Order.findmany()
            return res.json({ msg: 'La busqueda fue exitosa!', data : orderResult })
        }   
        catch(error){
            return res.json({ msg: `Ha ocurrido el siguiente error: ${error}` })
        }
    }

    static async readOrderByID(req, res){
        try {
            const orderResult = await Order.findOne(req.params.id)
            return res.json({ msg: 'La busqueda fue exitosa!', data : orderResult })
        }
        catch(error){
            return res.json({ msg: `Ha ocurrido el siguiente error: ${error}` })
        }
    }

    static async updateOrder(req, res){
        try {
            await Order.update(req.params.id, req.body)
            return res.json({ msg: 'El pedido se ha actualizado correctamente!' })
        }
        catch(error){
            return res.json({ msg: `Ha ocurrido el siguiente error: ${error}` })
        }
    }

}



module.exports = orderController