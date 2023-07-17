/*const nome = 'Luiz';

let i = 0;

while ( i < nome.length) {
    console.log(nome[i]);
    i++
}
*/

function random (max, min) {
    max = 50;
    min = 1;
    const r = Math.random() * (max - min) + min;
    return Math.ceil(r);
    
}



let rand = random(1, 50);
console.log(rand);

while (rand !== 10) {
    console.log(rand);
}