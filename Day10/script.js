document.addEventListener("DOMContentLoaded", function()
{
    var phrases = ["student...", "learner...", "job seeker...", "human being..."];
    const dynamicTextElement = document.getElementById("dynamic-text");
    
    let phraseIndex = 0;
    let letterIndex = 0;
    let writingSpeed = 100;
    let erasingSpeed = 100;
    // function for printig letters
    function writeLetter()
    {
        // Corrected the way to access a character in a string
        dynamicTextElement.textContent += phrases[phraseIndex].charAt(letterIndex);
        if (letterIndex < phrases[phraseIndex].length - 1)
        {
            setTimeout(function()
            {
                letterIndex++;
                writeLetter();
            }, writingSpeed);
        }
        else
        {
            // Delay before starting to clear the text
            setTimeout(function() 
            {
                clearLetter();
            },1000); // 1-second delay
        }
    }
    // function for clearLetters
    function clearLetter()
    {
        let content = dynamicTextElement.textContent.split("");
        content.pop();
        dynamicTextElement.textContent = content.join("");
        if (dynamicTextElement.textContent != "")
        {
            setTimeout(function()
            {
                clearLetter();
            }, erasingSpeed);
        }
        else
        {
            phraseIndex++;
            phraseIndex = phraseIndex % phrases.length;
            letterIndex = 0;
            writeLetter();
        }
    }
    // Start the typing animation
    writeLetter();
});
