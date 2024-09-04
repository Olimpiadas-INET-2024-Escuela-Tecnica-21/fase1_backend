import Seller from '../entities/seller.js';
import Controller from './controller.js';
import Validator from '../validators/tokens/jwt.validator.js';

const SellerModel = new Seller();

class SellerController extends Controller{

    constructor(){
        super(SellerModel)
    }

    async validate(req, res){ 
        
        const seller = await this.findById(req)
        const sellerKey = await Validator.createAuthToken({...seller, isSeller: true}, process.env.SELLER_TOKEN_KEY) //mismo caso que con el salesManager

        if(req.cookie != null && Validator.verify(req.cookie, sellerKey).id == seller.id){  
            return res.json({message : "Su cuenta ha sido validada"})
        }
        else{
            return res.json({message : "La cuenta no pudo ser validada"})
        }
    
    }

}

export default SellerController