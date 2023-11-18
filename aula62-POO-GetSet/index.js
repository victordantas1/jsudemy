class Carro {
    constructor(name)  {
        this.name = name;
        this.velocidade = 0;
    }

    acelerar() {
        if(this.velocidade >= 100) return;
        this.velocidade++;
    }

    frear() {
        if(this.velocidade <= 0) return;
        this.velocidade;
    }
}

const c1 = new Carro("fusca");

for(let i = 0; i < 200; i++) {
    c1.acelerar();
}

c1.acelerar();
console.log(c1);