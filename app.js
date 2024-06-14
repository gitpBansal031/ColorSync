let body=document.querySelector("body");
let h2=document.querySelector("h2");
let red=document.querySelector(".red");
let blue=document.querySelector(".blue");
let green=document.querySelector(".green");
let yellow=document.querySelector(".yellow");
let start=0;
let level=0;
let count=0;
let color=["red","yellow","blue","green"];
let gameArr=[];
let selColor="";
document.addEventListener("keypress",startGame);

function blink(color){
    let box=document.querySelector(`.${color}`);
    box.classList.add("white");
    setTimeout(() => {
        box.classList.remove("white")
    }, 250);
}
function userColor(){
    let userColor=this.classList[1];
    blink(userColor);
    let expColor=gameArr[count];
    if(userColor!=expColor){
        gameArr=[];
        gameOver();
    }else{
        count++;
        if(count==level){
            body.classList.add("gray");
            setTimeout(() => {
                body.classList.remove("gray")
            }, 500);
            setTimeout(()=>{
                upgradeLevel();
            },1000);
        }
    }
}
function gameBox(random){
    selColor=color[random];
    gameArr.push(selColor);
    blink(selColor);
}
function upgradeLevel(){
    count=0;
    level++;
    h2.innerText=`Level ${level}`;
    let random=Math.floor(Math.random()*4);
    gameBox(random);
}
function gameOver(){
    h2.innerText=`Game Over ! Your Score is ${level-1} ! Press any key to play`;
    document.addEventListener("keypress",startGame);
    red.removeEventListener("click",userColor);
    blue.removeEventListener("click",userColor);
    yellow.removeEventListener("click",userColor);
    green.removeEventListener("click",userColor);
}
function startGame(){
    level=0;
    document.removeEventListener("keypress",startGame);
    red.addEventListener("click",userColor);
    blue.addEventListener("click",userColor);
    yellow.addEventListener("click",userColor);
    green.addEventListener("click",userColor);
    upgradeLevel();
}