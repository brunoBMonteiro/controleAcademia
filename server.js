//criando o servidor
const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()

// linha responsavel pelo funcionamento do body
server.use(express.urlencoded({ extended: true }))
// arrumando a pasta public
server.use(express.static('public'))
// criando rotas 
server.use(routes)

// configuração da view engine
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

// colocando servidor online
server.listen(5000, function () {
    console.log("server is running")
})

