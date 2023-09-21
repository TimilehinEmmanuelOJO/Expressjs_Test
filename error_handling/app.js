const express = require('express');




const PORT = 3000;
const app = express();

app.use(express.static('public'));
app.use(express.json());




app.get('/', (req, res) => {
    res.end('Home Page');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
