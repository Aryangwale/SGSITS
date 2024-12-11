import exp from "express";
import {addProduct} from "../controller/product.control.js";

const route = exp.Router();


route.post("/addProduct",addProduct);

export default route;