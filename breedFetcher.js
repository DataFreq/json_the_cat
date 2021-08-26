const request = require('request');
const cli = process.argv.slice(2);
const catAPI = `https://api.thecatap.com/v1/breeds/search?q=` + cli;

request(catAPI, (err, res, body) => {
  if (err) {
    console.log(`Failed to request details: ${err}`);
    return;
  }

  const data = JSON.parse(body);

  if (Object.keys(data).length === 0) {
    console.log(`Requested breed "${cli}" was not found.`);
    return;
  }

  console.log(data);
});