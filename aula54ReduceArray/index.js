// Some todos os valores

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const soma = numbers.reduce((acumulador, valor, indice, array)=> {
     acumulador += valor;
     return acumulador;
}, 0 /*valor do acumulador*/)

console.log(soma);

const pares = numbers.reduce((acumulador, valor) => {
    if(valor % 2 === 0) {
        acumulador.push(valor);
    }
    return acumulador;
}, []);
 
console.log(pares);


const pessoas = [
    {nome: 'Maria', idade: 36 },
    {nome: 'Eduardo', idade: 55 },
    {nome: 'Letícia', idade: 19 },
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47 },
    {nome: 'Luiz', idade: 62 },
]

const maisVelha = pessoas.reduce((acumulador, valor) => {
    console.log(acumulador, valor);
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;  // acumulador recebrá o valor do valor
})

console.log(maisVelha);

// filter + map + reduce

// retorna ra soma do dobro dos pares

const somaDouble = numbers.filter(x => x % 2 === 0).map(x => x * 2).reduce((accumulator, value) => accumulator + value)

console.log(somaDouble);