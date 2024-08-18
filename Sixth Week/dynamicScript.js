const para=document.createElement('p');
para.id='first-para';
para.textContent="I am First Para";
document.body.appendChild(para);

const box=document.createElement('div');
document.body.appendChild(box);
box.className='container';
box.style.border="1px solid";
box.style.height="200px";
box.style.width="200px";
box.style.alignContent='center';
box.style.textAlign='center';
box.textContent="Hi, I'm Vamsi!";
const vamsi=document.getElementById('vamsi');
box.appendChild(vamsi);

// dynamic text effect for one word/phrase
/*
document.addEventListener("DOMContentLoaded",function()
{
    let text="Student";
    let dynamicText=document.getElementById('vamsi');
    let index=0;
    function dynamicTextFlow()
    {
        if(index<text.length)
        {
            dynamicText.textContent += text[index];
            index++;
            setTimeout(dynamicTextFlow,100);
        }
    }
    dynamicTextFlow();
})
*/

// dynamic text for displaying array of words/phrases
document.addEventListener("DOMContentLoaded",function()
{
    const phrases=["Student", "Learner", "Job Seeker", "Fresher"];
    const dynamicText=document.getElementById('vamsi');
    let phraseIndex=0;
    let charIndex=0;
    function dynamicTextFlow()
    {
        if(charIndex<phrases[phraseIndex].length)
        {
            dynamicText.textContent += phrases[phraseIndex][charIndex];
            charIndex++;
            setTimeout(dynamicTextFlow,200);
        }
        else
        {
            setTimeout(function()
            {
                charIndex=0;
                phraseIndex=(phraseIndex+1)%phrases.length;
                dynamicText.textContent="I am a ";
                dynamicTextFlow();
            },200);
        }
    }
    dynamicTextFlow();
})