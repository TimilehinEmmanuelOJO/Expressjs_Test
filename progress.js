const http = require("http")
const path = require('path')
const fs = require('fs')

const PORT = 3000
const HOSTNAME = 'localhost'

const indexPath = path.join(__dirname, 'index.html')
const errPath = path.join(__dirname, 'err.html')

function requestHandler(req, res){
if (req.url === '/'){
    getWeb(req, res)
}



}




const server = http.createServer(requestHandler)

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server Created successfully at http://${HOSTNAME}:${PORT}`)
})




//Function Handlers
function getWeb(req, res){
    res.setheader('content-type', 'text/html')
    res.writehead(200)
    res.end(fs.readFileSync(indexPath))
}