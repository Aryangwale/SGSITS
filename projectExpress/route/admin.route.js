import exp from "express";
import {adminHome ,adminHomeAction} from "../controller/admin.controller.js"
const route = exp.Router();


route.get("/signin",adminHome)
route.post("/signin",adminHomeAction)

export default route;