import Product from '../entities/product.js'
import Controller from './controller.js'
const productModel = new Product()

class ProductController extends Controller{

    constructor(){
        super(ProductController, productModel)
    }

    static async postProducts(req, res){
        try {
            const {username, category, stock, price, description} = req.body
            await productModel.create(username, category, stock, price, description)
        } 
        catch (error) {
            res.json({msg: error.message})
        }
    }

    static async deleteProduct(req, res){
        try {
            const product = await productModel.delete(req.params.id)
        } 
        catch (error) {
            res.json({msg: error.message})
        }
    }

    static async validate(req, res){
        
    }
}

export default ProductController