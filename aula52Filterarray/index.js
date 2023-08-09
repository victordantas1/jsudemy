// Filter -> sempre retornará um array, coma a mesma quantidade de elementos ou menos.

// Retrone os números maiores que 10

const numbers= [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//tambem podemos declarar somente uma array function valor => valor > 10

const numFiltered = numbers.filter((valor, indice, array) =>{
    console.log(valor, indice);
    console.log(array); 
    return valor > 10;
});

console.log(numFiltered);

const pessoas = [
    {nome: 'Luiz', idade: 62 },
    {nome: 'Maria', idade: 23 },
    {nome: 'Eduardo', idade: 55 },
    {nome: 'Letícia', idade: 19 },
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47 },
]

// Pessoas com nome maior ou igual a 7 letras
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 7);

console.log(pessoasComNomeGrande);

// Pessoas com mais de 50 anos

const pessoasIdosas = pessoas.filter(obj => obj.idade > 50);

console.log(pessoasIdosas);

// Pessoas que terminam com 'a'

const pessoasA = pessoas.filter(obj => obj.nome.toLowerCase().endsWithWith('a'));

console.log(pessoasA);