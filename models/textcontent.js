const mongoose = require('mongoose')

const textcontentSchema = new mongoose.Schema({
    title: String,
    chapters: [{
        ch: Number,
        chTitle: String,
        lines: [{
            line: Number,
            content: String
        }]
    }]
})

textcontentSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('textcontent', textcontentSchema)