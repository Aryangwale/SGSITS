import exp from "express"
import productroute from "./route/product.route.js"
import ejs from "ejs"
import bodyParser from "body-parser";

const app = exp();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set("view engine","ejs")

app.use("/product",productroute)

app.listen(1000,()=>{
        console.log("running")    
})
