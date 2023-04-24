const express= require('express')
const router= express.Router() ;

const obj =require('../controllers/cart')


router.get('/create',obj.createItem)
router.get('/read',obj.readItem)
router.get('/delete',obj.deleteItem)

module.exports= router ;