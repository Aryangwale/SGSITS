import exp from "express";
import {home ,addpro,addproAction,allpro,proUpdate,proUpdateAction} from "../controller/product.control.js"



const route = exp.Router();


route.get("/",home)
route.get("/add",addpro)
route.post("/add",addproAction)
route.get("/all",allpro)
route.get("/update/:id",proUpdate)
route.post("/update",proUpdateAction)
// route.get("/all",allpro)
// params = {"id" : "7"}
// req.params.id
export default route;