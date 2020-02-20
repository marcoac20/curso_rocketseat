const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const courses = require("./data")

server.use(express.static('public'))

server.use(express.static('assets'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server
})

server.get("/", function(req, res){
    return res.render("about")
})

server.get("/courses", function(req, res){
    return res.render("courses", {itens: courses})
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id;
    
    return res.send(`O id fornecido na rota é: ${id}`);
});

server.use(function(req, res) {
    res.status(404).render("not-found")
})

server.listen(5000, function(){
    console.log("Server is running")
})