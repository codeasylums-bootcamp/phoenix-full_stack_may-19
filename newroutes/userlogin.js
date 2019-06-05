const express=require('express');
const mongoose=require('mongoose');
const userloginmodel=require('../newmodels/userloginmodel');
const router=express.Router();
const bcryptjs=require('bcryptjs');
router.get('/',function(req,res){
    userloginmodel.find()
    .exec()
    .then(function(msg){
        res.json(msg).status(200);
    })
});
router.post('/',function(req,res){
    const newdata=new userloginmodel({
        _id:new mongoose.Types.ObjectId(),
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        password:bcryptjs.hashSync(req.body.password,10)
    });
    
    userloginmodel.find({email:req.body.email})
    .exec()
    .then(user=>{
        if(user.length>0)
        res.send('Account already exist').status(400);
        else
        {
            newdata.save();
            res.send("Account created").status(201);
        }
    })
            
        });
module.exports=router;