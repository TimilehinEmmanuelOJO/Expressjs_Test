const express = require("express");

const PORT = 3000

const app = express()

app.get("/", (req, res) => {
    res.status(200)
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Server started at  Http://localhost:${PORT}`)
})

