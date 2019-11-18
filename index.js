
const express = require('express');
const ms = require('milsymbol');
const app = express();
const { convert } = require('convert-svg-to-png');

const PORT = 3000;

app.get('/icon/:id', async function (req, res) {
    const png = await convert(new ms.Symbol(req.params['id'], {size: 100}).asSVG());
    res.set('Content-Type', 'image/png');
    res.send(png);
});

app.listen(PORT, function () {
    console.log('App listening on port ' + PORT);
});