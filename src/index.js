const express = require('express');
const app = express();
const port = 3000;

app.get('/quotes', function(request, response) {
    response.send("You asked for route /one")
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})