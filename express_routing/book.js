const express = require('express')

const bookRouter = express.Router()

const books =[
    {
        title: 'Understanding Node.js',
        id: 1,
        year: 2003
    },
    {
        title: 'Autobiography of Timi',
        id: 2,
        year: 2023
    },
    {
        title: 'The life of Man',
        id: 3,
        year: 2013
    },
]

bookRouter.get('/',(req, res) => {
    res.json(books)
})




module.exports = bookRouter
