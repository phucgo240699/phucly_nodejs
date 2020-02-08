var express = require('express')
var path = require('path')
var hbs = require('hbs')

var app = express()

app.listen(process.env.PORT || 3000)

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

console.log(__dirname)

app.get('/', (request, response) => {
    response.render('homepage')
})