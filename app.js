var express = require('express')
var hbs = require('hbs')

var app = express()

app.listen(process.env.PORT || 3001)

app.set('view engine', 'hbs')
app.set('views','./view')


app.get('/', (request, response) => {
    response.render('homepage')
})