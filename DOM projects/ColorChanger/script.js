const randomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i =0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}

let intervalId;
const startChangeColor = function(){
    if (!intervalId){
        intervalId = setInterval(changeColor, 1000);
    }
    function changeColor(){
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChangeColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

document.getElementById('start').addEventListener('click',startChangeColor);
document.getElementById('stop').addEventListener('click',stopChangeColor);
