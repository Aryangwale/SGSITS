import exp from "express";
import {CreateUser} from "../controller/user.control.js"
const route = exp.Router();


route.post("/createUser",CreateUser)

export default route;
