const express=require('express'),
router=express.Router(),
Robotsdetail=require('../controllers/c_robotsdetail')

router.get("/api/robots",Robotsdetail.c_robotsdetail)
module.exports=router