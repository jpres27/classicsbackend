const textcontentsRouter = require('express').Router()
const TextContent = require('../models/textcontent')

textcontentsRouter.get('/:book/:chapterNum/:analectNum', async (request, response) => {
    const textcontent = await TextContent.find({book: request.params.book, chapterNumber: request.params.chapterNum, analectNumber: request.params.analectNum})
        if (textcontent) {
            response.json(textcontent)
        } else {
            response.status(404).end()
        }
    })

textcontentsRouter.post('/', async (request, response) => {
    const body = request.body
    const textcontent = new TextContent({
        book: body.book,
        chapterNumber: body.chapterNumber,
        chapter: body.chapter,
        analectNumber: body.analectNumber,
        content: body.content
    })
    
    const savedContent = await textcontent.save()
    
    response.json(savedContent)
})

module.exports = textcontentsRouter