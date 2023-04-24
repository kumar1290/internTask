const mongoose= require('mongoose')

const customerTable = mongoose.Schema({
    name: { type: String, required : true},
    email: { type: String, required : true},
    password: { type: String, required : true},
})

module.exports =mongoose.model('peopleTable',peopleTable)