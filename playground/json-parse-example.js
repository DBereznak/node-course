const fs = require('fs');

const data = fs.readFileSync('./data.json');
const dataJson = data.toString();
const parsedData = JSON.parse(dataJson);
console.log(parsedData);
parsedData.name = 'Samuel';
parsedData.planet = "Earth";

const savedData = JSON.stringify(parsedData);
console.log(savedData);
fs.writeFileSync('./data.json', savedData);

