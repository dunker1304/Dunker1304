const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    //id: Number,
    content: {type: String, require: true},
    yes: {type: Number, default: 0},
    no: {type: Number, default:0}
}, {
    //_id: false,
    timestamps: true,
});


module.exports = mongoose.model('Question', QuestionSchema);