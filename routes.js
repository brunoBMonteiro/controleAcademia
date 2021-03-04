const express = require('express')
const routes = express.Router()

routes.get('/', function () { }, function (req, res) {
    return res.send("ok")
})

module.exports = routes