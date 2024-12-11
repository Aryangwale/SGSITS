import cate from "../model/category.model.js"

export const addCategory = (req ,res)=>{
    cate.create(req.body).then(()=>{
        res.status(200).json({msg:"Category created successfully"})
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Internal server error"})
    })
}