const express = require('express')

const authorRouter = express.Router()

const authors = [
    {
        name: 'J.K. Rowling',
        id: 1,
        born: 1965,
    },
    {
        name: 'J.R.R. Tolkien',
        id: 2,
        born: 1892,
    },
    {
        name: 'George R.R. Martin',
        id: 3,
        born: 1948,
    },
]

authorRouter.get('/', (req, res) => {
    res.json(authors)
})