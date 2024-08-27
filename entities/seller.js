class SellerModel{

    static async create({username, password}) {
        return await prisma.seller.create({
            data:{
                username,
                password
            }
        })
    }

    static async findMany(){

        return await prisma.seller.findMany({

            include: {
                profile: true
            }

        })
        
    }
    
    static async findById({id}){
        const sellerFound = await prisma.seller.findFirst({
            where:{
                id
            },
            include: {
                profile: true
            }
        })
        return sellerFound
    }
}