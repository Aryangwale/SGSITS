import { DataTypes } from "sequelize";
import db from "../DB/DBConfig.js";
import category from "./category.model.js";

const product = db.define("product",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement :true
    },
    productName:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    thumbnail:{
        type:DataTypes.STRING,
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull : false
    }
})

//one to many

category.hasMany(product);
product.belongsTo(category);
export {category,product}

db.sync().then(()=>{
    console.log("good yaar");
}).catch(err=>{
    console.log(err);
})

export default product;