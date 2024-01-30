const useridmodel = require('../models/UseridModel.js');
const mongoose=require('mongoose');

//Login

const login=async (req,res)=>{
    const {userid,password}=req.body;
    const user= await useridmodel.findOne({userid});
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

//Signup

const signup=async (req,res)=>{
    const {userid,password,name,phoneno,email,address,lat,lng}=req.body;
    const user= await useridmodel.findOne({userid});

    try{
        if(user==null){
            const nuserid=await useridmodel.create({userid,password,name,phoneno,email,address,lat,lng});
            res.status(200).json({nuserid});
        }
        else{
            res.status(400).json({error:'Shop already exists'});
            console.log('early post request');
        }
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
    console.log('post request');    

}


//Exporting

module.exports={signup,login};