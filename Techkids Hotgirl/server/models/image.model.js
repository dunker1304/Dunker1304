const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    content: {type:String,required:true},
    owner:{ type: Schema.Types.ObjectId, ref: 'User'}
},{
    timestamps : true
})

// image model
const ImageModel = new Schema({
    imageUrl: {type: String, required:true},
    view:{type:Number, default: 0},
    like: {type: Number, default:0},
    owner:{ type: Schema.Types.ObjectId, ref: 'User' },
    description:{type:String, default: ""},
    title:{type:String, default:""},
    comment:[CommentSchema]
},
    {
        timestamps : true
    });

module.exports = mongoose.model("Image",ImageModel);