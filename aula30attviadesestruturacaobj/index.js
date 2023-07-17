const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereço: {
        rua: 'Av Brasil',
        numero: 320,

    }
};

// Atribuiçaõ via desestruturação
const { nome, sobrenome } = pessoa;
console.log(nome, sobrenome);

let {nome1, sobrenome1, endereço} = pessoa;
console.log(endereço);

var {nome: nome2, sobrenome: sobrenome2, endereço: {rua: r = 1234, numero}} = pessoa;
console.log(nome2, sobrenome2, numero);

const { nome: name1, ...resto} = pessoa;
console.log(name1, resto)
