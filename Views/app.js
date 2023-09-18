//EJS Templating Engine.
//This can be used when you need to generate dynamic pages in the backend 

const express = require('express')
const bodyParser = require('body-parser')

const booksRoute = require('./routes/books')

const PORT = 4000
const app = express()


app.set("view engine", "ejs")
app.set("views", "views")


app.use(bodyParser.json())

app.use('/books', booksRoute)

app.get('/', (req, res) => {
    res.end('Timilehins Home Page')
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})