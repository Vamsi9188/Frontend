function changeColor()
{
    console.log("change color was called");
    const box=document.getElementsByClassName("box")[0];
    box.style.background="palevioletred";
}
document.querySelector("button").onclick=function onButtonClick()
{
    console.log("button was clicked");
}
document.querySelector("button").addEventListener("click",changeColor)

document.querySelector("#stop-color-change").addEventListener('click', function stopListening(){

})

document.querySelector("button").removeEventListener('click',changeColor)