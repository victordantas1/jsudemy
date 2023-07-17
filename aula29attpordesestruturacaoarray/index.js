/*let a = 'a';
let b = 'b';
let c= 'c';

const letras = [b, c, a];
[a, b, c] = letras;


console.log(a, b, c);*/

// ... rest, ... spread
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
let [primeiroNum, segundoNum, ...resto] = numeros;
const [um, , tres, , cinco] = numeros;
console.log(um, tres, cinco)


console.log(primeiroNum, segundoNum, resto);

//              0           1          2
//            0  1  2    0  1  2    0  1   2 
const num = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(num[1][2])
