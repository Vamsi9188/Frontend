document.addEventListener("DOMContentLoaded",function()
{
    const button=document.getElementById("find");
    button.addEventListener("click",function()
{
    const sub1Marks=document.getElementById('sub1').valueAsNumber;
    const sub2Marks=document.getElementById('sub2').valueAsNumber;
    const sub3Marks=document.getElementById('sub3').valueAsNumber;
    const sub4Marks=document.getElementById('sub4').valueAsNumber;
    const sub5Marks=document.getElementById('sub5').valueAsNumber;
    const sub6Marks=document.getElementById('sub6').valueAsNumber;
    if(sub1Marks && sub2Marks && sub3Marks && sub4Marks && sub5Marks && sub6Marks)
    {
        const totalMarks=sub1Marks+sub2Marks+sub3Marks+sub4Marks+sub5Marks+sub6Marks;
        console.log(totalMarks);
        
        const finalMarks=document.getElementById('total');
        finalMarks.textContent="Total Marks:"+totalMarks;

        const average=document.getElementById('average');
        average.textContent="Average Marks:"+(totalMarks)/6;

        const percentage=document.getElementById('percentage');
        percentage.textContent="Pecentage:"+(totalMarks/600)*100+"%";
    }
    else
    {
        alert("Plese enter All Subjects Marks")
    }
})
})