import express from "express"
import UserRouter from './routes/firstRoute.js'
import path from 'path'
const app = express()
const __dirname = path.resolve()

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
// app.use(express.static(path.join(__dirname,'public')))

app.use(UserRouter)
app.listen(4500, ()=> {
  console.log("SERVER RUNNING IS PORT 4500")
})