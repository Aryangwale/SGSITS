import exp from "express";
import userRoute from "./route/user.route.js"
import bodyParser from "body-parser";
import categoryRoute from "./route/category.route.js"
import productRoute from "./route/product.route.js"
import cartItemRoute from "./route/cartItem.route.js"
const app = exp();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.use("/category",categoryRoute)
app.use("/product",productRoute)
app.use("/cart",cartItemRoute)
app.use("/user",userRoute)
app.listen(2000,()=>{
    console.log("ok");
})