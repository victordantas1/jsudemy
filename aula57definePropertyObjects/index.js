// defineProperty

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, // pode ou nao alterar o valor
        configurable: false // pode reconfiguar a chave ou nao
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor
            writable: false, // pode ou nao alterar o valor
            configurable: false // pode reconfiguar a chave ou nao
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor
            writable: false, // pode ou nao alterar o valor
            configurable: false // pode reconfiguar a chave ou nao
        },
    })

}

const p1 = new Produto("Camisa", 20, 3);
p1.estoque = 10; // writable
delete p1.estoque; // configurable

console.log(p1);

console.log(Object.keys(p1)); // enumerable