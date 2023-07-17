let num1 = prompt('Escreva um número.');
num1 = Number(num1)
let txt = document.querySelector('h1#txt')
let txt2 = document.querySelector('p.txt2')

txt.innerHTML = `Seu número é: ${num1}`
txt2.innerHTML = `<p>Raiz quadrada: ${num1 ** 0.5}</p>`
txt2.innerHTML += `<p>${num1} é inteiro: ${Number.isInteger(num1)}</p>`
txt2.innerHTML += `<p>É NaN: ${Number.isNaN(num1)}</p>`
txt2.innerHTML += `<p>Arredondando para baixo: ${Math.floor(num1)}</p>`
txt2.innerHTML += `<p>Arredondando para cima: ${Math.ceil(num1)}</p>`
txt2.innerHTML += `<p>Com duas casas decimais: ${num1.toFixed(2)}</p>`






