const model = require('../src/model');

test('get random quotes', () => {
    const quotes = model.getRandomQuotes();
    expect(quotes).not.toBeNull();
    expect(quotes).toBeDefined();
});