function timer(segundos){
    const timer = new Date(segundos * 1000);
    return timer.toLocaleTimeString('pt-BR', {
        hours12: false,
        timeZone: 'UTC'
    })
}

let time = document.querySelector('.timer');
let seconds = 0;
let timerStop;

document.addEventListener('click', controls);

function controls(e){
    const el = e.target;
    if(el.classList.contains('start')){
        clearInterval(timerStop)
        timerStop = setInterval(function(){
        time.innerHTML = timer(seconds);
        time.classList.remove('pausado');
        seconds++
    }, 1000);
    }
    if(el.classList.contains('stop')){
        clearInterval(timerStop)
        time.classList.add('pausado');
    }
    if(el.classList.contains('reset')){
    seconds = 0;
    time.innerHTML = timer(seconds)
    clearInterval(timerStop)
    time.classList.remove('pausado');
    }

}
