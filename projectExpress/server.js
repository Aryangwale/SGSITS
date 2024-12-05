import exp from "express"
import productroute from "./route/product.route.js"
import ejs from "ejs"
import adminroute from "./route/admin.route.js"
import bodyParser from "body-parser";
import session from "express-session";
import {ok} from "./check/mycheck.js"
const app = exp();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(session({secret:"dgffgdfgjhgjhdk"}))
app.set("view engine","ejs")

app.use("/admin",adminroute)
app.use("/product", ok,productroute)

app.listen(1000,()=>{
        console.log("running")    
})
