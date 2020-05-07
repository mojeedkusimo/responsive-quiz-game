 
 
 questions = [
    '1. What does HTML stand for?',
    '2. Who is making the Web standards?',
    '3. Choose the correct HTML element for the largest heading:',
    '4. What is the correct HTML element for inserting a line break?',
    '5. Choose the correct HTML element to define important text'
    ];

 optionsA = [
     "Hyper Text Markup Language", 
     "Google", 
     "&lt;h6&gt;", 
     "&lt;lb&gt;", 
     "&lt;important&gt;"
    ];

 optionsB = [
     "Home Tool Markup Language", 
     "Microsoft", 
     "&lt;h1>", 
     "&lt;br&gt;", 
     "&lt;b&gt;"
    ];

 optionsC = [
     "Hyperlink and Text Markup Language", 
     "The World Wide Web Consortium", 
     "&lt;h4&gt;", 
     "&lt;break&gt;", 
     "&lt;strong&gt;"
    ];

let scoreContainer = document.querySelector('#score-container'),
 optionsContainer = document.querySelector('.options-container'),
 questionScoreContainer = document.querySelector('#quest-n-score-container'),
 tryAgain = document.querySelector('#try-again'),
 next = document.querySelector('#next'),
 start = document.querySelector('#start'),
 optionsContainerA = document.querySelector('.option-a'),
 optionsContainerB = document.querySelector('.option-b'),
 optionsContainerC = document.querySelector('.option-c'),
 clickedA = false,
 clickedB = false,
 clickedC = false,
 clickCounterA = 0,
 clickCounterB = 0,
 clickCounterC = 0,
 questCount = 0,
 scoreCount = 0;

start.addEventListener('click', function () {
    document.querySelector('#score-count').innerHTML = scoreCount;
    scoreContainer.style.display = 'block';
    questionScoreContainer.style.display = 'block';
    optionsContainer.style.display = 'block';
    next.style.display = 'block';
    start.style.display = 'none';
    startQuiz(questCount);
});

next.addEventListener('click', function () {
    questCount++;
    startQuiz(questCount);
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
            document.querySelector('#score-count').innerHTML = scoreCount++;
            if (document.querySelector('#score-count').innerHTML == 0) {
                document.querySelector('#score-count').innerHTML = scoreCount++;
            }
            optionsContainerA.style.backgroundColor = 'green';
            optionsContainerA.style.color = 'white';
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
            if (document.querySelector('#score-count').innerHTML == 0) {
                document.querySelector('#score-count').innerHTML = scoreCount++;
            }
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
            if (document.querySelector('#score-count').innerHTML == 0) {
                document.querySelector('#score-count').innerHTML = scoreCount++;
            }
        }
        else {
            optionsContainerC.style.backgroundColor = 'red';
            optionsContainerC.style.color = 'white';
        }
    }
});


function startQuiz(questCount) {
    if (questCount < questions.length) {
        document.querySelector('#question-container').innerHTML = questions[questCount];
        document.querySelector('#answer-a').innerHTML = optionsA[questCount];
        document.querySelector('#answer-b').innerHTML = optionsB[questCount];
        document.querySelector('#answer-c').innerHTML = optionsC[questCount];
        document.querySelector('#quest-count').innerHTML = questCount + 1;
        document.querySelector('#total-quest').innerHTML = questions.length;
    }
    else {
        if (scoreCount == 0) {
            document.querySelector('#question-container').innerHTML = 'You scored '+ scoreCount + ' out of ' + questCount;
            questionScoreContainer.style.display = 'none';
            optionsContainer.style.display = 'none';
            scoreContainer.style.display = 'none';
            tryAgain.style.display = 'block';
            next.style.display = 'none';    
        }
        else {
            scoreCount--;
            document.querySelector('#question-container').innerHTML = 'You scored '+ scoreCount + ' out of ' + questCount;
            questionScoreContainer.style.display = 'none';
            optionsContainer.style.display = 'none';
            scoreContainer.style.display = 'none';
            tryAgain.style.display = 'block';
            next.style.display = 'none';
        }
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