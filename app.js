const express = require('express')
const path = require('path')
const app = express()
const pgp = require('pg-promise')(/* options */)

// view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')


// database
const db = pgp('postgres://postgres:Oziel1236@db-hw3.czqzexqacus6.us-east-2.rds.amazonaws.com:5432/postgres')

app.get('/', function(req, res) {
    console.log('testing');
    db.one('SELECT VERSION();').then(data => {
        res.render('index', {
            title: "Oziel Hernandez's HW3",
            version: data.version
        })
        console.log('DATA:', data.version)
    })
        .catch((error) => {
            console.log('ERROR:', error)
        })
});

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})
