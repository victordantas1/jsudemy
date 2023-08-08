function setHour(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

const data = setInterval(function(){
    console.log(setHour())
    }, 1000)

setTimeout(function(){
    clearInterval(data)
}, 5000)

setTimeout(function(){
    console.log("Olá, mundo!")
}, 7000)