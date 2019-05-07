const request = require('request');

//Map Box
const mapBoxApiKey = 'pk.eyJ1IjoiZGJlcmV6bmFrIiwiYSI6ImNqdmR3MTY1MzA3bnczem4zNW1nd3NuMWkifQ.7SLIfa8vfoqC-YJ94EIs2Q';
//Dark Sky
const darkSkyApiKey = 'ec0760f3b8883acc0a6da9b69eb05ded';
let location = 'C';
let mapBoxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${mapBoxApiKey}&limit=1`;


request({
    url: mapBoxUrl,
    json: true
}, (error, response) => {
    if (error) {
        console.log("Could not connect to Dark Sky's Server")
    } else if (response.body.error){
        console.log("Unable to find location")
    } else {
        let longitude = response.body.features[0].center[0]
        let latitude = response.body.features[0].center[1]
        let cords = latitude + ',' + longitude;
        let darkSkyurl = `https://api.darksky.net/forecast/${darkSkyApiKey}/${cords}`;
        getWeather(darkSkyurl);
    }
});


function getWeather(darkSkyurl) {
    request({
        url: darkSkyurl,
        json: true
    }, (error, response) => {
        let body = response.body.currently;
        let temp = body.temperature;
        let summary = body.summary;
        let precipitation = body.precipProbability;
        let dailySummary = response.body.daily.data[0].summary;
        console.log(`${location}: ${dailySummary} It is currently ${temp} degrees out. It is ${summary}, with a ${precipitation}% chance of rain.`);
    })
}