const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const { retreiveAllData } = require('./js/retreiveData')
const app = express()
const jsonParser = bodyParser.json()

app.use('/public', express.static(__dirname + '/public'))
app.use('/js', express.static(__dirname + '/js'))



app.set('view engine', 'ejs')
app.get('/landingpage', function (req, res) {
    res.render("landingpage", { public: "public/landingpage.css" })
})
app.get('/game', function (req, res) {
    res.render("game", { public: "public/game.css" })
})
app.get('/user', function (req, res) {
    let data = retreiveAllData()
    res.send(data)
})
app.post('/user', jsonParser, (req, res) => {
    let data = retreiveAllData()
    let newId = data[data.length - 1].id + 1
    req.body.id = newId
    data.push(req.body)
    fs.writeFileSync('./user.json', JSON.stringify(data))
    res.status(201).send(data)
})




app.listen(3000)