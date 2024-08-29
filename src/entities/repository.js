import { PrismaClient } from "@prisma/client"; 

//const PRISMA = new PrismaClient();

/**
 * Repository class
 * @abstract
 * @property {Object} prisma - Prisma client
 */
class Repository {
    static #instance = undefined

    constructor() {
        if (new.target === Repository) {
            throw new Error('Cannot instantiate Repository class');
        }

        //self.prisma = PRISMA;

    }

    // skipcq: JS-D1001
    sayHello() {
        const text = `Hello from ${Object.getPrototypeOf(this).constructor.name}`;
        console.log(text);
        return text;
    }

    
    async create(data){}

    async findMany(){}

    async findOne(){}

    async update(){}

    async delete(){}
}

/**
 * ClientRepository class, its responsible for handling the client data
 * @extends Repository
 */
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

/**
 * OrderRepository class, its responsible for handling the order data
 * @extends Repository
 */
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

/**
 * ProductRepository class, its responsible for handling the product data
 * @extends Repository
 */
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

/**
 * SalesManagerRepository class, its responsible for handling the sales manager data
 * @extends Repository
 */
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

/**
 * SellerRepository class, its responsible for handling the seller data
 * @extends Repository
 */
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

/**
 * TestRepository class, only for testing purposes
 * @extends Repository
 */
class TestRepository extends Repository {
    static #instance = undefined

    constructor() {
        super();
        
        

        if (!TestRepository.#instance) {
            console.log('TestRepository instance created');
            TestRepository.#instance = this;
            return TestRepository.#instance;
        }

        throw new Error('Cannot create another instance of TestRepository because it is a singleton');
        
    }
}

export { ClientRepository, OrderRepository, ProductRepository, SalesManagerRepository, SellerRepository, TestRepository }