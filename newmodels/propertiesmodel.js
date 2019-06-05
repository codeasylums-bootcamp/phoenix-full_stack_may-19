const mongoose=require('mongoose');
const propertiesSchema=mongoose.Schema({
    // _id:mongoose.Schema.Types.ObjectId,
    Location:{type:String,required:true},
    Availability:{type:Date,required:true},
    Price:{type:Number,required:true},
    Apartment_Type:{type:String,required:true},
    Preference:{type:String,required:true},
    Built_Up:{type:Number,required:true},
    Special_Features:{type:String,required:true},
    picname : {type:String}
    
});
module.exports=mongoose.model('properties',propertiesSchema);