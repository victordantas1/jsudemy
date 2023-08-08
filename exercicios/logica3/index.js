function Fizz(x) {
    if (Number.isInteger(x / 3 && x / 5)) {
        console.log(`Número é divisível por 3 e 5 = FizzBuzz`)
    } else if (Number.isInteger(x / 3)){
        console.log(`Número é divisível por 3 = Fizz`)
    } else if (Number.isInteger(x / 5)){
        console.log(`Número é divisível por 5 = Buzz`)
    } else {
        console.log(`Número não é divisível por 3 e 5 = ${x}`)
    }
}

const numTrue = n => typeof n != 'number' ? console.log('Não é um número.') : console.log(`É um número.`);

for(let i = 0; i < 100; i++){
    console. log( i, Fizz(i));
    console.log(i, numTrue(i));
}

// Rever futuramente.