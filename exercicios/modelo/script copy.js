let form = document.querySelector('#form')
const res = document.querySelector('.res')
let results = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

form.addEventListener('submit', function(e) {
    e.preventDefault()
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso)
    const altura = Number(inputAltura)
    const imc = peso / altura ** 2
    const imcNumber = Number(imc)

    if (imcNumber === NaN && imcNumber !== Number) {
        res.innerHTML = `Dados inválidos.`
        return
    }
    else if (imcNumber < 18.5) {
        res.innerHTML = `Seu IMC é ${imcNumber} (${results[0]})`
    } else if (imcNumber >= 18.5 && imcNumber <= 24.9) {
        res.innerHTML += `Seu IMC é ${imcNumber} (${results[1]})`
    } else if (imcNumber >= 25 && imcNumber <= 29.9) {
        res.innerHTML += `Seu IMC é ${imcNumber} (${results[2]})`
    } else if (imcNumber >= 30 && imcNumber <= 34.9) {
        res.innerHTML += `Seu IMC é ${imcNumber} (${results[3]})`
    } else if (imcNumber >= 35 && imcNumber <= 39.9) {
        res.innerHTML += `Seu IMC é ${imcNumber} (${results[4]})`
    } else {
        res.innerHTML += `Seu IMC é ${imcNumber} (${results[5]})`
    }

}
    
)





    

   