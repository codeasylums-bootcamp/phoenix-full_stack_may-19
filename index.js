const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;
//const bcryptjs=require('bcryptjs');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://itapaul:ap30121998@cluster0-a5grr.mongodb.net/test?retryWrites=true&w=majority",function(err){
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("connected");
    }
});
const parser = require('body-parser'); 
const userlogin= require('./newroutes/userlogin');
const adminlogin=require('./newroutes/adminlogin');
const properties=require('./newroutes/properties');



const picdata=require('./newroutes/picdatabase');

// app.use('*',function(req,res,next){
// res.set('Access-Control-Allow-Origin','*');
// next();
// })
app.use('*',function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    next();
    });
app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error : {
            message : error.message
        }
    });

});

app.use(morgan('dev'));
app.use(parser.urlencoded({extended:true}));
app.use(parser.json());
app.use('/userlogin',userlogin);
app.use('/adminlogin',adminlogin);
app.use('/properties',properties);


app.use('/picdata',picdata);


app.listen(port,function(){
    console.log(`Server listening on ${port}`);
});
