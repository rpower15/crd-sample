const mongoose = require('mongoose');
const {Schema} = mongoose;

const Journal = new Schema({
    title: String,
    entry: String,
})
module.exports = mongoose.model('Journal', Journal);