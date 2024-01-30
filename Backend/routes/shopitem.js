const express=require('express');
const {
    postShopitem,
    getShopitem,
    deleteShopitem,
    updateShopitem
}=require('../controllers/shoperitemcontroller');


const router=express.Router(); 

router.get('/',getShopitem);
// router.get('/',getOneShopitem);

router.post('/',postShopitem);

router.delete('/:id',deleteShopitem);

router.patch('/:id',updateShopitem);

module.exports=router;