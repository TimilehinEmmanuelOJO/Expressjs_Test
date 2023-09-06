const express = require('express')


const app = express;
const PORT = 3000

//creating middleware
app.use((req, res, next)=>{
    console.log(`${req.method}${req.path}`)
    next();
})

app.get('/',(req, res) => {
    res.status(200)
    res.send("timi Ojo")
})










app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})