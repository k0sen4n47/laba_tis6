const express = require('express');
const app = express();

app.use('/index', function (request, response) {
    response.redirect('https://xsltdev.ru');
});

app.listen(3000);
