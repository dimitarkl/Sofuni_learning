const express = require('express');
const handlebars = require('express-handlebars')
const mongoose = require('mongoose')

const configExpress = require('./config/configExpress')
const configHandlebars = require('./config/configHandlebars')
const routes = require('./routes');
const { DB } = require('./config/SECRET');

const app = express();
configExpress(app)
configHandlebars(app)


app.use(routes)
//TODO change database namer
mongoose.connect(DB)
    .then(() => console.log('DB is connected'))
    .then(() => {
        app.listen(3000, () => console.log('Server running on: http://localhost:3000'))
    })
    .catch((err) => { throw new Error(err) })