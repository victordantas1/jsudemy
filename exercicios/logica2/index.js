const ePaisagem = (width, height) => width > height ? true : false;

console.log(ePaisagem(100, 50));

function Paisagem (width, height) {
    if( width > height) {
       console.log("true");
    }
}

console.log(Paisagem(100, 50));

function Paisagem2 (width, height) {
    return width > height ? true : false;
}

console.log(Paisagem2(1000, 500));
