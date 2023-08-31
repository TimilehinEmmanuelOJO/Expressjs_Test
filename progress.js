const http = require("http")
const path = require('path')
const fs = require('fs')

const PORT = 3000
const HOSTNAME = 'localhost'


function requestHandler(req, res){

}




const server = http.createServer(requestHandler)

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server Created successfully at http://${HOSTNAME}:${PORT}`)
})