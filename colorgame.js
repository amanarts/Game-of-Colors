var numSquares=6
var colors=generateRandomColors(numSquares);

var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");


easybtn.addEventListener("click",function(){
    hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    numSquares=3;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i])
        {
            squares[i].style.backgroundColor=colors[i];
        }
        else
        {
            squares[i].style.display="none"; 
        }
    }

});

hardbtn.addEventListener("click",function(){
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    numSquares=6;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
            squares[i].style.backgroundColor=colors[i];
            squares[i].style.display="block"; 
    }

});

resetButton.addEventListener("click",function(){
    //generate all new color
    colors=generateRandomColors(numSquares);
    //pick new random color from array
    pickedColor=pickColor();
    //change color of sqaures
    colorDisplay.textContent=pickedColor;
    //change color of squares
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=colors[i];

    }
    h1.style.backgroundColor="#232323";

})

colorDisplay.textContent=pickedColor;   

for(var i=0;i<squares.length;i++)
{
    //add initial color to squares
    squares[i].style.backgroundColor=colors[i];

    //add click listners to the squares
    squares[i].addEventListener("click",function(){
        //grab color of clicked square
        var clickedColor=this.style.backgroundColor;
        //compare color of pickedcolor 
        if(clickedColor===pickedColor)
        {
            messageDisplay.textContent="Correct";
            resetButton.textContent="Play Again!"; 
            changeColors(clickedColor);
            h1.style.backgroundColor=clickedColor;
        }
        else
        {
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="Try Again";
        }

    });
}

function changeColors(color){
    //loop through all squares
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=color;
    }
}

function pickColor()
{
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];

}

function generateRandomColors(num)
{
    //make an array
    var arr=[];
    //repeat num times
    for(var i=0;i<num;i++)
    {
        //get random color and push it into array
        arr.push(randomColor());

    }
    //return that array
    return arr;
}

function randomColor()
{
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";

}