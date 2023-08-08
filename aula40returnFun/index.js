function comeco(comeco){
    function resto(resto){
        return comeco + resto;
    }
    return resto;
}

const inicio = comeco('Olá');

console.log(inicio(' Mundo!'))