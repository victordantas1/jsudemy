// Closure é quando uma função acessa o seu escopo léxico

function retornaFuncao(nome){
    return function(){
            return nome;
            }
}

const fucao = retornaFuncao('Victor');
console.log(fucao());
