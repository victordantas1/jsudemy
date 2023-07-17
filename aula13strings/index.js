

let umaString = 'Um \'texto\'' // Podemos usar barra invertida para mostrar as aspas
console.log(umaString)
umaString = 'O rato roeu a roupa do rei de roma.' // Para colocar uma barra invertida é necessário colocar duas
console.log(umaString[7]) // Motra somente um dos caracteres da string
console.log(umaString.charAt(8))
console.log(umaString.concat(' em um lindo dia.'))
console.log(umaString + ' em um lindo dia.')
console.log(`${umaString} em um lindo dia.`)
console.log(umaString.indexOf('texto')) // mostra onde começa a palavra
console.log(umaString.lastIndexOf('m'))
console.log(umaString.replace(/roupa/, 'Outra'))
console.log(umaString.length)
console.log(umaString.slice(1, 5))
console.log(umaString.slice(-5, -1))
console.log(umaString.split('r'))
console.log(umaString.split(' ', 3))
console.log(umaString.toUpperCase())
console.log(umaString.toLowerCase())






