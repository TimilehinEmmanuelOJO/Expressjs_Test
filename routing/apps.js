const express = require('express')
const bodyParser = require("body-parser")

const app = express()
const PORT = 3002

//this is to access the public folder easily.(P.s I do not have a public yet)
app.use(express.static('public'))
app.use(express.json())

//route to homepage
app.get('/', (req, res) => {
    console.log('Routing to home page')
})

app.get('/about', (req, res) => {
    console.log('Routing to about page')
})

app.get('/contact', (req, res) => {
    console.log('Routing to contact page')
})

app.listen(PORT, () => {
    console.log(`Omo server dey listen on port ${PORT} `)
})