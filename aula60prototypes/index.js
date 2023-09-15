function Pessoa(nome, sobrenome) {
    Object.defineProperty(this, 'nome',{
        get: function() {
            return nome;
        },
        set: function(name) {
            this.name = name
        }
    });

    Object.defineProperty(this, 'sobrenome',{
        get: function() {
            return sobrenome;
        },
        set: function(sobrenome) {
            this.sobrenome = sobrenome;
        }
    });

    Pessoa.prototype.DizOi = `Olá meu nome eh ${this.nome}`;
}

const p1 = new Pessoa("Victor", "Dantas");

console.log(p1.DizOi);

