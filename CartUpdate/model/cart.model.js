import { DataTypes } from "sequelize";
import db from "../DB/DBConfig.js";
import user from "./user.model.js"

const cart = db.define("cart",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    }
})

db.sync().then(()=>{
    console.log("ok sir")
}).catch(err=>{
    console.log(err);
})


// one to one
user.hasOne(cart);
cart.belongsTo(user);
// cart.belongsTo(user,{foreignKey : UserName})
export {user,cart}
export default cart