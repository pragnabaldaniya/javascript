console.log("Quize....");

let allQuestions = [
    {
        question: "Which of the following is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "All of above"],
        answer: 3
    },
    {
        question: "What will typeof null return?",
        options: ["null", "object", "undefiend", "number"],
        answer: 1
    },
    {
        question: "Which symbol is used for strict equality?",
        options: ["=", "==", "===", "!="],
        answer: 2
    },
    {
        question: "Which method converts a JSON string into a JavaScript object?",
        options: ["JSON.stringify()", "JSON.parse()", "JSON.convet()", "JSON.toObject()"],
        answer: 1
    },
    {
        question: "Which keyword is used to define a function?",
        options: ["function", "def", "fun", "method"],
        answer: 0
    },
    {
        question: "Which of the following is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "All of above"],
        answer: 3
    },
    {
        question: "What will typeof null return?",
        options: ["null", "object", "undefiend", "number"],
        answer: 1
    },
    {
        question: "Which symbol is used for strict equality?",
        options: ["=", "==", "===", "!="],
        answer: 2
    },
    {
        question: "Which method converts a JSON string into a JavaScript object?",
        options: ["JSON.stringify()", "JSON.parse()", "JSON.convet()", "JSON.toObject()"],
        answer: 1
    },
    {
        question: "Which keyword is used to define a function?",
        options: ["function", "def", "fun", "method"],
        answer: 0
    }
];




const question = document.getElementById('question');
const index = document.getElementById('index');
const options = document.querySelectorAll('span');
const nextBtn = document.getElementById('nextBtn');
const timer = document.getElementById('timer');

const allAnswer = document.querySelectorAll("input[name='answer']");

let second = 60;
let timerInterval = null;

let currentIndex = 0
let score = 0;

function loadQuestion() {

    allAnswer.forEach((radio) => {
        radio.checked = false;
    });

    // 5 >= 5
    if (currentIndex >= allQuestions.length) {
        clearInterval(timerInterval);
        alert("Quize Submitted...")
        console.log(`${score} / ${allQuestions.length}`);

        document.querySelector('.quiz-container').innerHTML = `<h2>Quizee Submitted... 👍🎉</h2>
        <p>Score : ${score} / ${allQuestions.length}</p>
        <button class='restart'>Restart</button>`;

        return;
    }

    startTimer();

    index.textContent = currentIndex + 1;

    const currentQuestion = allQuestions[currentIndex];

    question.textContent = currentQuestion.question;

    options.forEach((span, index) => {
        span.textContent = currentQuestion.options[index];
    })

    if (currentIndex === allQuestions.length - 1) {
        nextBtn.textContent = "Submit";
        nextBtn.style.backgroundColor = "green";
    }
}

nextBtn.addEventListener('click', nextQuestion);

function startTimer() {
    timerInterval = setInterval(() => {
        second--;

        if (second == 0) {
            nextQuestion();
        }

        let ss = second < 10 ? `0${second}` : second;
        timer.textContent = `00:${ss}`;
    }, 1000);
}

function nextQuestion() {

    scoreCount();

    // Next Logic
    clearInterval(timerInterval);
    second = 60;
    currentIndex++;
    loadQuestion();
}

function scoreCount() {
    // Score Logic
    const selectedOption = document.querySelector("input[name='answer']:checked");

    if (selectedOption) {
        // const allOptions = document.querySelectorAll("input[name='answer']");
        const answerIndex = [...allAnswer].indexOf(selectedOption);

        if (answerIndex === allQuestions[currentIndex].answer) {
            score++;
        }
    }
}

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("restart")) {
        location.reload();   // Page reload = quiz restart
    }
});

loadQuestion();