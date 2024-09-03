import { PrismaClient } from "@prisma/client"; 

const PRISMA = new PrismaClient();

/**
 * Repository class
 * @abstract
 * @property {Object} prisma - Prisma client
 */
class Repository {
    /**
     * A test method to say hello
     * @override
     */
    // skipcq: JS-0105, JS-0128, JS-0057
    static sayHello() {
    }

    /**
     * Creates a new entity in the database
     * @async
     * @override
     * @param {Object.object} data
     * @returns {Object.object}
     */
    // skipcq: JS-0105, JS-0128, JS-0057
    async create(data){}

    /**
     * Finds all entities in the database
     * @async
     * @override
     * @param {object} obj
     * @returns {Array|object}
     */
    // skipcq: JS-0105, JS-0128, JS-0057
    async find(obj){}

    /**
     * Updates an entity in the database
     * @async
     * @override
     * @param {Object.object} data
     * @throws {Error('Entity not found')}
     */
    // skipcq: JS-0105, JS-0128, JS-0057
    async update(id){}


    /**
     * Deletes an entity in the database
     * @async
     * @override
     * @param {Number} id
     */
    // skipcq: JS-0105, JS-0128, JS-0057
    async delete(id){}
}

/**
 * ClientRepository class, its responsible for handling the client data
 * @extends Repository
 */
class ClientRepository extends Repository {
    static prisma = PRISMA
    /**
     * A test method to say hello from the repository
     * @returns {String} - A greeting
     */
    static sayHello() {
        return 'Hello from ClientRepository';
    }

    static async find(obj){
        // mientras tanto...
        // el objeto tiene que tener un where y un limit
        // si tiene id, prisma.findOne
        // si tiene where, prisma.findMany

        return obj
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
            // skipcq: JS-0109
            return OrderRepository.#instance;
        }

        throw new Error('500:Cannot create another instance of OrderRepository because it is a singleton');
        
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
            // skipcq: JS-0109
            return ProductRepository.#instance;
        }

        throw new Error('500:Cannot create another instance of ProductRepository because it is a singleton');
        
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
            // skipcq: JS-0109
            return SalesManagerRepository.#instance;
        }

        throw new Error('500:Cannot create another instance of SalesManagerRepository because it is a singleton');
        
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
            // skipcq: JS-0109
            return SellerRepository.#instance;
        }

        throw new Error('500:Cannot create another instance of SellerRepository because it is a singleton');
        
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
            // skipcq: JS-0109
            return TestRepository.#instance;
        }

        throw new Error('500:Cannot create another instance of TestRepository because it is a singleton');
        
    }
}

export { ClientRepository, OrderRepository, ProductRepository, SalesManagerRepository, SellerRepository, TestRepository }