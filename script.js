
var timer = 31;
var score = 0;
var newrn = 0;

function incrsescore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score
}


function createbubble(){
    var clutter = ""
for(var i = 1; i<=152; i++ ){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`

}
document.querySelector("#fbtm").innerHTML = clutter
}

function settimer(){
    var timeout = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timervalue").textContent = timer;
        }
        else{
            clearInterval(timeout);
            document.querySelector("#fbtm").innerHTML = `<h1>GAME OVER</h1>`
        }
    }, 1000)
        
}       

function  getHitBubble(){
     newrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = newrn
    

}
document.querySelector("#fbtm").addEventListener("click",function(dets){
        var clickednum = (Number(dets.target.textContent));
        if(clickednum === newrn){
            incrsescore();
            createbubble();
            getHitBubble();

        }
})



settimer()
createbubble()
getHitBubble()

