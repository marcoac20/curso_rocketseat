// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

// Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

// As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

// { nome: 'C++', especialidade: 'Desktop' }
// { nome: 'Python', especialidade: 'Data Science' }
// { nome: 'JavaScript', especialidade: 'Web/Mobile' }
// Por exemplo:

// const objeto = {
//   propriedade: [
//     { nome: 'C++', especialidade: 'Desktop' }, 
//     { nome: 'JavaScript', especialidade: 'Web/Mobile' }
//   ]
// }
// Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:

// O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop

const programador = {
    nome: 'Marco',
    idade: 28,
    tecnologia: [
        { linguagem: 'JS', especialidade: 'Web' },
        { linguagem: 'C++', especialidade: 'Desktop' },
        { linguagem: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
}

console.log (`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologia[0].linguagem} com especialidade em ${programador.tecnologia[0].especialidade}`)