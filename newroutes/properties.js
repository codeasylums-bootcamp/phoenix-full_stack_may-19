const express=require('express');
const mongoose=require('mongoose');
const propertiesmodel=require('../newmodels/propertiesmodel');
const router=express.Router();
const bcryptjs=require('bcryptjs');
router.get('/',function(req,res){
    propertiesmodel.find()
    .exec()
    .then(msg=>{
        res.json(msg).status(200);
    })
});
router.post('/',function(req,res){
    const newdata=new propertiesmodel({
        
        Location:req.body.Location,
        Availability:req.body.Availability,
        Price:req.body.Price,
        Apartment_Type:req.body.Apartment_Type,
        Preference:req.body.Preference,
        Built_Up:req.body.Built_Up,
        Special_Features:req.body.Special_Features,
        picname: req.body.picname
    });
    
    
            newdata.save();
            //location.href='propertydetails.html';
            
            
        });
module.exports=router;