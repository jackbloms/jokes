const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
    _id: Number,
    setup: String,
    punchline: String,
}, {timestamps: true});

const Joke = mongoose.model("Joke", JokesSchema);

module.exports = Joke;