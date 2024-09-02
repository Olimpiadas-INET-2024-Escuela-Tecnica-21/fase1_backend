import Entity from "./entity.js"
import clientRegisterSchema from "../validators/client.schema.js"
import { ClientRepository } from "./clientRepository.js"

// skipcq: JS-D1001
class ClientModel extends Entity {
    constructor() {
        super(clientRegisterSchema , ClientRepository)
    }
}

export default ClientModel