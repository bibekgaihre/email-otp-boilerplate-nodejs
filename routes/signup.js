const express=require('express');
const router=express.Router();

const signupcontroller=require('../app/controller/signupcontroller');

router.get('/',function(req,res){
    res.render('signup.hbs');
})

router.post('/register',signupcontroller.registeruser);
module.exports=router;