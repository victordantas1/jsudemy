
/*let data = new Date(0) // 01/01/1970 Timestamp unix ou época unix
console.log(data.toString())

data = new Date(2020, 6, 10, 18, 59, 30)
console.log(data)

data = new Date('2020-6-10 19:55:20')
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); //Mês começa do 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString())
console.log(Date.now())*/

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
const dia = zeroAEsquerda((data.getDate()));
const mes = zeroAEsquerda((data.getMonth() + 1)); //Mês começa do 0
const ano = zeroAEsquerda((data.getFullYear()));
const hora = zeroAEsquerda((data.getHours()));
const min = zeroAEsquerda((data.getMinutes()));
const seg = zeroAEsquerda((data.getSeconds()));
const mseg = zeroAEsquerda((data.getMilliseconds()))

return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;

}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)