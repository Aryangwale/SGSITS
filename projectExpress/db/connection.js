import mysql from "mysql2";
 
export const pool = mysql.createPool({
    user: "root",
    password : "root",
    host : "localhost",
    database : "newdb"
})
 