const request = require('request');
const URL = 'https://api.thecatapri.com/v1/breeds/search?q=';


const fetchBreedDescription = function(breedName, callback) {
  request(URL + breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(null, 'Breed not found.');
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = {fetchBreedDescription};