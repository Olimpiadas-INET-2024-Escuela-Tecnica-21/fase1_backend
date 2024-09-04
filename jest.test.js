import JWTValidator from "./src/validators/tokens/jwt.validator.js";
import TestController from "./src/controllers/testController.js";

test("Check if server is running", () => {
    fetch("http://localhost:3000/client/sayHello", {method: "POST"})
    .then(response => {
        // skipcq: JS-A1004
        console.log(`Reponse said: ${response.json()}`)
        expect(response.status).toBe(200)
    })
})

test("Testing controller talks to repository", () => {
    console.log("Realizando el test...")
    const testController = new TestController()

    expect(testController.sayHello()).toBe("Hello from TestRepository")
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