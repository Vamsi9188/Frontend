// Create a new paragraph element
let paragraph = document.createElement("p");
paragraph.style.backgroundColor="yellow";
paragraph.style.color="red";
paragraph.style.fontSize="20px";
paragraph.style.border="2px solid black";
paragraph.style.padding="5px";
// Add some text content to the paragraph
paragraph.textContent = "This paragraph was added using JavaScript.";

// Append the paragraph to the body of the document
document.body.appendChild(paragraph);
