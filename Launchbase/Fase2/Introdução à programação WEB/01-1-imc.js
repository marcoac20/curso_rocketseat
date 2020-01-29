//###Cálculo de IMC###
//Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

// Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa, por exemplo:

// const nome = 'Carlos'
// const peso = 84
// const altura = 1.88
// A partir desses dados armazene em uma constante chamada imc o cálculo do índice de massa corporal 
//definido pela fórmula abaixo:

// peso / (altura * altura)
// Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:

//SE o IMC maior ou igual a 30: Carlos você está acima do peso;
//SE o IMC menor que 29.9: Carlos você não está acima do peso;

const nomeImc = 'Claudio'
const pesoImc = 90
const alturaImc = 1.71

const imc = pesoImc/ (alturaImc * alturaImc)

if (imc >= 30){
    console.log(`IMC = ${imc}, ${nomeImc} você está acima do peso`)
} else {
    console.log(`IMC = ${imc}, ${nomeImc} você não está acima do peso`)
}