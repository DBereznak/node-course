const request = require("request");

const darkSkyApiKey = "ec0760f3b8883acc0a6da9b69eb05ded";

const forcast = (longitude, latitude, callback) => {
  let cords = longitude + "," + latitude;
  let darkSkyurl = `https://api.darksky.net/forecast/${darkSkyApiKey}/${cords}`;
  request(
    {
      url: darkSkyurl,
      json: true
    },
    (error, response) => {
      if (error) {
        callback("Could not connect to Dark Sky's Server");
      } else if (response.body.error) {
        callback("Unable to find location");
      } else {
        callback(undefined, {
          temperature: response.body.currently.temperature,
          summary: response.body.currently.summary,
          precipitation: response.body.currently.precipProbability,
          dailySummary: response.body.daily.data[0].summary
        });
      }
    }
  );
};

module.exports = forcast;
