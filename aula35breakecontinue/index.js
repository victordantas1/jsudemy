 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

 for(let number of numbers){
    
    if(number === 2){
        continue;
    }
    console.log(number);

    if(number ===6){
        break
    }
}

const soma = (x, y) => x + y;
console.log(soma(2, 1));
