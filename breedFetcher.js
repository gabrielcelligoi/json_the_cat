const request = require('request');
const URL = 'https://api.thecatapi.com/v1/breeds/search?q=';
const arg = process.argv[2];

request(URL + arg, (error, response, body) => {
  if (error) {
    console.log('error: ', error);
    console.log('statusCode: ', response && response.statusCode);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log('Breed not found.');
    } else {
      console.log(data[0].description);
    }
  }
});
