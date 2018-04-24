console.log('May Node be with you')

const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient


var db

MongoClient.connect("mongodb://mongodb:dbpassword@ds255539.mlab.com:55539/nodejs-db",  (err, client) => {
  if (err) return console.log(err)
  db = client.db('nodejs-db') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})

//app.post('/quotes', (req, res) => {
//  console.log(req.body)
//})


//app.get('/', (req, res) => {
//  db.collection('quotes').find().toArray((err, result) => {
//    if (err) return console.log(err)
    // renders index.ejs
//    res.render('view/index.ejs', {quotes: result})
//  })
//})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})
