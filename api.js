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
    if (req.url.startsWith === '/items/' && req.method === 'GET'){
        getOneItem(req, res)
    }
    if(req.url.startsWith('/items/') && req.method === 'patch'){
        updateItem(req, res)
    }
    
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

//Get One item
function getOneItem(req, res){
    const id = req.url.split('/')[2]
    const item = fs.readFileSync(filePath)
const itemsArrOfObj = JSON.parse(item)

const itemIndex = itemsArrOfObj.findIndex((item) => {
    return item.id === id
})

if(itemIndex === -1){
    clientErr()
}
res.end(JSON.stringify(itemsArrOfObj[itemIndex]))
}


//Update One Item
function updateItem(req, res){
    const id = req.url.split('/')[2];
    const items = fs.readFileSync(filePath)
    const itemsArrOfObj = JSON.parse(items)

    const body = []
    req.on('data', (chunk) => {
        body.push(chunk);
    })

    req.on("end", () => {
        const parsedBody = buffer.concat(body).toString()
        const update = JSON.parse(parsedBody)

        const itemindex = itemsArrOfObj.findIndex((item) => {
            return item.id === id;
        })

        if (itemindex == -1){
            res.end('Items not found')
        }

        itemsArrOfObj[itemindex] = {...itemsArrOfObj[itemindex], ...update}

        fs.writeFile(filePath, JSON.stringify(itemsArrOfObj), (err) => {
            if(err){
                serverErr()
            }
            res.end(JSON.stringify(itemsArrOfObj[itemsIndex]))
        })
    })
}

//Delete Item

function deleteItem(req, res){
    const id = req.url.split('/')[2]

    const items = fs.readFileSync(filePath)
    const itemsArrOfObj = JSON.parse(items)

    const itemIndex = itemsArrOfObj.findIndex((item) => {
        return item.id === id
    })

    if (itemIndex == -1){
        res.end('item not found')
    }

    itemsArrOfObj.splice(itemIndex, 1)

    fs.writeFile(filePath, JSON.stringify(itemsArrOfObj), (err) => {
        if (err){
            serverErr()
        }
        res.end('item successfully deleted')

    })
}


function serverErr(){
    res.writeHead('500')
    res.end('Internal Server Error')
}

function clientErr(){
    res.writeHead('404')
    res.end('error 404, page not found')
}


const server = http.createServer(requestHandler)

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server Created successfully at http://${HOSTNAME}:${PORT}`)
})
