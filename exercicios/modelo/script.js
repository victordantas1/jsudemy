let btn = document.querySelector('.btn')
btn.addEventListener('click', calcular)

let results = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']


function calcular() {
    let peso = document.querySelector('#peso')
    let altura = document.querySelector('#altura')
    let peso1 = Number(peso.value)
    let altura1 = Number(altura.value)
    let imc = (peso1 / altura1 ** 2)
    let res = document.querySelector('.res')
    

    if (imc < 18.5) {
        res.innerHTML = `Seu IMC é ${imc} (${results[0]})`
    } else if (imc >= 18.5 && imc <= 24.9) {
        res.innerHTML += `Seu IMC é ${imc} (${results[1]})`
    } else if (imc >= 25 && imc <= 29.9) {
        res.innerHTML += `Seu IMC é ${imc} (${results[2]})`
    } else if (imc >= 30 && imc <= 34.9) {
        res.innerHTML += `Seu IMC é ${imc} (${results[3]})`
    } else if (imc >= 35 && imc <= 39.9) {
        res.innerHTML += `Seu IMC é ${imc} (${results[4]})`
    } else {
        res.innerHTML += `Seu IMC é ${imc} (${results[5]})`
    }
}