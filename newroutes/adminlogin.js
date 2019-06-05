const express=require('express');
const mongoose=require('mongoose');
const adminloginmodel=require('../newmodels/adminloginmodel');
const router=express.Router();
const bcryptjs=require('bcryptjs');

router.get('/',function(req,res){
    adminloginmodel.find()
    .exec()
    .then(function(msg){
        res.json(msg).status(200);
    })
});
router.post('/',function(req,res){
    const newdata=new adminloginmodel({
        _id:new mongoose.Types.ObjectId(),
        Name:req.body.Name,
        Gender:req.body.Gender,
        Email:req.body.Email,
        Phone:req.body.Phone,
        Password:bcryptjs.hashSync(req.body.Password,10)
    });
    
    adminloginmodel.find({Email:req.body.Email})
    .exec()
    .then(user=>{
        if(user.length>0)
        res.send('Account already exist').status(400);
        else
        {
            newdata.save();
            //window.location.href='index.html';
            
        }
    })
            
        });
module.exports=router;