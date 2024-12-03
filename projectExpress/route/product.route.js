import exp from "express";
import {home ,addpro,addproAction,allpro} from "../controller/product.control.js"



const route = exp.Router();


route.get("/",home)
route.get("/add",addpro)
route.post("/add",addproAction)
route.get("/all",allpro)

export default route;