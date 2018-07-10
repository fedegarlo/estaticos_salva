// copy this into your app.js
const express = require('express');  
const app = express();
const cacheTime = 86400000 * 30 // the time you want
const path = require('path')

app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: cacheTime
}))

module.exports = app;  