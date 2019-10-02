 var numSquares=6;
 var colors=genrateRandom(numSquares);
var msg=document.querySelector("#msg");
 var squares=document.querySelectorAll(".square");
 var pickedColor=pickrand();
 var colorDisplay=document.getElementById("colorDisplay");
 var head=document.querySelector("h1");
 var reset=document.getElementById("newColors");
 var easy=document.getElementById("easy");
 var haed=document.getElementById("hard");
 easy.addEventListener("click",function(){
     numSquares=3;
easy.classList.add("selected");
hard.classList.remove("selected");  
colors=genrateRandom(numSquares);
pickedColor=pickrand();
colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++){
    if(colors[i])
    squares[i].style.backgroundColor=colors[i];
    else
    squares[i].style.display="none";
}
head.style.backgroundColor="steelblue";
    msg.textContent="";
 });
 hard.addEventListener("click",function(){
    hard.classList.add("selected");
    numSquares=6;
    easy.classList.remove("selected");
    colors=genrateRandom(numSquares);
    pickedColor=pickrand();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        squares[i].style.display="block";
        squares[i].style.backgroundColor=colors[i];
    }
    head.style.backgroundColor="steelblue";
    msg.textContent="";
     });
 reset.addEventListener("click",function(){
    if(this.textContent!=="Play again?"){
        this.textContent="New Colors";
    }
     if(numSquares===3){colors=genrateRandom(numSquares);
        pickedColor=pickrand();
        colorDisplay.textContent=pickedColor;
        for(var i=0;i<squares.length;i++){
            if(colors[i])
            squares[i].style.backgroundColor=colors[i];
            else
            squares[i].style.display="none";
        }
        head.style.backgroundColor="steelblue";
            msg.textContent="";

     }else{
        colors=genrateRandom(numSquares);
        pickedColor=pickrand();
        colorDisplay.textContent=pickedColor;
        for(var i=0;i<squares.length;i++){
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
        }
        head.style.backgroundColor="steelblue";
        msg.textContent="";
     }
    

 });
 colorDisplay.textContent=pickedColor;
 for( var i=0;i<squares.length;i++){
     squares[i].style.backgroundColor=colors[i];
     squares[i].addEventListener("click", function(){
         var clickedColor = this.style.backgroundColor;
         if(clickedColor === pickedColor){
         msg.textContent="Correct!!";
         reset.textContent="Play Again?";
         for(var i=0;i<squares.length;i++){
            squares[i].style.backgroundColor=pickedColor;
        }
        head.style.backgroundColor=this.style.backgroundColor;
        }else{
         this.style.backgroundColor="#232323";
         msg.textContent="Try Again";
         }
     });
 }function pickrand(){
     var rand=Math.floor(Math.random() *colors.length);
     return colors[rand];
 }
 function genrateRandom(x){
     var a=[];
     for(var i=0;i<x;i++){
         a.push(randomColors());
     }
     return a;
 }
 function randomColors(){
     var r=Math.floor(Math.random()*256);
     var g=Math.floor(Math.random()*256);
     var b=Math.floor(Math.random()*256);
 var s="rgb("+r+", "+g+", "+b+")";
 return s;
    }
