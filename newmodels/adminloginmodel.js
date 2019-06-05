const mongoose=require('mongoose');
const adminloginSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
     Name:{type:String,required:true},
    Gender:{type:String,required:true},
    Email:{type:String,required:true,unique:true},
    Phone:{type:Number,required:true},
    Password:{type:String,required:true},
});
module.exports=mongoose.model('adminlogin',adminloginSchema);