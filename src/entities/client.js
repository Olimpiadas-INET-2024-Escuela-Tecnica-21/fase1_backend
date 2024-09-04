// import Entity from "./entity.js"
// import clientRegisterSchema from "../validators/client.schema.js"
// import { ClientRepository } from "./repository.js"

// // skipcq: JS-D1001
// class ClientModel extends Entity {
//     static schema = clientRegisterSchema
//     static repository = ClientRepository
// }

// export default ClientModel

import prisma from "prisma"

const clientInclude = {
    include:{
        shoppingCart: {
            include: {
                shoppingCartProduct: {
                    include: {
                        product: true
                    }
                }
            }
        }
    }
}

class ClientModel {

    static async create({username, email, password, address}) {
        return prisma.client.create({
            data:{
                username,
                email,
                password,
                address,
                shoppingCart:{

                    create:{

                        //Nothing

                    }

                }
            }
        })
    }

    static async findMany(){

        return prisma.client.findMany({clientInclude})

    }

    static async findById({id}){
        const clientFound = await prisma.client.findFirst({
            where:{
                id
            },
            include:{
                shoppingCart: true
            }
        })
        return clientFound
    }

}

export default ClientModel