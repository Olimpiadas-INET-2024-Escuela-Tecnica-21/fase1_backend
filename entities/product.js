class ProductModel{

    static async create({username, category, stock, price, description}) {
        return await prisma.product.create({
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

        return await prisma.product.findMany()
        
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