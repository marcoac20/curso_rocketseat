const express = require('express')
const routes = express.Router()

const videos = require("./data")



routes.get("/", function(req, res){
    const about = {
        avatarUrl: "https://avatars1.githubusercontent.com/u/57117820?s=400&v=4",
        name: "Marco Antunes",
        role:"Curso Launchbase - Rocketseat",
        description: 'Dominando a programação do zero com o bootcamp Launchbase da <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
        link: [
            {name:"Github", url: "https://github.com/marcoac20"},
            {name:"Instagram", url: "https://www.instagram.com/_marco.ac/"},
            {name:"Linkdin", url: "https://www.linkedin.com/in/marcoac20/"},
        ]
    }
    return res.render("about", {about})
})

routes.get("/portfolio", function(req, res){
    return res.render("portfolio",{itens: videos})
})

routes.get("/video", function(req, res){
    const id = req.query.id

    const video = videos.find(function(video){
        return video.id == id
        
    })

    if (!video) {
        return res.send("Video not found!")
    }

    return res.render("video", { item: video })
})

routes.get('/teachers', function(req, res){
    return res.render("teachers")
})


module.exports = routes