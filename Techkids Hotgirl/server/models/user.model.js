const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// user model
const UserModel = new Schema({
    userName: {type:String, unique : true, required: true},
    passWord: {type:String, required: true},
    name: {type:String, default: ""},
    avatar:{type:String, default:""},
    gender:{type:String , default:""}
});




// exports
module.exports = mongoose.model("User", UserModel);