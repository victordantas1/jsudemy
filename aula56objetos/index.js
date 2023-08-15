const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
}

const chave = 'nome';
console.log(pessoa[chave]);
console.log(pessoa.sobrenome);

console.log(' ')

const pessoa2 = new Object();
pessoa2.nome = 'Luiz';
pessoa2.sobrenome = 'Otavio';
pessoa

console.log(pessoa2['nome']);

pessoa2.falarNome = function() {
    console.log(`${this.nome} está falando seu nome.`)
}

pessoa2.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

pessoa2.falarNome();

// Factory / Constructor functions / Classes ...
 
Object.freeze(this); // Impossibilita alterações no seu objeto

