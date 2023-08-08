
//Arrow Function
const arr = (x, y) => {
    console.log(x + y);
}

arr(2, 5);

//Function Express - add function to var
const dizOi = function digaOi(){
    console.log("Oie");
}

dizOi();
7

// Function default - reiceved a function how parameter
function dizAlgo(funcao){
    funcao();
}

dizAlgo(dizOi);
