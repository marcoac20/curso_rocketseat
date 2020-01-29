//Introdução à programação WEB

// Criar um prorgram que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo média.

const aluno01 = 'Marco'
const aluno02 = 'Thaina'
const aluno03 = 'João'
const notaAluno01 = 1.8
const notaAluno02 = 10
const notaAluno03 = 2

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

// Se a média for maior que 5, parabenizar a turma
if (media>5) {
    console.log (`A média de ${media}. Parabéns`)
} else {
    console.log('A média foi menor que 5')
}
//teste