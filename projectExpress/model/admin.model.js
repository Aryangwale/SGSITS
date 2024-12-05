import { pool } from "../db/connection.js"

export class Admin{
    constructor(id, email, password){
        this.id = id;
        this.email = email;
        this.password = password;
    }

    auth(){
        return new Promise((resolve, reject) => {
            pool.getConnection((err,con)=>{
                if(!err){
                    let que = "select * from user where email = ? and password = ?"
                    con.query(que,[this.email,this.password],(err,result)=>{
                        con.release();
                        if(!err){
                            resolve(result)
                        }
                        else reject(err)
                    })
                }
                else reject(err)
            })
        })
    }

    addNewUser(){
        return new Promise((resolve, reject) => {
            pool.getConnection((err,con)=>{
                if(!err){
                    let que = "insret into user(email, password) values(?,?)"
                    con.query(que,[this.email,this.password],(err,result)=>{
                        if(!err){
                            con.release()
                            resolve(result)
                        }
                        else reject(err)
                    })
                }
                else reject(err)
            })
        })
    }
}