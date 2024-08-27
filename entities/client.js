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
        return await prisma.client.create({
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

        return await prisma.client.findMany({clientInclude})

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