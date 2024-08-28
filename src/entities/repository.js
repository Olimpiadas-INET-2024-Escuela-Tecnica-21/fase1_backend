import { PrismaClient } from "@prisma/client"; 

//const PRISMA = new PrismaClient();

class Repository {
    static #instance = undefined

    constructor() {
        if (new.target === Repository) {
            throw new Error('Cannot instantiate Repository class');
        }

        //self.prisma = PRISMA;

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

class ClientRepository extends Repository {
    static #instance = undefined

    constructor() {
        super();

        

        if (!ClientRepository.#instance) {
            console.log('ClientRepository instance created');
            ClientRepository.#instance = this;
            return ClientRepository.#instance;
        }

        throw new Error('Cannot create another instance of ClientRepository because it is a singleton');
        
    }
}

class OrderRepository extends Repository {
    static #instance = undefined

    constructor() {
        super();

        

        if (!OrderRepository.#instance) {
            console.log('OrderRepository instance created');
            OrderRepository.#instance = this;
            return OrderRepository.#instance;
        }

        throw new Error('Cannot create another instance of OrderRepository because it is a singleton');
        
    }
}

class ProductRepository extends Repository {
    static #instance = undefined

    constructor() {
        super();

        

        if (!ProductRepository.#instance) {
            console.log('ProductRepository instance created');
            ProductRepository.#instance = this;
            return ProductRepository.#instance;
        }

        throw new Error('Cannot create another instance of ProductRepository because it is a singleton');
        
    }
}

class ProfileRepository extends Repository {
    static #instance = undefined

    constructor() {
        super();

        

        if (!ProfileRepository.#instance) {
            console.log('ProfileRepository instance created');
            ProfileRepository.#instance = this;
            return ProfileRepository.#instance;
        }

        throw new Error('Cannot create another instance of ProfileRepository because it is a singleton');
        
    }
}

class SalesManagerRepository extends Repository {
    static #instance = undefined

    constructor() {
        super();

        

        if (!SalesManagerRepository.#instance) {
            console.log('SalesManagerRepository instance created');
            SalesManagerRepository.#instance = this;
            return SalesManagerRepository.#instance;
        }

        throw new Error('Cannot create another instance of SalesManagerRepository because it is a singleton');
        
    }
}

class SellerRepository extends Repository {
    static #instance = undefined

    constructor() {
        super();
        
        

        if (!SellerRepository.#instance) {
            console.log('SellerRepository instance created');
            SellerRepository.#instance = this;
            return SellerRepository.#instance;
        }

        throw new Error('Cannot create another instance of SellerRepository because it is a singleton');
        
    }
}

export { ClientRepository, OrderRepository, ProductRepository, ProfileRepository, SalesManagerRepository, SellerRepository }