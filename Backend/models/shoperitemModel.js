const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const shoperitemSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    shopid:{
        type:String,
        required:true
    }
},{timestamps:true});

module.exports=mongoose.model('Shoperitem',shoperitemSchema);