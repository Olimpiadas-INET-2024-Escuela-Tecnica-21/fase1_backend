import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient();

class Repository {
    constructor() {
        if (new.target === Repository) {
            throw new Error('Cannot instantiate Repository class');
        }
    }

    sayHello() {
        console.log(`hello from ${Object.getPrototypeOf(this).constructor.name}`);
    }

    async create(data){}

    async findMany(){}

    async findOne(){}

    async update(){}

    async delete(){}
}

class UserRepository extends Repository {
    static #instance = undefined

    constructor() {
        super();

        if (!UserRepository.#instance) {
            console.log('UserRepository instance created');
            UserRepository.#instance = this;
            return UserRepository.#instance;
        }

        throw new Error('Cannot create another instance of UserRepository because it is a singleton');
        
    }
}