const frutas = ['maça', 'pera', 'uva'];
for (i = 0; i < frutas.length; i++){
    console.log(frutas[i])
};
for (let index in frutas){
    console.log(frutas[index])
};
//for in percorre o indice do array ou chaves do objeto

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};
console.log(pessoa.nome);
console.log(pessoa['nome'])

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}