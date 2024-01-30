const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const userSchema=new Schema({
    
        userid:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        phoneno:{
            type:Number,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        lat:{
            type:Number,
            required:true
        },
        lng:{
            type:Number,
            required:true
        }
    },{timestamps:true}
    );

module.exports=mongoose.model('User',userSchema);