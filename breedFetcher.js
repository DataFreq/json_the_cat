const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, res, body) => {
    if (err) {
      callback(err, null);
      return;
    }
  
    const data = JSON.parse(body);
  
    if (!data[0]) {
      callback(`Requested breed "${breed}" was not found.`, null);
      return;
    }
  
    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };