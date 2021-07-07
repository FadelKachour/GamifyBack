const mongoose = require('mongoose');
const Quest = require('./quest.model');
 
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true, 
        required: true
    },
    password: {
        type: String,
        unique: false,
        required: true
    },
    credits: Number,
    admin: {
        type: Boolean,
        required: true
    },
    quests:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'quest'
    }],
    finishQuests:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'quest'
    }],
});
 
module.exports = mongoose.model('User', UserSchema);