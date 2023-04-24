const express= require('express')
const router= express.Router() ;

const obj =require('../controllers/events')


router.post('/create',obj.createEvent)
router.get('/get',obj.readEvent)
router.patch('/update',obj.readEvent)
router.delete('/cancel',obj.cancelEvent)

module.exports= router ;