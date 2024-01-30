const shopitemModel=require('../models/shoperitemModel');
const mongoose=require('mongoose');
//Get all
const getShopitem=async (req,res)=>{
    try{
        const {shopid}=req.body;
        console.log(shopid);
        const shopitem=await shopitemModel.find({shopid}).sort({createdAt:-1});
        res.status(200).json({shopitem});
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
    // res.json({mssg:'Hello World'});
    console.log('get request');
}

//Get one
// const getOneShopitem=async (req,res)=>{
//     const {id}=req.params;
//     try{
//         const shopitem=await shopitemModel.findById(id);
//         res.status(200).json({shopitem});
//     }
//     catch(err){
//         res.status(400).json({ error: err.message });
//     }
//     // res.json({mssg:'Hello World'});
//     console.log('get request');
// }

//Post
const postShopitem=async (req,res)=>{
    
    const {name,price,shopid}=req.body;

    try{
        const shopitem=await shopitemModel.create({name,price,shopid});
        res.status(200).json({shopitem});
            
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }

    // res.json({mssg:'Hello World'});
    console.log('post request');
}

//Delete

const deleteShopitem=async (req,res)=>{
    const {id}=req.params;
    try{
        const shopitem=await shopitemModel.findByIdAndDelete(id);
        res.status(200).json({shopitem});
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
    // res.json({mssg:'Hello World'});
    console.log('delete request');
}

//Patch
const updateShopitem=async (req,res)=>{
    const {id}=req.params;
    try{
        const shopitem=await shopitemModel.findByIdAndUpdate({_id:id},{
            ...req.body,
        });
        res.status(200).json({shopitem});
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
    
}


module.exports={postShopitem,getShopitem,deleteShopitem,updateShopitem};