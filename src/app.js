const express = require('express');

const app = express ();

const path = require('path')

const port = 3001;
app.listen(port, () => {
    console.log('esta el puerto ' + port)
});

app.use(express.static(path.join(__dirname, '../public')));


app.get(('/'), (req, res) =>
    res.sendFile(path.join(__dirname, 'Views/home.html'))
);