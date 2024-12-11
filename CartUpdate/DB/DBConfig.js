import { Sequelize } from "sequelize";

const obj = new Sequelize("NewTest","root","root",{
    host:"localhost",
    dialect : "mysql"
});

obj.authenticate().then(()=>{
    console.log("Successfully connected");
}).catch(err=>{
    console.log(err);
})

export default obj