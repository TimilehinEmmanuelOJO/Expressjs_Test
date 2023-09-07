const express = require('express')
const bodyParser = require('body-parser')

const PORT = 3000
const app = express()

const users = [
    {
        id: 1,
        name: 'John',
        age: 30
    },
    {
        id: 2,
        name: 'Jane',
        age: 25
    },
]

const posts = [
    {
        id: 1,
        title: 'Post 1',
        body: 'This is post 1'
    },
    {
        id: 2,
        title: 'Post 2',
        body: 'This is post 2'
    },
]


app.use(bodyParser.json())
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.end('this is the home page')
})





app.listen(PORT, (req, res) => {
    console.log(`Server dey listen on port ${PORT}`)
})