function setHour(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

setInterval(function(){
    console.log(setHour())
    }, 1000);

setTimeout(function(){
    clearInterval(setInterval(function(){
        console.log(setHour())
        }, 1000))
}, 5000)