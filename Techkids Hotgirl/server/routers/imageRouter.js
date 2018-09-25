const express = require('express');
const ImageRouter = express.Router();
const ImageModel = require('../models/image.model');
//============================================================


// post
ImageRouter.post('/',(request,response)=>{
    console.log(request.body);
    const {imageUrl, owner, description, title} = request.body || {};
    ImageModel.create({imageUrl, owner, description, title},(error, imageCreated) =>{
        if(error) response.status(500).json({success:0, error: error})
        else response.json({success:1, image : imageCreated});
    })
})

// get
ImageRouter.get('/',(request,response)=>{
    ImageModel.find({})
        .populate('owner')
        .exec((error, images) => {
            if(error) response.status(500).json({success:0, error: error})
            else response.json({success:1, images : images});
        });

});


module.exports = ImageRouter;