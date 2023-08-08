// Constructor Functions -> objects
// Factory Functons -> objects
// Construtora -> Pessoa(new)

function Pessoa(nome, sobrenome) {
    const ID = 12345;

    const metodoInterno = () => {
        
    }
    
    this.nome = nome;
    this.sobrenom = sobrenome;

    this.metodo = () => {
        console.log(`${this.nome}: sou um metodo`);
    }
}

const pessoa1 = new Pessoa('Luiz', 'Otávio');
pessoa1.metodo();
const pessoa2 = new Pessoa('Maria', 'Oliveira');
pessoa2.metodo();




