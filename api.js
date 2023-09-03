const http = require("http")
const path = require('path')
const fs = require('fs')

const PORT = 3000
const HOSTNAME = 'localhost'

const filePath = path.join(__dirname, 'items.join')


function requestHandler(req, res){
    if (req.url === '/items' && req.method === 'POST'){

    }
}



//request handlers

// create Item

function creatItem (req, res){
    const stringOB = fs.readFileSync(filePath)
    const turnToObj = JSON.parse(stringOB)
    console.log(turnToObj)
}






const server = http.createServer(requestHandler)

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server Created successfully at http://${HOSTNAME}:${PORT}`)
})
