import clientRouter from '../interface/routes/client.routes'

const express = require('express')
const app = express()
const clientController = "../controllers/clientController.js"

app.get('/client', (req, res) => {
    
  res.send('hello world')
  
})

app.get('/client/id', (req, res) => {
    res.send('hello world')
  })

export default clientRouter

