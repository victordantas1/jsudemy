class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.validaCampos();
    }

    validaCampos() {
        let valid = true;
        
        for(let campo of this.formulario.querySelectorAll('.validar')) {
            console.log(campo);
        }
    }
}

const valida = new ValidaFormulario();