const mongoose = require('mongoose')

const Schema = mongoose.Schema

const document =  new Schema({
    id: String,
    data: Object
})

module.exports = mongoose.model('Document',document)