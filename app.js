var input=document.querySelector('#input');
var red=document.querySelector('#red');
var blue=document.querySelector('#blue');
var green=document.querySelector('#green');
var output=document.querySelector('#output');

function showOp()
{
    output.innerText=input.value;
}

function redFont()
{
   output.style.color='red';
}

function blueFont()
{
   output.style.color='blue';
}
function greenFont()
{
   output.style.color='green';
}

red.addEventListener("click",redFont);
blue.addEventListener('click',blueFont);
green.addEventListener('click',greenFont);
input.addEventListener('keyup',showOp);