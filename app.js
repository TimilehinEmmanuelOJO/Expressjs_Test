const express = require("express")


const app = express();
const PORT = 3000


//creating middleware

//this middleware logs all request to the console
app.use((req, res, next)=>{
    console.log(`${req.method}${req.path}`)
    next();
})


app.get('/',(req, res) => {
    res.status(200)
    res.send("timi Ojo")
})

//Middleware to check if the request an api key is present
//if it is present, the request will continue to the next
//middleware or route handler
//If the api is not present, the request is rejected

app.use((req, res, next) => {
    const apiKey = req.query.apiKey;
    if (apiKey){
        next()
    }else{
        res.status(401)
        res.send('unauthorized')
    }
})

app.get('/users', (req, res) => {
    res.status(200)
    res.json([
        {
            id:1,
            name: "Timi Ojo"
        },
        {
            id:2,
            name: 'Ade Seun'
        }
    ])
})










app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})