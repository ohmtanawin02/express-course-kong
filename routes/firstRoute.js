import path from 'path'
import { Router } from 'express'

const __dirname = path.resolve()
const router = Router()

router.get('/',(req,res)=> {
  const products = [
    {name:"shirt",price:400,image:"/products/product1.png"},
    {name:"fan",price:300,image:"/products/product2.png"},
    {name:"headphone",price:500,image:"/products/product3.png"}
  ]
  res.render('index',{products:products})
  // const products = ["shirt","fan","headphone","keyboard"]
  // res.render('index',{products:products})
  // const name = "ohmruksiam"
  // const age = 15
  // const address = "<h3>BANGKOK</h3>"
  // res.render('index',{name:name,age:age,address:address})
})

// router.get("/",(req, res) => {
//   res.status(200)
//   res.type('text/html')
//   res.sendFile(path.join(__dirname,'templates/index.html'))
// })

// router.get("/product/:id",(req,res) => {
//   const productID = req.params.id
//   if(productID === "1") {
//     res.sendFile(path.join(__dirname,'templates/product1.html'))
//   }else if (productID === "2") {
//     res.sendFile(path.join(__dirname,'templates/product2.html'))
//   }else if (productID === "3") {
//     res.sendFile(path.join(__dirname,'templates/product3.html'))
//   }else {
//     res.redirect('/')
//   }
// })

export default router