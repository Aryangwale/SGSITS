import {pool} from "../db/connection.js"

export class Product{
    constructor(id,product_name){
        this.id = id;
        this.product_name = product_name ;
    }

    static allporduct(){
        return new Promise((resolve, reject) => {
            pool.getConnection((err,con)=>{
                if(err){
                    reject(err)
                }
                else{
                    const que = "select * from  product"
                    con.query(que,(err,result)=>{
                        con.release()
                        if(err){
                            reject(err)
                        }
                        else{
                            resolve(result)
                        }
                    })
                }
            })
        })
    }
    static getProductMyId(id){
        return new Promise((resolve, reject) => {
            pool.getConnection((err,con)=>{
                if(err){
                    reject(err)
                }
                else{
                    const que = "select * from product where id = ?"
                    con.query(que,[id],(err,result)=>{
                        con.release()
                        if(err){
                            reject(err)
                        }
                        else{
                            resolve(result)
                        }
                    })
                }
            })
        })
    }
    static updateProduct(id , productname){
        return new Promise((resolve, reject) => {
            pool.getConnection((err,con)=>{
                if(err){
                    reject(err)
                }
                else{
                    const que = "update product set product_name = ? where id = ?"
                    con.query(que,[productname,id],(err,result)=>{
                        con.release()
                        if(err){
                            reject(err)
                        }
                        else{
                            resolve(result)
                        }
                    })
                }
            })
        })
    }
    addProduct(){
        return new Promise((resolve, reject) => {
            pool.getConnection((err,con)=>{
                if(err){
                    reject(err)
                }
                else{
                    const que = "insert into product(product_name) values(?)"
                    con.query(que,[this.product_name],(err,result)=>{
                        con.release()
                        if(err){
                            reject(err)
                        }
                        else{
                            resolve(result)
                        }
                    })
                }
            })
        })
    }
}

