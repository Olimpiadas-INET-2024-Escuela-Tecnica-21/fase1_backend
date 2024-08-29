const productModel = require('../entities/product.js')
const express = require("express")
const app = express()
const port = process.env.PORT || 3001

class ProductController{

    static async getProducts(req, res){
        try {
            const products = await productModel.findMany()
            res.json(products)
        } 
        catch (error) {
            res.json({msg: error.message})
        }

    }

    static async setProducts(req, res){
        try {
            const products = await productModel.create(req.params.data)
        } 
        catch (error) {
            res.json({msg: error.message})
        }
    }

    static async postProducts(req, res){
        try {
            const {username, category, stock, price, description} = req.body
            const products = await productModel.create(username, category, stock, price, description)
        } 
        catch (error) {
            res.json({msg: error.message})
        }
    }

    static async getProduct(req, res){
        try {
            const product = await productModel.findOne(req.params.id)
            res.json(product)
        } 
        catch (error) {
            res.json({msg: error.message})
        }
    }

    static async updateProduct(req, res){
        try {
            const product = await productModel.update(req.params.id)
        } 
        catch (error) {
            res.json({msg: error.message})
        }
    }
    
    static async deleteProduct(req, res){
        try {
            const product = await productModel.delete(req.params.id)
        } 
        catch (error) {
            res.json({msg: error.message})
        }
    }

    static async validate(req, res){
        
    }
  
}

module.exports = ProductController