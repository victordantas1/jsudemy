/* 
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valor

Referência (mutável) - array, object, function - Passados por referência
*/
let a = 'A';
let b = a; // Cópia
console.log(a, b)

a = 'Outra coisa'
console.log(a, b)

let d = [1, 2, 3]
d.push(4)
d.unshift(8)
d.pop()


let c = d
let e = [...c]
c.pop()

console.log(d, c)
console.log(e)