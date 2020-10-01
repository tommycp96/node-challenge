const quotes = require('./quotes.json');

function getRandomQuotes(){
    return quotes[Math.floor(Math.random() * quotes.length)];
}

module.exports = {
    getRandomQuotes: getRandomQuotes
}