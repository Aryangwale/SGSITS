import { DataTypes } from "sequelize"
import db from "../DB/DBConfig.js"

const user = db.define("user",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    UserName:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    password:{
        type: DataTypes.STRING,
        allowNull : false
    }
})

db.sync().then(()=>{
    console.log("success");  
}).catch(err=>{
    console.log(err);
})

export default user;