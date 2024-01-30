const shoperidmodel = require('../models/shoperidModel.js');
const mongoose=require('mongoose');

//Login

const login=async (req,res)=>{
    const {shopid,password}=req.body;
    const user= await shoperidmodel.findOne({shopid});
    try{
        if(user==null){
            res.status(400).json({error:'User id does not exist'});
            console.log("User id does not exist")
        }
        else if(user.password!=password){
            res.status(400).json({error:'Incorrect password'});
            console.log("Incorrect password")
        }
        else{
            res.status(200).json({Login:"Succesfull"});
            console.log("Loged in")
        }
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
}
//Sign up
const signup=async (req,res)=>{
    const {shopid,password,name,phoneno,email,lat,lng}=req.body;
    const user= await shoperidmodel.findOne({shopid});
    try{
        if(user==null){
            const shoperid=await shoperidmodel.create({shopid,password,name,phoneno,email,lat,lng});
            res.status(200).json({shoperid});
        }
        else{
            res.status(400).json({error:'Shop already exists'});
            console.log('early post request');
        }

        // const shoperid=await shoperidmodel.create({shopid,password,name,phoneno,email,lat,lng});
        // res.status(200).json({shoperid});
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
    console.log('post request');
}


//Exporting

module.exports={signup,login};