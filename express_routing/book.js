const express = require('express')

const bookRouter = express.Router()

const books = [
    {
        title: 'War and Peace',
        id: 1,
        year: 1869,
    },
    {
        title: 'The Great Gatsby',
        id: 2,
        year: 1925,
    },
    {
        title: 'The Catcher in the Rye',
        id: 3,
        year: 1951,
    },
]

//when you go to home, return all books

bookRouter.get('/', (req, res) => {
    res.json(books)
})

//when you go to home/id, return the book with the id
bookRouter.get('/:id',(req, res) => {
    const id = req.params.id
    //finds a book in the book array that the id matches what was passed into it
    const book = books.find(book => book.id == id)

    if (!book){
        res.status(404)
        res.end("book not found")

        res.json(book)
    }
})

//sending a book into the book array
bookRouter.post('/', (req, res) => {
    const body = req.body
    books.push(book)
    res.json(book)
})


 module.exports = bookRouter


