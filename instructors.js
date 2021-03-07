// create
exports.post = function (req, res) {

    // validação dos dados 
    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send('Preencha todos os campos!')
        }
    }

    return res.send(req.body)
}

// update

// delete