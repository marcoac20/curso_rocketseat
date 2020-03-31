const fs = require('fs')
const data = require("./data.json")

//craete
exports.post = function(req, res){
  const keys = Object.keys(req.body)

  //validando campos vazios
  for(key of keys) {
    // req.body.key == ""
    if (req.body[key] == ""){
      return res.send("Por favor, preencha todos os campos") /* req.body = mantém parâmetros enviados do cliente como parte de uma solicitação POST. */
    }
  }

  //estruturando os dados
  let { avatar_url, birth, name, services, gender } = req.body

  //trtando e incluinda data desde
  req.body.birth = Date.parse(birth)
  const created_at = Date.now()

  //criando ID
  const id = Number(data.instructors.length + 1)

  //Criando arquivo de dados json
  data.instructors.push({
    id,
    avatar_url,
    name,
    birth,
    gender,
    services,
    created_at,
  })

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if (err) return res.send("Erro ao enviar dados!")

    return res.redirect("/instructors")
  })
}
