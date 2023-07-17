/*const nome = 'Luiz';

let i = 0;

while ( i < nome.length) {
    console.log(nome[i]);
    i++
}
*/

function random (max, min) {
   
    const r = Math.random() * (max - min) + min;
    return Math.ceil(r);
    
}

const min = 1;
const max = 50;
let rand = random(min, max);


while (rand !== 10) {
    rand = random(min, max)
    console.log(rand);
}
