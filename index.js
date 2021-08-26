const { fetchBreedDescription } = require('./breedFetcher');
const cli = process.argv[2];

fetchBreedDescription(cli, (err, details) => {
  if (err) console.log('Error fetching details:', err);
  else console.log(details);
});