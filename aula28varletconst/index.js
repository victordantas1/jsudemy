// Let tem escopo de bloco { ... bloco}
// Var só tem escopo de função
const verdadeira = true
let nome = 'luiz' // criando
var nome2 = 'luiz' // criando
console.log(nome, nome2)

if (verdadeira) {
    let nome = 'otávio' // criando
    var nome2 = 'rogerio' // redeclarando
    console.log(nome, nome2)
    if (verdadeira) {
        var nome2 = 'Ronaldo' // redeclarando
        let nome = 'outra coisa' // criando
        console.log(nome, nome2)
    }
}

console.log(nome, nome2)

function falaOi () {
    var nome1 = 'Carlos'
    console.log('Oi')
}
falaOi()
console.log(nome1)

