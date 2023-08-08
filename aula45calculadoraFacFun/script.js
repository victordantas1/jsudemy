/*
function criaCalculadora(){
    return{
        display: document.querySelector('.display'), 
        
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            })
        },

        clearDisplay() {
            this.display.value = ''
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!typeof conta == 'number') {
                    throw new Error()
                }

                this.display.value = conta;
            } catch(e) {
                alert('Conta Invalida');
            }
        },
        
        cliqueBotoes() {
            document.addEventListener('click', function(e) {
                const el= e.target;
                
                if(el.classList.contains('btn-num')) {
                    this.btnToDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')) {
                   this.clearDisplay();
                }
                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }
                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            }.bind(this));
        },

        btnToDisplay(value) {
            this.display.value += value;
        }

    }
}

const calculadora = criaCalculadora();
calculadora.inicia();

*/

function Calculadora(){
        this.display = document.querySelector('.display');
        
        this.inicia = () => {
            this.cliqueBotoes();
            this.pressEnter();
        }

        this.pressEnter = () => {
           document.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        }

        this.clearDisplay = () => this.display.value = '';

        this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);

        this.realizaConta = () => {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!typeof conta == 'number') {
                    throw new Error()
                }

                this.display.value = conta;
            } catch(e) {
                alert('Conta Invalida');
            }
        }

        this.cliqueBotoes = () => {
            document.addEventListener('click', e => {
                const el= e.target;
                if(el.classList.contains('btn-num')) this.btnToDisplay(el.innerText);
                if(el.classList.contains('btn-clear')) this.clearDisplay();
                if(el.classList.contains('btn-del')) this.apagaUm();
                if(el.classList.contains('btn-eq')) this.realizaConta();
            });
        }

        this.btnToDisplay = value => {
            this.display.value += value;
            this.display.focus();
        }

    }


const calculadora = new Calculadora();
calculadora.inicia();
