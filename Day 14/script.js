document.addEventListener("DOMContentLoaded",function()
{
    const btn=document.getElementById('change-color');
    const div = document.getElementById('changeable-div');
    btn.addEventListener("click",function()
    {
        // document.documentElement.classList.toggle('color-change');
        div.classList.toggle("color-change");
    })
})