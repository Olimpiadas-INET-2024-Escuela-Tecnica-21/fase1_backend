import prisma from "prisma"

class ProductModel{

    static async create({username, category, stock, price, description}) {
        return prisma.product.create({
            data:{
                username, 
                category, 
                stock, 
                price, 
                description
            }
        })
    }

    static async findMany(){

        return prisma.product.findMany()
        
    }
    
    static async findById({id}){
        const productFound = await prisma.product.findFirst({
            where:{
                id
            },
        })
        return productFound
    }
}