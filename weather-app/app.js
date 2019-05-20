const geocode = require("./utils/geocode");
const forcast = require("./utils/forcast");

let city = process.argv[2];

if(!city){
    return console.log('No city was passed in.')
}

geocode(city, (error,{latitude, longitude, name}) => {
  if (error) {
    return console.log("Could not find any location with that name.");
  }

    forcast(latitude, longitude, (error, forcastData) => {
        if (error) {
            return console.log("Could not connect to Dark Sky's Server");
          }
      console.log(name);
      console.log("Forcast: ", forcastData);
    });
});
