import prisma from "prisma"

class ProfileModel{

    static async create({name}) {
        return prisma.profile.create({
            data:{
                name
            }
        })
    }

    static async findMany(){

        return await prisma.profile.findMany()
        
    }
    
    static async findById({id}){
        const profileFound = await prisma.profile.findFirst({
            where:{
                id
            }
        })
        return profileFound
    }
}
