
var timer = 60;
var score = 0;
var hitVal = 0;

// function getNewHit(){
//     var hitint = setInterval(() => {
//         if(timer>0){
//             var randN = Math.floor(Math.random()*10);
//             document.querySelector("#hit").textContent = randN;
//         }
//         else{
//             clearInterval(hitint);

//         }
//     }, 2000);
   
// }

function getNewHit(){
    hitVal = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = hitVal;
}

function makeBubble(){
    var clutter = " ";
    for(var i = 1; i<=102; i++){
        rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(() => {
        if(timer>0){
            timer--;
            document.querySelector("#time").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1 id="go">Game Over</h1>`;
        }
        
    }, 1000);
}

function calcScore(){

    score += 10;
    document.querySelector("#score").textContent = score;

}


makeBubble();
runTimer();
getNewHit();

// when event listner is applied on parent, first the event checks for children of the parent
//then if child doesnt exist, then only envent listner is applied on parent. Otherwise it is applied on child.
//hence we have written #pbtm here to select the bubble which is clicked.

var burst = document.querySelector("#pbtm");
burst.addEventListener("click",function(details){
    //details.target gives entire div tag Eg.-> <div class="bubble>8</div>"
    //Hence we wrote details.target.textContent.
    //this text will be in string form, so to convert it to number we used Number function.
    //console.log(Number(details.target.textContent));
    var bubbleVal = Number(details.target.textContent);
        if(bubbleVal == hitVal){
            calcScore();
            makeBubble();
            getNewHit();
        }
    
    
});

