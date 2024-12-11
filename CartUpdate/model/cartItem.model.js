import { DataTypes } from "sequelize";
import db from "../DB/DBConfig.js";
import product from "./product.model.js"
import cart from "./cart.model.js"

const cartItem = db.define("cartItem",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement : true    
    },
})

cart.belongsToMany(product ,{through : cartItem})
product.belongsToMany(cart,{through:cartItem})

export {cart,product}


db.sync().then(()=>{
    console.log("done sir");
}).catch(err=>{
    console.log(err);
})

export default cartItem;