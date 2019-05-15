const request = require('request');


//Map Box
const mapBoxApiKey =
  "pk.eyJ1IjoiZGJlcmV6bmFrIiwiYSI6ImNqdmR3MTY1MzA3bnczem4zNW1nd3NuMWkifQ.7SLIfa8vfoqC-YJ94EIs2Q";

const geocode = (location, callback) => {
    const mapBoxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${mapBoxApiKey}&limit=1`;
  
    request({ url: mapBoxUrl, json: true }, (error, response) => {
      if (error) {
        callback("Could not connect to Dark Sky's Server");
      } else if (response.body.features.length === 0) {
        callback("Unable to find location");
      } else {
         callback(undefined, {
             latitude: response.body.features[0].center[0],
             longitude: response.body.features[0].center[1],
             name: response.body.features[0].place_name
         });
      }
    });
  };

  module.exports = geocode