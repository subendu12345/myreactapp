const express = require('express')
const signupTemplateCopy = require('../models/SignupModel')
const router = express.Router();

router.post('/signup',(req, res)=>{
    console.log('call signup.. ', req.body)
    if(req.body){
        const signupStudent = new signupTemplateCopy({
            FullName : req.body.FullName,
            UserName : req.body.UserName,
            Email : req.body.Email,
            Password : req.body.Password
        })
        signupStudent.save()
        .then(data=>{
            res.send(data)
        }).catch(err=>{
            res.send(err)
        })
    } 
})

module.exports = router;