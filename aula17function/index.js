function saudacao(nome) {
    console.log(`Bom Dia, ${nome}!`);
    return 'Lindo!'
}

saudacao('Victor')
const variavel = saudacao('Victor')
console.log(variavel)

function soma(x = 1, y = 1) {
    const resultado = x + y
    return resultado;
}

console.log(soma())
console.log(soma(2))
console.log(soma(5, 7))

const raiz = function (n) {
    return n ** 0.5
};

console.log(raiz(9))
console.log(raiz(16))

let ele = n => n ** 0.5

console.log(raiz(9))
console.log(raiz(16))

console.log(ele(100))


