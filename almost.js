const express = require('express');
const loading_router = express.Router();
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


/*almost_router.use(bodyParser.urlencoded({
    extended: false
}));*/

/*==========================================
 |                  INDEX                   |
 ===========================================*/
loading_router.get('/index', async (req, res) => {
    const template = handlebars.compile(fs.readFileSync('./views/partials/almost/almost.hbs', 'utf-8'));
    const result = template({
        loading3: loadings
    }, {
        allowProtoMethodsByDefault: false,
        allowProtoPropertiesByDefault: false

    })
    res.render('almost/almost.hbs', {
        content: result
    })
})

module.exports = almost_router;