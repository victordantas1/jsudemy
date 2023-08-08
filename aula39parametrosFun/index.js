function fazAlgo(a, b = 2, c = 10){
    console.log(a + b + c);
}

fazAlgo(10, undefined, 9)

// Desestruturação

function dadosPessoa ({ nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
    console.log(nome);
}

dadosPessoa({nome: "Victor", sobrenome: "Dantas", idade: 19});


//
function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador === '+'){acumulador += numero};
        if(operador === '-'){acumulador -= numero};
        if(operador === '/'){acumulador /= numero};
        if(operador === '*'){acumulador *= numero};
    }
    console.log(acumulador);
}

(conta('+', 0, 10, 15, 20));



