import { Product } from "../model/product.model.js"

export const home = (req, res)=>{
    res.end("ok again")
}
export const addpro = (req, res)=>{
    res.render("appProduct")
}
export const addproAction = (req, res)=>{
    const obj = new Product(null,req.body.proName);
    obj.addProduct().then(result=>{
        console.log(result);
        res.end("product added")
    }).catch(err=>{
        console.log(err);
        res.end("fail")
    })
}


export const allpro = (req,res)=>{
    Product.allporduct().then(result=>{
        // console.log(result)
        res.render("allProduct",{result})
    }).catch(err=>{
        console.log(err);
        res.end("fail")
    })
}