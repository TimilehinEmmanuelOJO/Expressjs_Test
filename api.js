const http = require("http")
const path = require('path')
const fs = require('fs')

const PORT = 3000
const HOSTNAME = 'localhost'

const filePath = path.join(__dirname, 'items.join')


function requestHandler(req, res){
    if (req.url === '/items' && req.method === 'POST'){
        creatItem(req, res)
    }
    if (req.url === '/items' && req.method === 'GET'){
        getAllItems(req, res)
    }
    if (req.url.startsWith('/items/') && req.method === 'GET')
}



//request handlers

// create Item

function creatItem (req, res){
    const stringOB = fs.readFileSync(filePath)
    const turnToObj = JSON.parse(stringOB)
    console.log(turnToObj)

    const body = []
    req.on('data', (chunk) => {
        body.push(chunk)
    })
    req.on('end', () => {
        const parsedBody = body.toString()
        const itemsToPost = JSON.parse(parsedBody)

        turnToObj.push({
            ...itemsToPost,
            id: Math.floor(Math.random()*500).toString()
        })

        fs.writeFile(filePath,JSON.stringify(turnToObj)), (err) => {
            if(err){
                serverErr()
            }
            res.end(JSON.stringify(itemsToPost))
        }
    })

}

//Get all items
function getAllItems(req, res){
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err){
            serverErr()
        }
        res.end(data)
    })
}




const server = http.createServer(requestHandler)

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server Created successfully at http://${HOSTNAME}:${PORT}`)
})
