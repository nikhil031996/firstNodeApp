const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    playerName : {
        type : String,
        required : true,
        unique : true
    },
    teamName : {
        type : String,
        required : true
    },
    playerAttribute : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Player',PlayerSchema);