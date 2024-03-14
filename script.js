let sec = 0
let min = 0
let hor = 0
let interval
function twodigits(digit){
    if(digit < 10){
        return('0' + digit)
    }
    else{
        return(digit);
    }
}
function start(){
    interval = setInterval(timer, 1000)
}

function pause(){
   clearInterval(interval)
}

function stop(){
    clearInterval(interval)
    min=0
    sec=0
    hor=0
    document.getElementById("timer").innerText = '00:00:00'

}

function timer(){
    sec++
    if(sec==60){
        min++ 
        sec=0
    }
    if(min==60){
        hor++
        min=0
    }
    document.getElementById("timer").innerText = twodigits(hor) + ':' + twodigits(min) + ':' + twodigits(sec)
}