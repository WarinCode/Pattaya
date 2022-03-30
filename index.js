const express = require('express');
const app = express();


app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.redirect('index.html');
});

app.get('/login', (req, res) => {
    res.redirect('login.html');
});


app.listen(5000, () => {
    console.log("localhost:5000");
});