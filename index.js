const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')

const app = express()
const jsonParser = bodyParser.json()


app.get('/user', function (req, res) {
    let data = JSON.parse(fs.readFileSync('./user.json', 'utf-8'))  //kirim data dari file user berbentuk string ke .json
    res.send(data)
})


app.post('/user', jsonParser, (req, res) => {
    let data = JSON.parse(fs.readFileSync('./user.json', 'utf-8'))
    let newId = data[data.length - 1].id + 1
    req.body.id = newId
    data.push(req.body)
    fs.writeFileSync('./user.json', JSON.stringify(data))
    res.send(data)
})




app.listen(3000)