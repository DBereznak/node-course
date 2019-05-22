const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

// define paths for express
const pathDirectory = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


// setup handlebars
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

const name = 'Donny Bereznak';
// Setup dierectory to serve
app.use(express.static(pathDirectory))

app.get('', (req, res) => {
    res.render('index', { 
        title: 'Home Page',
        header: 'Weather App',
    name: name})
})
app.get('/help', (req, res) => {
    res.render('index', { 
        title: 'Help Page',
        header: 'Get Help for the Weather App',
        name: name})
})

app.get('/about', (req, res) => {
    res.render('index', { 
        title: 'About Page',
        header: 'Learn all about the Weather App',
        name: name})
})

app.get('/weather', (req, res) => {
    res.send([{
        city: 'Atlanta',
        temperature: 82
    }]);
})
app.get('/help/*', (req, res) => {
    res.render('404', {
        text: 'Sorry, that article does not exist.',
        name: name
    })
 })

app.get('*', (req, res) => {
   res.render('404', {
       text: 'Sorry, that page does not exist.',
       name: name
   })
})
app.listen(3000, () => {
    console.log('Serving is running')
})