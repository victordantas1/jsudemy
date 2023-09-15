class Pessoa {
    constructor(nome, sobrenome) {
        this.nome= nome;
        this.sobrenome = sobrenome;
    }

    fala() {
        console.log(`${this.nome} está falando`);
    }

    comer() {
        console.log(`${this.nome} está comendo`);
    }

    beber() {
        console.log(`${this.nome} está bebendo`);
    }
}

let p1 = new Pessoa("Victor", "Dantas");

p1.fala();
p1.comer();
p1.beber();