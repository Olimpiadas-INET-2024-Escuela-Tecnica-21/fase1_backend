import Entity from "./entity.js"
import clientRegisterSchema from "../validators/client.schema.js"
import { ClientRepository } from "./repository.js"

class ClientModel extends Entity {
    constructor() {
        super(clientRegisterSchema , ClientRepository)
    }
}

export default ClientModel