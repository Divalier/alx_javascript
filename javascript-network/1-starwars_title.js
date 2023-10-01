const req = require('request');
// Check if a movie ID (episode number) is provided as the first argument
if (process.argv.length < 3) {
    console.error('Usage: node getMovieTitle.js <Movie ID>');
    process.exit(1);
}

// Get the movie ID (episode number) from the command line arguments
const id = process.argv[2];
const url =`https://swapi-api.alx-tools.com/api/films/${id}`
req.get(url, {encoding:'utf-8'})
   .on('data', (data) => {
    const resp = JSON.parse(data)
    console.log(resp.title);
   })
