let questions = [
    '1. What does HTML stand for?',
    '2. Who is making the Web standards?',
    '3. Choose the correct HTML element for the largest heading:',
    '4. What is the correct HTML element for inserting a line break?',
    '5. Choose the correct HTML element to define important text'
];

let optionsA = [
    'Hyper Text Markup Language',
    'Google',
    '<h6>',
    '<lb>',
    '<important>',
];

let optionsB = [
    'Home Tool Markup Language',
    'Microsoft',
    '<h1>',
    '<br>',
    '<b>',
];

let optionsC = [
    'Hyperlink and Text Markup Language',
    'The World Wide Web Consortium',
    '<h4>',
    '<break>',
    '<strong>',
];

let scoreContainer = document.querySelector('#score-container');
let optionsContainer = document.querySelector('.options-container');
let tryAgain = document.querySelector('#try-again');
let next = document.querySelector('#next');
let start = document.querySelector('#start');
let answerA = document.querySelector('#answer-a');
let answerC = document.querySelector('#answer-c');
let optionsContainerA = document.querySelector('.option-a');
let optionsContainerB = document.querySelector('.option-b');
let optionsContainerC = document.querySelector('.option-c');
let clickedA = false;
let clickedB = false;
let clickedC = false;
let clickCounterA = 0;
let clickCounterB = 0;
let clickCounterC = 0;
let questCount = 0;
let scoreCount = 0;

scoreContainer.style.display = 'none';
optionsContainer.style.display = 'none';
tryAgain.style.display = 'none';
next.style.display = 'none';

start.addEventListener('click', function () {
    document.querySelector('#score-count').innerHTML = scoreCount;
    scoreContainer.style.display = 'block';
    optionsContainer.style.display = 'block';
    next.style.display = 'block';
    start.style.display = 'none';

    startQuiz();
});

next.addEventListener('click', function () {
    questCount++;

    startQuiz();
    returnDefault();
});

tryAgain.addEventListener('click', function() {
    tryAgain.style.display = 'none';
    start.style.display = 'block';
    document.querySelector('#question-container').innerHTML = 'HTML SKILL ASSESSMENT';
    questCount = 0;
    scoreCount = 0;
});

optionsContainerA.addEventListener('click', function () {
    
    if (clickedB == clickedC && clickCounterA < 1) {
        clickedA = true;
        clickCounterA += 1;
        if (questCount == 0) {
            optionsContainerA.style.backgroundColor = 'green';
            optionsContainerA.style.color = 'white';
            document.querySelector('#score-count').innerHTML = scoreCount++;
        }
        else {
            optionsContainerA.style.backgroundColor = 'red';
            optionsContainerA.style.color = 'white';
        }
    }    
});

optionsContainerB.addEventListener('click', function () {

    if (clickedA == clickedC && clickCounterB < 1) {
        clickedB = true;
        clickCounterB += 1;
        if (questCount == 2 || questCount == 3) {
            optionsContainerB.style.backgroundColor = 'green';
            optionsContainerB.style.color = 'white';
            document.querySelector('#score-count').innerHTML = scoreCount++;
        }
        else {
            optionsContainerB.style.backgroundColor = 'red';
            optionsContainerB.style.color = 'white';
        }
    }
});

optionsContainerC.addEventListener('click', function () {

    if (clickedB == clickedA && clickCounterC < 1) {
        clickedC = true;
        clickCounterC += 1;
        if (questCount == 1 || questCount == 4) {
            optionsContainerC.style.backgroundColor = 'green';
            optionsContainerC.style.color = 'white';
            document.querySelector('#score-count').innerHTML = scoreCount++;
        }
        else {
            optionsContainerC.style.backgroundColor = 'red';
            optionsContainerC.style.color = 'white';
        }
    }
});


function startQuiz() {
    if (questCount < questions.length) {
        document.querySelector('#question-container').innerHTML = questions[questCount];
        document.querySelector('#answer-a').innerHTML = optionsA[questCount];
        document.querySelector('#answer-b').innerHTML = optionsB[questCount];
        document.querySelector('#answer-c').innerHTML = optionsC[questCount];
    }
    else {
        scoreCount--;
        document.querySelector('#question-container').innerHTML = 'You scored '+ scoreCount + ' out of ' + questCount;
        optionsContainer.style.display = 'none';
        scoreContainer.style.display = 'none';
        tryAgain.style.display = 'block';
        next.style.display = 'none';
    }
}

function returnDefault() {
    optionsContainerA.style.backgroundColor = 'white';
    optionsContainerA.style.color = 'black';
    optionsContainerB.style.backgroundColor = 'white';
    optionsContainerB.style.color = 'black';
    optionsContainerC.style.backgroundColor = 'white';
    optionsContainerC.style.color = 'black';
    clickedA = false;
    clickedB = false;
    clickedC = false;
    clickCounterA = 0;
    clickCounterB = 0;
    clickCounterC = 0;
}