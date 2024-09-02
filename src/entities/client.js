import Entity from "./entity.js"
import clientRegisterSchema from "../validators/client.schema.js"
import { ClientRepository } from "./repository.js"

// skipcq: JS-D1001
class ClientModel extends Entity {
    static schema = clientRegisterSchema
    static repository = ClientRepository
}

export default ClientModel