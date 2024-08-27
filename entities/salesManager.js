import prisma from "prisma"

class SalesManagerModel{

    static async create({username, password}) {
        return await prisma.salesManager.create({
            data:{
                username,
                password
            }
        })
    }

    static async findMany(){

        return await prisma.salesManager.findMany({

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