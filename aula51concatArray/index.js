const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2);

console.log(a3)
// ... rest -> ... spread: cria uma copia do array. Pois se nos declararmos const a = a1. se´ra passado a referência de a1 para a

const a = [...a1];
console.log(a);

const a4 = [...a1, 'luiz', ...a2, ...[7, 5, 6]];
console.log(a4);

