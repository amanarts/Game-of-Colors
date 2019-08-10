var colors=generateRandomColors(6);
var h1=document.querySelector("h1");
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");

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
            changeColors(clickedColor);
            h1.style.backgroundColor=clickedColor;
        }
        else
        {
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="Try Again"
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