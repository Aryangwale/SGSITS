import user from "../model/user.model.js"
import cart from "../model/cart.model.js"

export const CreateUser = async (req,res)=>{
    try {
        await user.create(req.body)
        const result = await user.findOne({where:{email:req.body.email}});
        await cart.create({userId : result.id})

        res.status(200).json({msg:"created successfully"})
    } catch (error) {
        res.status(500).json({msg:"Internal server error"})
    }
}