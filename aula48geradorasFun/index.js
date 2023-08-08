function* geradora1(){
    // Código qualquer...
    yield 'Valor 1';
    // Código qualquer...
    yield 'Valor 2';
    // Código qualquer...
    yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

for(let valor of g1) {
    console.log(valor);
}

function* geradora2() {
    let i = 0;

    while(true){
        yield i;
        i++
    }
}

let g2 = geradora2();

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

function* geradora3(){
    yield 10
    yield 11
    yield 12
}

function* geradora4(){
    yield* geradora3();
    yield 13;
    yield 14;
    yield 15;
}

const g4 = geradora4();

for(let value of g4){
    console.log(value);
}