const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('Hello Express')
})

app.get('/help', (req, res) => {
    res.send('Help Page');
})

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');
})

app.get('/weather', (req, res) => {
    res.send([{
        city: 'Atlanta',
        temperature: 82
    }]);
})

app.listen(3000, () => {
    console.log('Serving is running')
})