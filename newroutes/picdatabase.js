const express= require('express');
const router=express.Router();
const mongoose=require('mongoose');

const picModel=require('../newmodels/picmodel');

/*
router.get('/',function(req,res){
    picModel.find()
    .exec()
    .then(function(pic){
        res.json(pic).status(200);
    })
});

*/

router.post('/',function(req,res){
    

    const newPic=new picModel({
        _id: new mongoose.Types.ObjectId(),
        picname: req.body.picname
    });
    newPic.save();
    res.send("pic Saved").status(201);
});

module.exports = router;