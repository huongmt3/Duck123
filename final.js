var finals;

const express = require('express');
const final_router = express.Router();
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


final_router.use(bodyParser.urlencoded({
    extended: false
}));

/*==========================================
 |                  INDEX                   |
 ===========================================*/
final_router.get('/index', async (req, res) => {
    const template = handlebars.compile(fs.readFileSync('./views/final/final.hbs', 'utf-8'));
    const result = template({
        final3: finals
    }, {
        allowProtoMethodsByDefault: false,
        allowProtoPropertiesByDefault: false

    })
    res.render('final/final.hbs', {
        content: result
    })
})

module.exports = final_router;
