const http = require('http');

const express = require('express');
const fs = require('fs');
const app = express();
const html = require('html');
const hbs = require('hbs');
const handlebars = require('handlebars');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/'));
var {
    allowInsecurePrototypeAccess
} = require('@handlebars/allow-prototype-access');
hbs.registerPartials(__dirname + '')

const duck = require('./views/index.hbs');

app.use('/duck', duck);

app.get('/', async (req, res) => {
    const template = handlebars.compile(fs.readFileSync('./views/index.hbs', 'utf-8'));
    console.log(duck);
    const result = template({
        duck : './views/index.hbs'
    }, {
        allowProtoMethodsByDefault: false,
        allowProtoPropertiesByDefault: false
    })
    res.render('./index.hbs', {
        content: result
    })
})

//fix cannot GET /
app.get("/:universalURL", (req, res) => {
    res.send("404 URL NOT FOUND");
 });

 /*===========================================
 |                  PORT                     |
 ============================================*/
 //app.use('/', router);
const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.debug('Web Server is listening at port' + PORT);