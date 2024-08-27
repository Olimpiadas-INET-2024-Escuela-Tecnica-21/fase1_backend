import prisma from "prisma"

class OrderModel{

    static async create({date, state, totalPrice, check, paymentMethod}) {
        return prisma.order.create({
            data:{
                date, 
                state, 
                totalPrice, 
                check, 
                paymentMethod
            }
        })
    }

    static async findMany(){

        return prisma.order.findMany({

            include: {
                client: true,
                seller: true,
                salesManager: true
            }

        })
        
    }
    
    static async findById({id}){
        const orderFound = await prisma.order.findFirst({
            where:{
                id
            },

            include: {
                client: true,
                seller: true,
                salesManager: true
            }
        })
        return orderFound
    }
}