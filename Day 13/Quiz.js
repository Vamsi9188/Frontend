// takes the references
const quizContainer=document.getElementsByClassName('quiz-container')[0];
const quiz=document.getElementsByClassName('quiz')[0];
const prevButton=document.getElementsByClassName('prev-btn')[0];
const nextButton=document.getElementsByClassName('next-btn')[0];
const submitButton=document.getElementsByClassName('submit-btn')[0];
const resultsContainer = document.getElementsByClassName('results')[0];
const resetButton = document.getElementsByClassName('reset-btn')[0];

// Disable the reset button initially
resetButton.setAttribute('disabled', 'disabled');

// Data
const questions = [
    {
        id: 1,
        question: "Which country won the ICC Men's Cricket World Cup in 2023?",
        answers: {
            a: "a. India",
            b: "b. Australia",
            c: "c. England"
        },
        correctAnswer: "b"
    },
    {
        id: 2,
        question: "Who was the Player of the Tournament in the 2023 Cricket World Cup?",
        answers: {
            a: "a. Virat Kohli",
            b: "b. Ben Stokes",
            c: "c. David Warner"
        },
        correctAnswer: "a"
    },
    {
        id: 3,
        question: "Which city hosted the final of the 2023 ICC Cricket World Cup?",
        answers: {
            a: "a. Mumbai",
            b: "b. Melbourne",
            c: "c. Ahmedabad"
        },
        correctAnswer: "c"
    },
    {
        id: 4,
        question: "Which bowler took the most wickets in the 2023 Cricket World Cup?",
        answers: {
            a: "a. Mitchell Starc",
            b: "b. Mahammad Shami",
            c: "c. Jasprit Bumrah"
        },
        correctAnswer: "b"
    },
    {
        id: 5,
        question: "Which team was the runner-up in the 2023 Cricket World Cup?",
        answers: {
            a: "a. India",
            b: "b. England",
            c: "c. New Zealand"
        },
        correctAnswer: "a"
    },
    {
        id: 6,
        question: "How many runs did Rohit Sharma score in the 2023 Cricket World Cup?",
        answers: {
            a: "a. 500",
            b: "b. 597",
            c: "c. 755"
        },
        correctAnswer: "b"
    },
    {
        id: 7,
        question: "Which team scored the highest total in a single match in the 2023 Cricket World Cup?",
        answers: {
            a: "a. South Africa",
            b: "b. England",
            c: "c. India"
        },
        correctAnswer: "a"
    },
    {
        id: 8,
        question: "Which player won the most Man of the Match awards in the 2023 Cricket World Cup?",
        answers: {
            a: "a. Glenn Maxwell",
            b: "b. Jos Buttler",
            c: "c. Rachin Ravindra"
        },
        correctAnswer: "c"
    },
    {
        id: 9,
        question: "Which team made the biggest comeback in the 2023 Cricket World Cup?",
        answers: {
            a: "a. Pakistan",
            b: "b. South Africa",
            c: "c. Netherlands"
        },
        correctAnswer: "c"
    },
    {
        id: 10,
        question: "Which team was the surprise underdog of the 2023 Cricket World Cup?",
        answers: {
            a: "a. Afghanistan",
            b: "b. Sri Lanka",
            c: "c. Bangladesh"
        },
        correctAnswer: "a"
    }
];


const quizSlides=[];
let currentSlide=0;
let quizSubmitted=false;
const answeredByUser = [];

function onNextClick()
{
    const upcomingSlideNumber = currentSlide + 1;
    if(upcomingSlideNumber >= questions.length)
    {
        return;
    }
    else
    {
        showSlide(upcomingSlideNumber);
    }
}

function onPreviousClick()
{
    const upcomingSlideNumber = currentSlide - 1;
    if(upcomingSlideNumber < 0)
    {
        return;
    }
    else
    {
        showSlide(upcomingSlideNumber);
    }
}

function  onSubmitClick()
{
    quizSubmitted=true;
    const resultsElement = quizContainer.querySelector('.results');
    const correctAnswers = answeredByUser.filter(i => i.isCorrect ==true);

    const displayText = `${correctAnswers.length} of ${questions.length} are correct`;
    resultsElement.innerText = displayText;
    enableSubmitButton(false);

    disableAnswers();
    // for additional text
    resultsContainer.classList.add('show-results');
     // Enable the reset button after submission
     resetButton.removeAttribute('disabled');
     submitButton.addEventListener('click', onSubmitClick);
}
function regulateNextPrevEnability()
{
    if(currentSlide<=0)
    {
        prevButton.setAttribute('disabled','disabled');
    }
    else
    {
        prevButton.removeAttribute('disabled');
    }

    if(currentSlide >= quizSlides.length-1)
    {
        nextButton.setAttribute('disabled','disabled');
    }
    else
    {
        nextButton.removeAttribute('disabled');
    }
}

function enableSubmitButton(enable)
{
    if(enable)
    {
        submitButton.removeAttribute('disabled');
    }
    else
    {
        submitButton.setAttribute('disabled','disabled');
    }
}
function buildQuiz()
{
    questions.forEach(function(question, index)
    {
        const slideElement=document.createElement('div');
        slideElement.setAttribute('class','slide');

        const questionElement=document.createElement('div');
        questionElement.setAttribute('class','question');
        questionElement.innerHTML= question.question;

        slideElement.appendChild(questionElement);

        const answersElement = document.createElement('div');
        answersElement.setAttribute('class','answers');

        for(const letter in question.answers)
        {
            const answerElement=document.createElement('div');
            answerElement.setAttribute('class','answer');

            const inputOptionElement=document.createElement('input');
            inputOptionElement.setAttribute('type','radio');
            inputOptionElement.setAttribute('name', `question${question.id}`);
            inputOptionElement.setAttribute('id',letter);
            inputOptionElement.setAttribute('value',question.answers[letter]);
            inputOptionElement.setAttribute('onclick','onAnswerClick(event)')
            

            answerElement.appendChild(inputOptionElement);
            const spanElement=document.createElement('span');
            spanElement.innerText=question.answers[letter];

            answerElement.appendChild(spanElement);
            answersElement.appendChild(answerElement);
        }

        slideElement.appendChild(answersElement);
        quizSlides.push(slideElement);
    })
}

function onAnswerClick(ev)
{
    const questionId=ev.target.name.match(/(?<=question).*/gi)[0];
    const existingAnswer=answeredByUser.find(i => i.questionId==questionId);
    const answeredObj = existingAnswer ?? { questionId:questionId};

    answeredObj.answerChoosen=ev.target.id;
    markCorrect(answeredObj);
    if(!existingAnswer)
    {
        answeredByUser.push(answeredObj);
    }
    if(questions.length==answeredByUser.length)
    {
        enableSubmitButton(true);
    }
}

function markCorrect(answeredObj)
{
    const question = questions.find(i => i.id == answeredObj.questionId);
    if(question.correctAnswer == answeredObj.answerChoosen)
    {
        answeredObj.isCorrect =true;
    }
    else
    {
        answeredObj.isCorrect = false;
    }
}

function showSlide(slideNumber)
{
    quiz.innerHTML='';
    const slide=quizSlides[slideNumber];
    quiz.appendChild(slide);
    currentSlide = slideNumber;

    regulateNextPrevEnability();
    enableSubmitButton(false);
    if(quizSubmitted)
    {
        disableAnswers();
    }
}

function disableAnswers()
{
    const slide = quizSlides[currentSlide];
    const allTheAnswers = slide.querySelectorAll("input[type=radio");
    for(let i=0;i<allTheAnswers.length;i++)
    {
        const element = allTheAnswers[i];
        element.setAttribute('disabled','disabled');
    }
}

function initialize()
{
    currentSlide=0;
    buildQuiz();
    showSlide(0);
}
initialize();

function resetQuiz() {
    // Clear answeredByUser array
    answeredByUser.length = 0;
    // Reset the quiz submission state
    quizSubmitted = false;
    // Re-enable all answers
    quizSlides.forEach(slide => {
        const allTheAnswers = slide.querySelectorAll("input[type=radio]");
        allTheAnswers.forEach(answer => {
            answer.removeAttribute('disabled');
            answer.checked = false;
        })
    })
    // Reset current slide to the first slide
    showSlide(0);
    // Disable the submit button as no questions have been answered
    enableSubmitButton(false);
    // Disable the reset button until the quiz is submitted again
    resetButton.setAttribute('disabled', 'disabled');
    // Adjust the prev button state
    regulateNextPrevEnability();
    // Hide the results container
    resultsContainer.classList.remove('show-results');
    resultsContainer.innerText = '';
}
// Add event listeners
resetButton.addEventListener('click', resetQuiz);