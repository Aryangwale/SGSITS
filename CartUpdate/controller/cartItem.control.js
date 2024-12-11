import cartItem from "../model/cartItem.model.js";

export const addToCart = (req,res)=>{
    console.log(req.body)
    cartItem.create(req.body).then(()=>{
        res.status(200).json({msg:"Add ho gaya sahab"})
    }).catch(err=>{
        res.status(500).json({msg:"Ni ho paya sahab!!!!!"})
        console.log(err);
    })
}