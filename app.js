var express = require('express')
var path = require('path')
var hbs = require('hbs')

var app = express()


const publicDirectoryPath = path.join(__dirname, '/public')

console.log(publicDirectoryPath)
app.listen(process.env.PORT || 3000)

app.set('view engine', 'hbs')
app.set('views','./views')

app.use(express.static(publicDirectoryPath))


app.get('/', (request, response) => {
    response.render('homepage')
})