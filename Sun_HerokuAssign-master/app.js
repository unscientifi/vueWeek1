
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static('public'));

const port = process.env.PORT || 3000;


app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/views/index.html"));
    console.log('at the home route');
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + "/views/about.html"));
    console.log('at the about route');
})

app.listen(port, () => {
    console.log(`app is running on ${port}/`);
})