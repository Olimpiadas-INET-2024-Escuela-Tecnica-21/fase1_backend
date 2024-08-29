import TestEntity from "./src/entities/test.entity.js";
import JWTValidator from "./src/validators/tokens/jwt.validator.js";

const testEntity = new TestEntity()

test("Testing entity talks to repository", () => {
    expect(testEntity.sayHello()).toBe("Hello from TestRepository");
})

test("Testing repository is a singleton", () => {
    try{
        // skipcq: JS-R1002
        new TestEntity()
    } catch (e) {
        expect(e.message).toBe('Cannot create another instance of TestRepository because it is a singleton')
    }
})

test("Testing JWTValidator can sign", () => {
    const token = JWTValidator.sign({data : "data"} , "armando")

    console.log(`Token encrypted: ${token}`)

    expect(() => {
        
        console.log(`Data Decrypted: ${JWTValidator.verify(token , "armando")}`)
        
        }).not.toThrow()
})

test("Testing JWTValidator can createAuthToken and CookieToken", () => {
    const token = JWTValidator.createAuthToken({isSeller: true} , "armando")

    console.log(`Token encrypted: ${token}`)

    expect(() => {
        
        console.log(`Data Decrypted: ${JWTValidator.verify(token , "armando")}`)
        
        }).not.toThrow()

    const cookieToken = JWTValidator.createCookieToken({data : "data"} , "armando")

    console.log(`Cookie Token: ${cookieToken}`)

    expect(() => {
        
        console.log(`Data Decrypted: ${JWTValidator.verify(cookieToken , "armando")}`)
        
        }).not.toThrow()
})