'use strict';

const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const uri_router = require('./routes/uri.route.js')
require('dotenv').config()

app.set('view engine','ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'))

app.use('/', uri_router)

app.get('/', (req, res) => {
    res.render('index')
})


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})