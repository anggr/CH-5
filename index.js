const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')

const app = express()
const jsonParser = bodyParser.json()


app.get('/user', function (req, res) {
    let data = JSON.parse(fs.readFileSync('./user.json', 'utf-8'))  //kirim data dari file user berbentuk string ke .json
    res.send(data)
})

app.post('/user', jsonParser(req, res) {
    console.log(req.body)
    let data = JSON.parse(fs.readFileSync('./user.json', 'utf-8'))
    let newId = data[data.length - 1].id + 1
    res.send("data berhasil ditambahkan")


})



app.listen(3000)