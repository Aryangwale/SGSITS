export const ok = (req,res,next)=>{
    if(req.session.isLogIn){
        next()
    }
    else{
        res.redirect("/admin/signin")
    }
}