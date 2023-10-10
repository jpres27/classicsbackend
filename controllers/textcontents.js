const textcontentsRouter = require('express').Router()
const TextContent = require('../models/textcontent')

textcontentsRouter.get('/:title', async (request, response) => {
    const textcontent = await TextContent.find({ title: request.params.title })
        if (textcontent) {
            console.log(textcontent)
            response.json(textcontent)
        } else {
            response.status(404).end()
        }
    })

textcontentsRouter.post('/', async (request, response) => {
    const body = request.body
    const textcontent = new TextContent({
        title: body.title,
        chapters: body.chapters
    })
    
    const savedContent = await textcontent.save()
    
    response.json(savedContent)
})

module.exports = textcontentsRouter