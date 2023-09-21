const express = require('express');
const fspromises = require('fs').promises



const PORT = 3000;
const app = express();

app.use(express.static('public'));
app.use(express.json());


// Synchronous error is automatically handled by express
app.get('/', (req, res) => {
    throw new Error("Hello error")
});

// Asynchronous error is not handled by express
app.get('/file', async (req, res, next) => {
    try{
        const file = await fspromises.readFile('./no-such-file.txt')
        res.sendFile(file)
    } catch (error) {
        error.type = 'Not Found'
        next(error)
    }
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
