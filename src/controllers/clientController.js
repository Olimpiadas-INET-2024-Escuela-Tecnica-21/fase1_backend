import ClientModel from '../entities/client.js'
import Controller from './controller.js'
const modeloCliente = new ClientModel()

class clientController extends Controller{

    constructor(){
        super(clientController, modeloCliente)
    }
}

export default clientController