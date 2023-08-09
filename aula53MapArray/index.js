// Map -> retorna os valores modificados 

// Dobre os numeros

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numDouble = numbers.map(value => value * 2);
console.log(numDouble);


const pessoas = [
    {nome: 'Luiz', idade: 62 },
    {nome: 'Maria', idade: 23 },
    {nome: 'Eduardo', idade: 55 },
    {nome: 'Letícia', idade: 19 },
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47 },
]

// Retorne apenas uma string com o nome da pessoa

const names = pessoas.filter(obj => obj.nome.length > 5).map(obj => obj.nome);

console.log(names);

// Remova apenas a chave do nome do objeto

const ages = pessoas.map(obj => ({idade: obj.idade})); // expressão

console.log(ages);

// Adicione uma chave id em cada objeto
const id = pessoas.map((obj, indice) => {
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
});

console.log(id);

console.log(pessoas);


