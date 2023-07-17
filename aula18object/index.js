const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Oliveira',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi, eu tenho ${this.idade} anos`)
    },

    incrementeIdade() {
        ++this.idade
    }
};

pessoa1.fala()
pessoa1.incrementeIdade()
pessoa1.fala()
pessoa1.incrementeIdade()
pessoa1.fala()
pessoa1.incrementeIdade()
pessoa1.fala()


function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    }
    
}
let pessoa2 = criaPessoa('Luiz', 'Oliveira', 36)
console.log(pessoa2.nome, pessoa2.sobrenome)
