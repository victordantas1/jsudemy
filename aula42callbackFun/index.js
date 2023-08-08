function rand(min = 1000, max = 3000){
   const num = Math.random() * (max - min) + min;
   return Math.floor(num);
}

function f1(callback){
    setTimeout(function(){
        console.log('f1');
        if(callback) callback();
    }, rand())
    
}

function f2(callback){
    setTimeout(function(){
        console.log('f2');
        if(callback) callback();
    }, rand())
    
}

function f3(callback){
    setTimeout(function(){
        console.log('f3');
        if(callback) callback();
    }, rand())
    
}

f1(function(){
    f2(function(){
        f3(function(){
            console.log('Hello World!!');  
        })
    })
});

// Ou para que nós não criemosum callback HELL
// Não executar quando os dois modos estuiverem declarados

f1(callbackf1);
function callbackf1(){
    f2(callbackf2);
}

function callbackf2(){
    f3(callbackf3);
}

function callbackf3(){
    console.log("Hello World");
}