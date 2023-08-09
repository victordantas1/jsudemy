const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes[2] = 'Joao';
const novo = [...nomes];

const nome = novo.pop();
const nome2 = novo.shift();
nomes.push('Ricardo');
nomes.unshift('Paulo');
const recebeNomes = nomes.slice(1, -2);

console.log(nome2);
console.log(nome);
console.log(novo);
console.log(nomes);
console.log(recebeNomes);

const name1 = "Victor Dantas";

const newName = name1.split(' ');

console.log(newName);

const name2 = newName.join(' ');

console.log(name2);

