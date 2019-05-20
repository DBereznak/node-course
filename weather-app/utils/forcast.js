const request = require("request");

const darkSkyApiKey = "ec0760f3b8883acc0a6da9b69eb05ded";

const forcast = (longitude, latitude, callback) => {
  let cords = latitude + "," + longitude;
  let darkSkyurl = `https://api.darksky.net/forecast/${darkSkyApiKey}/${cords}`;
  request(
    {
      url: darkSkyurl,
      json: true
    },
    (error, {body}) => {
      if (error) {
        callback("Could not connect to Dark Sky's Server");
      } else if (body.error) {
        callback("Unable to find location");
      } else {
        callback(undefined, {
          temperature: body.currently.temperature,
          summary: body.currently.summary,
          precipitation: body.currently.precipProbability,
          dailySummary: body.daily.data[0].summary
        });
      }
    }
  );
};

module.exports = forcast;
