import exp from "express";
import {addCategory} from "../controller/category.control.js"
const route = exp.Router();

route.post("/addCategory",addCategory);

export default route