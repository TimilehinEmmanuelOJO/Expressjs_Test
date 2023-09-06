const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')


const app = express()
const PORT = 3000


app.use(logger('dev'))

app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.status(200)
    res.send("Hello World");
})

// Req.body is an object that contains the request body. It is parsed by the bodyParser middleware.
app.use((req, res, next) => {
    const apiKey = req.body.apiKey;
    if (apiKey) {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
});

app.listen(PORT, () => {
    console.log(`server on port ${PORT}`)
})


