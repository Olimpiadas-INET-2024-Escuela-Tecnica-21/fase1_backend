import { ClientRepository } from "./src/entities/repository";

test("Testing is a singleton", () => {
    try {
        const clientRepository1 = new ClientRepository();
        
        clientRepository1.sayHello();

        const clientRepository2 = new ClientRepository();

        clientRepository2.sayHello();
    } catch (error) {
        expect(error.message).toBe('Cannot create another instance of ClientRepository because it is a singleton');
    }

});