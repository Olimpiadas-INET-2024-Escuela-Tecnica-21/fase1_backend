import SalesManager from '../entities/salesManager.js';
import Controller from './controller.js';
import Validator from '../validators/tokens/jwt.validator.js';

const ManagerModel = new SalesManager();

class SalesManagerController extends Controller{

    constructor(){
        super(ManagerModel)
    }

    async validate(req, res){ 
        
        const manager = await this.findById(req)
        const managerKey = await Validator.createAuthToken({...manager, isSeller: true}, process.env.MANAGER_TOKEN_KEY) //como no tengo el archivo env voy a inventar el nombre del token

        if(req.cookie != null && Validator.verify(req.cookie, managerKey).id == manager.id){  
            return res.json({message : "Su cuenta ha sido validada"})
        }
        else{
            return res.json({message : "La cuenta no pudo ser validada"})
        }
    
    }

}

export default SalesManagerController