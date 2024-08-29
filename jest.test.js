import JWTValidator from "./src/validators/tokens/jwt.validator.js";



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