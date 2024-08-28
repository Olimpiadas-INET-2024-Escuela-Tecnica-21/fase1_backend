import prisma from "prisma"

class SalesManagerModel{

    static async create({username, password}) {
        return prisma.salesManager.create({
            data:{
                username,
                password
            }
        })
    }

    static async findMany(){

        return prisma.salesManager.findMany({

            include: {
                profile: true
            }

        })
        
    }
    
    static async findById({id}){
        const salesManagerFound = await prisma.salesManager.findFirst({
            where:{
                id
            },
            include: {
                profile: true
            }
        })
        return salesManagerFound
    }
}