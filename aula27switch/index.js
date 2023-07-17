const data = new Date('1987-04-23 00:00:00');
let diaSemana = data.getDay();
 
switch (diaSemana) {
    case 0: diaSemana = 'domingo'
    break
    case 1: diaSemana = 'segunda'
    break
    case 2: diaSemana = 'terça'
    break
    case 3: diaSemana = 'quarta'
    break
    case 4: diaSemana =  'quinta'
    break
    case 5: diaSemana = 'sexta'
    break
    case 6: diaSemana = 'sabado'
    break
    default: diaSemana = 'Dia inexistente.'
    break
}
console.log(diaSemana)
