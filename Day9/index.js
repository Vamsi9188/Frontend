function createDOMNodes()
{
    const para=document.createElement('p');
    para.id="first-para";
    para.textContent="This is my first para created";
    document.body.appendChild(para);

   const hobbies=["singing","coding","painting"];
   const listofHobbies=document.createElement("ul");
   let htmlString="";
   for(let hobby of hobbies)
   {
    htmlString+="<li>"+hobby+"</li>";
   }
   listofHobbies.innerHTML=htmlString;
   document.body.appendChild(listofHobbies);
}
createDOMNodes();
function getNodes()
{
    const para=document.getElementById("first-para");
    para.style.background="yellow";

    const listofHobbies=document.getElementsByTagName("ul")[0];
    console.log(listofHobbies);
    const children=listofHobbies.children;
    for(let child of children)
    {
        child.classList.add("royal-blue")
    }
    const result=document.querySelector('ul > li');
    result.style.background="pink";
    console.log(result);
    const listItems = document.querySelectorAll("ul > li");
    for(let item of listItems)
    {
        item.style.background="lightgray";
    }
    
    console.log(document.getElementsByClassName("royal-blue"))

    console.log(document.querySelectorAll(".royal-blue"))
    console.log(document.querySelectorAll("#first-para"))
}
getNodes();