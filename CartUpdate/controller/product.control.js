import product from "../model/product.model.js"

export const addProduct = (req,res)=>{
    product.create(req.body).then(()=>{
        res.status(200).json({mag:"Product created successfully"});    
    }).catch(err=>{
        console.log(err);
        res.status(500).json({mag:"Internal server error"});    
    })
}