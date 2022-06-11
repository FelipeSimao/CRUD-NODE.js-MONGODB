const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const routes = require('./src/routes/filmes.routes')
const app = express()

mongoose.connect('mongodb://localhost:27017/netflix', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


app.use(morgan('dev'))
app.use(bodyParser.json())
app.use('/', routes)


app.listen(3000, () => {
    console.log('ta funfando ')
})