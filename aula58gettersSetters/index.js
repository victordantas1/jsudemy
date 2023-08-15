// defineProperty -> Getter e Setter

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        
        configurable: false, // pode reconfiguar a chave ou nao

        get: function() {
            return estoque;
        },
        set: function(valor) {
          if(typeof valor !== 'number') {
            console.log('Bad value');
            throw new TypeError('Mensagem');
          }  
        }
    });
}

const p1 = new Produto("Camisa", 20, 3);




console.log(p1);
