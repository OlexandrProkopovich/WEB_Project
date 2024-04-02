// JSON data with questions and answers
var quizData = {
    "questions": [
      {
        "question": "Що таке HTML?",
        "answers": ["Мова розмітки гіпертекстових документів", "Мова програмування", "Операційна система", "База даних"],
        "correct_answer": "Мова розмітки гіпертекстових документів"
      },
      {
        "question": "Що таке CSS?",
        "answers": ["Мова розмітки гіпертекстових документів", "Мова програмування", "Мова стилів", "База даних"],
        "correct_answer": "Мова стилів"
      },
      {
        "question": "Що таке JavaScript?",
        "answers": ["Мова розмітки гіпертекстових документів", "Мова програмування", "Операційна система", "База даних"],
        "correct_answer": "Мова програмування"
      },
      {
        "question": "Що таке змінна (variable) в програмуванні?",
        "answers": ["Значення, яке може змінюватися", "Функція", "Масив", "Клас"],
        "correct_answer": "Значення, яке може змінюватися"
      },
      {
        "question": "Що таке цикл у програмуванні?",
        "answers": ["Конструкція, що дозволяє виконувати одну або кілька інструкцій декілька разів", "Функція", "Масив", "Клас"],
        "correct_answer": "Конструкція, що дозволяє виконувати одну або кілька інструкцій декілька разів"
      }
    ]
  };

var currentQuestion = 0;
var correctAnswers = 0;

// Function to display current question
function showQuestion() {
    var questionContainer = document.getElementById("question");
    var answersContainer = document.getElementById("answers");
    
    questionContainer.textContent = quizData.questions[currentQuestion].question;
    answersContainer.innerHTML = "";

    quizData.questions[currentQuestion].answers.forEach(function(answer, index) {
        var li = document.createElement("li");
        li.textContent = answer;
        li.dataset.index = index;
        answersContainer.appendChild(li);
    });
}

// Function to check answers
function checkAnswer(selectedIndex) {
    var correctAnswer = quizData.questions[currentQuestion].correct_answer;
    var selectedAnswer = quizData.questions[currentQuestion].answers[selectedIndex];

    if (selectedAnswer === correctAnswer) {
        correctAnswers++;
    }

    currentQuestion++;
    if (currentQuestion < quizData.questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Function to show quiz result
function showResult() {
    var resultContainer = document.getElementById("result-container");
    var resultText = document.getElementById("result");

    resultText.textContent = "You scored " + correctAnswers + " out of " + quizData.questions.length + ".";
    resultContainer.style.display = "block";
}

// Event listener for click on submit button
document.getElementById("submit").addEventListener("click", function() {
    var selected = document.querySelector("#answers li.selected");
    if (selected) {
        var selectedIndex = parseInt(selected.dataset.index);
        checkAnswer(selectedIndex);
    }
});

// Event delegation for click on answer options
document.getElementById("answers").addEventListener("click", function(event) {
    var target = event.target;
    if (target.tagName === "LI") {
        var selected = document.querySelector("#answers li.selected");
        if (selected) {
            selected.classList.remove("selected");
        }
        target.classList.add("selected");
    }
});

// Display first question when the page loads
showQuestion();
