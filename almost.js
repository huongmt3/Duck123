var almosts;

const express = require('express');
const almost_router = express.Router();
const handlebars = require('handlebars');
const fs = require('fs');
const hbs = require('hbs');
const path = require('path');
const multer = require('multer');
const app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: false
}));


almost_router.use(bodyParser.urlencoded({
    extended: false
}));

/*==========================================
 |                  INDEX                   |
 ===========================================*/
almost_router.get('/index', async (req, res) => {
    const template = handlebars.compile(fs.readFileSync('./views/almost/almost.hbs', 'utf-8'));
    const result = template({
        almost3: almosts
    }, {
        allowProtoMethodsByDefault: false,
        allowProtoPropertiesByDefault: false

    })
    res.render('almost/almost.hbs', {
        content: result,
        almosts: almosts
    })
})

module.exports = almost_router;
