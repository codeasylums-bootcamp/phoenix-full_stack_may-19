const express = require('express');
const morgan = require('morgan');
const router=express.Router();
const mongoose = require('mongoose');
const assert = require('assert');
var propertiesmodel=require('./newmodels/propertiesmodel.js')
var url = "mongodb://localhost:27017/";
var loc;
mongoose.connect("mongodb+srv://itapaul:ap30121998@cluster0-a5grr.mongodb.net/test?retryWrites=true&w=majority",function(err,db){
    if(err)
    {
        console.log(err);
    }
    else{
       
  propertiesmodel.find()
  .exec()
  .then(property=>{
    console.log(property);
    res.json(property);
  })
    }
});
//document.getElementById("Location").innerText=loc;
// router.get('/',function(req,res,next){
//  res.render('more');
// });
// router.get('/get-data',function(req,res,next){
//   var result= [];
//   mongoose.connect("mongodb+srv://itapaul:ap30121998@cluster0-a5grr.mongodb.net/test?retryWrites=true&w=majority",function(err,db){
//         if(err)
//         {
//             console.log(err);
//         }
//         else{
//           var cursor = db.collection("properties").find();
//           cursor.forEach(function(doc,err){
//           result.push(doc);
//           },function(){
//             db.close();
//             res.render('more',{items: result});
//           });
//         }
//     });

// });