const user=require('../../config/databaseconnection').user;
const signupController=require('../controller/signupcontroller');
const Sequelize = require('sequelize');
exports.insertuser =  function (a, b, c,callback1,callback2) {

     user.create({
            username: a,
            email: b,
            password: c
        }).then((user)=>{
            console.log('Registration successfull');
            callback1();
        }).catch((err)=>{
            console.log('Unexpected error.Could not register ');
            callback2();
        });
        

}