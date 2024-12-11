import { DataTypes } from "sequelize"
import db from "../DB/DBConfig.js"

const category = db.define("category",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement :true
    },
    categoryName:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    url:{
        type:DataTypes.STRING,
    }
})

db.sync().then(()=>{
    console.log('ho gaya');
}
).catch(err=>{
    console.log(err);
})

export default category