const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    story: {
        type: String,
        required: true
    },
    like: {
        type: Number,
        default: 0
    },
    dislike: {
        type: Number,
        default: 0
    }

})

module.exports = mongoose.model('Joke', JokeSchema)