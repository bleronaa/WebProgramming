const express = require("express");
require ('dotenv').config();
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5001;
const jwt=require('jsonwebtoken');
const User=require('./Models/User')
const bcrypt=require('bcryptjs')
const verifyToken=require('./verifyToken.js')


app.use(cors());
app.use(express.json());

const mongoose = require('mongoose');
const uri = "mongodb+srv://bleronatmava12:pk3e5vhiDZvoV3A4@fullstackapp.ee05osq.mongodb.net/?retryWrites=true&w=majority&appName=FullStackApp"

mongoose
    .connect(uri)
    .then(() => console.log('Connect to mongodb'))
    .catch(err => console.error('Could not connect to MongoDB', err))

 

  app.post('/api/register',async(req,res)=>{
    try{
     
        const {name,email,password}=req.body;
        const user=new User({name,email,password}); 
        await user.save();
        res.status(201).send('User registered')
        
    }catch(error){
      console.log(error);

        res.status(500).json({error: 'Error on registration'})
    }
  })
// Login 

  app.post('/api/login',async(req,res)=>{
       const {email,password}=req.body;


       const user=  await User.findOne({email});
      if(user){
        const isValid=await user.isValidPassword(password);
        if(isValid){
          //username and password correct
          const token= jwt.sign({id: user._id},
             process.env.JWT_SECRET, {expiresIn:"1h"});
          res.json(token)
        } 
      } else{
          res.status(404).json({mesazhi:"Incorrect username or password"})
      }



       
        res.json(isValid)


        app.get('/check-token', verifyToken,(req,res)=>{
          res.json(req.user)
          //me shtu header ni authorization token
              //ni button 

        })
  
  }
)






  app.listen(port,()=>{
    console.log(`Server running on  port ${port}`)
  })
