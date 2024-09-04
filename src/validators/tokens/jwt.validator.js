import jwt from "jsonwebtoken";

/**
 * This class is responsible for validating JWT tokens,
 * it can verify, sign, encrypt and decrypt tokens
 * @class
 */
export default class JWTValidator {

  /**
   * Decrypt a token encrypted with base64
   * @param {String.Base64} token 
   * @returns {string}
   */
  static decrypt(token){
    return atob(token)
  }

  /**
   * Verify a JWT token by using a key 
  */
  static verify(token, key) {
    const decodedToken = JWTValidator.decrypt(token)
    return jwt.verify(decodedToken, key) 
  }

  /**
   * Encrypt a token with base64
   * @param {String} token 
   * @returns {String.Base64}
   */
  static encrypt(token){
    return btoa(token)
  }

  /**
   * Sign a token with a key
   * @param {Object.object} data 
   * @param {String} key 
   * @returns {String.Base64}
   */
  static sign(data, key) {
    return jwt.sign(data, key)
  }


  /**
   * Recieve a data object and a key to create a token
   * to be send as a header -> Authorization: Bearer <token>
   * 
   * data must be an object with this structure:
   * 
   * {
   *  isSeller: Boolean
   * }
   * 
   * @param {Object.object} data 
   * @param {string} key 
   * @returns {String.Base64}
   */
  static createAuthToken(data, key) {
    return JWTValidator.sign(data, key)
  }

  /**
   * Recieve a data object and a key to create a token
   * to be used as a cookie
   * 
   * @param {Object.object} data
   * @param {string} key
   * @returns {String.Base64}
   */
  static createCookieToken(data, key) {
    return JWTValidator.sign(data, key)
  }

}