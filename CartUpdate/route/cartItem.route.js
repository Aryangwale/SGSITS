import exp from "express";
import {addToCart} from "../controller/cartItem.control.js"

const route = exp.Router()
route.post("/addToCart",addToCart)
export default route