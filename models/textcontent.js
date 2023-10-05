const mongoose = require('mongoose')

const textcontentSchema = new mongoose.Schema({
    book: {
        type: String,
        minLength: 2,
        required: true
    },
    chapterNumber: {
        type: Number,
        required: true
    },
    chapter: {
        type: String,
        required: true
    },
    analectNumber: {
        type: Number,
        required: false
    },
    content: {
        type: String,
        minLength: 3,
        required: true
    }
})

textcontentSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('textcontent', textcontentSchema)