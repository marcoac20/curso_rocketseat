//Operações Bancarias

const user = {
  name: 'Thaina',
  transactions: [],
  balance: 0
}

//Adicionar transações
function criarTransacao(transacao) {
  user.transactions.push(transacao)

  if (transacao.tipo == 'creditoo') {
    user.balance = user.balance + transacao.valor
  } else {
    user.balance = user.balance - transacao.valor
  }

  return user
}

//Relatórios
function maiorTransacaoPorTipo(tipo) {
  let maiorTransacao
  let maiorValor = 0

  for (let transacao of user.transactions) {
    if (transacao.tipo == tipo && transacao.valor > maiorValor) {
      maiorTransacao = transacao
      maiorValor = transacao.valor
    }
  }

  return maiorTransacao
}

function mediaValorTransacao() {
  let soma = 0

  for (transacao of user.transactions) {
    soma = soma + transacao.valor
  }

  return soma / user.transactions.length
}

function numeroDeTransacao() {
  let contar = {
    credito: 0,
    debito: 0
  }

  for (let transacao of user.transactions) {
    if (transacao.tipo == 'credito') {
      contar.credito++
    } else {
      contar.debito++
    }
  }

  return contar
}


criarTransacao({ tipo: 'credito', valor: 50 })
criarTransacao({ tipo: 'credito', valor: 120 })
criarTransacao({ tipo: 'debito', valor: 80 })
criarTransacao({ tipo: 'debito', valor: 30 })

console.log(user)
console.log(maiorTransacaoPorTipo('credito'))
console.log(maiorTransacaoPorTipo('debito'))
console.log(mediaValorTransacao())
console.log(numeroDeTransacao())