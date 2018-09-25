const express = require('express');
const UserRouter = express.Router();
const UserModel = require('../models/user.model');

// CRUD

// create
UserRouter.post('/',(request,response) =>{
    console.log(request.body);
    const {userName, passWord, name, avatar, gender} = request.body;
    UserModel.create({userName, passWord, name, avatar, gender})
        .then(userCreated => response.status(201).json({success:1, user: userCreated}))
        .catch(error => response.status(500).json({success:0, error:error  }))
})

// get
UserRouter.get('/',(request,response)=>{
    UserModel.find({},{passWord:0}, (error, users) =>{
        if(error) response.status(500).json({success:0, error: error})
        else response.json({success:1, users : users});
    })
})

module.exports = UserRouter;