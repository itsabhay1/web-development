// document.querySelector('#clock')
const clock = document.getElementById('clock')   // another method of query selector

setInterval(function(){
    let date = new Date()
    console.log(date);
    
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)