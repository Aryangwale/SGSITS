import {Admin} from "../model/admin.model.js"

export const adminHome = (req,res)=>{
    res.render("signin");
}

export const adminHomeAction = (req , res)=>{
    const {email, pass} = req.body;
    const obj = new Admin(null, email, pass);
    obj.auth().then(result =>{
        console.log(result)
        if(result.length != 0){
            req.session.email = email;
            req.session.isLogIn = true;
            console.log(req.session.email)
            res.redirect("/product/all")
        }
        else{
            res.end("invalid email or password")
        }
       
    }).catch(err =>{
        console.log(err);
        res.end("fail")
    })
} 