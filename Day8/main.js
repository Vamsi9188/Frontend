const para=document.getElementById("first-para");
para.style.color="red";

// create elements using javascript
let newParagraph=document.createElement("p");
newParagraph.id="new-para";
newParagraph.textContent="This is a new Paragraph created using id name";
document.body.appendChild(newParagraph);
newParagraph.style.backgroundColor="orange";
newParagraph.style.fontSize="25px"
// console.log(newParagraph);

let heading=document.createElement("h2");
heading.class="header2";
heading.textContent="This is heading level 2 created by class name";
document.body.appendChild(heading);
heading.style.backgroundColor="yellow";

let photo=document.createElement("img");
photo.setAttribute("src","vamsi.jpeg");
photo.setAttribute("width","100");
photo.setAttribute("height","100");
photo.setAttribute("alt","The alternate text");
document.body.appendChild(photo);