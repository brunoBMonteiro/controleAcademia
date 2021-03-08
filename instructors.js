const fs = require('fs')

// create
exports.post = function (req, res) {

    // validação dos dados 
    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send('Preencha todos os campos!')
        }
    }
    fs.writeFile('data.json', JSON.stringify(req.body), function () {
        if (err) return res.send("Write file error")

        return res.redirect("/instructors")
    })

    //return res.send(req.body)
}

// update

// delete