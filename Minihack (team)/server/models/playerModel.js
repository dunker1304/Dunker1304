const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    // id: Number,
    player: [ String ],
    round: [{
        roundID: Number,
        score: Number
    }],
    
}, {
    // _id: false,
    timestamps: true
});

module.exports = mongoose.model('player', PlayerSchema);