import Cookie from 'cookie-parser'
import Express from 'express'
import Cors from 'cors'

const app = Express()
app.use(Cookie())
app.use(Cors())
app.listen(process.env.TOKEN)



