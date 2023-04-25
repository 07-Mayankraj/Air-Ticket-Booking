const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { UserModel } = require('../models/user.model')

const userRouter = express.Router()


// register route

userRouter.post('/signup',async (req, res)=>{
    let {name,email,password} = req.body;
    try {
        //if user already exists
        let user = await UserModel.find({email})
        if(user.length>0){
            res.send('user already exists')
        } else{
            bcrypt.hash(password, 5,async (err,hashPassword)=>{
                if(hashPassword){
                    console.log(hashPassword);
                    let newuser = new UserModel({name,email,password:hashPassword})
                    await newuser.save();
                    res.status(201).json({message:"user registered successfully"})
                }
                else{
                    
                    res.status(400).json({message:err.message})
                } 
            })
        }
    } catch (error) {
        
    }
})



userRouter.post('/login',async (req, res)=>{
    let {email,password} = req.body;
    try {
        //if user already exists
        let user = await UserModel.find({email})
        if(user.length===0){
            res.status(404).send("user not found");
        } else{
            let hashPassword = user[0]?.password;
            bcrypt.compare(password, hashPassword,async(err,result)=>{
                if(result){
                    let token = jwt.sign({user_Id: user[0]._id,},"secret",{expiresIn : "7d"});
                    res.status(201).json({message:"user registered successfully",token})
                }
                
            })
        }
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})

module.exports = {userRouter}

