const questions = [
  {
    question: "Which keyword is used to inherit a class in Java?",
    options: ["this", "super", "extends", "implements"],
    answer: "extends",
  },
  {
    question: "Which concept of OOP involves hiding internal details?",
    options: ["Abstraction", "Inheritance", "Polymorphism", "Encapsulation"],
    answer: "Abstraction",
  },
  {
    question: "Which of these is not a pillar of OOP?",
    options: ["Encapsulation", "Abstraction", "Compilation", "Polymorphism"],
    answer: "Compilation",
  },
  {
    question:
      "Which access modifier makes a member visible only within its class?",
    options: ["public", "protected", "private", "default"],
    answer: "private",
  },
  {
    question: "What is method overloading?",
    options: [
      "Same method name with different return type",
      "Same method name with different parameters",
      "Multiple classes with same method",
      "Inheritance of method",
    ],
    answer: "Same method name with different parameters",
  },
  {
    question: "Which keyword is used to call the parent class constructor?",
    options: ["this", "parent", "base", "super"],
    answer: "super",
  },
  {
    question: "What does JVM stand for?",
    options: [
      "Java Virtual Method",
      "Java Very-fast Machine",
      "Java Virtual Machine",
      "Joint Virtual Model",
    ],
    answer: "Java Virtual Machine",
  },
  {
    question:
      "Which interface must a class implement to be runnable in a thread?",
    options: ["Serializable", "Comparable", "Runnable", "Threadable"],
    answer: "Runnable",
  },
  {
    question: "Which of the following is a runtime polymorphism example?",
    options: [
      "Method Overloading",
      "Method Overriding",
      "Constructor Overloading",
      "Operator Overloading",
    ],
    answer: "Method Overriding",
  },
  {
    question: "What is the base class of all classes in Java?",
    options: ["Base", "Object", "Main", "Super"],
    answer: "Object",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const currentQ = document.getElementById("current");
const totalQ = document.getElementById("total");

totalQ.textContent = questions.length;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultEl.classList.add("hide");
  nextBtn.style.display = "inline-block";
  document.querySelector(".question").style.display = "block";
  document.querySelector(".options").style.display = "flex";
  loadQuestion();
}

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  currentQ.textContent = currentQuestionIndex + 1;
  optionsEl.innerHTML = "";

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("div");
    button.classList.add("option");
    button.textContent = option;
    button.onclick = () => selectAnswer(button, currentQuestion.answer);
    optionsEl.appendChild(button);
  });
}

function selectAnswer(selectedOption, correctAnswer) {
  const allOptions = document.querySelectorAll(".option");
  allOptions.forEach((option) => {
    option.classList.add(
      option.textContent === correctAnswer ? "correct" : "wrong"
    );
    option.style.pointerEvents = "none";
  });

  if (selectedOption.textContent === correctAnswer) {
    score++;
  }
}

nextBtn.onclick = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  questionEl.style.display = "none";
  optionsEl.style.display = "none";
  nextBtn.style.display = "none";
  resultEl.classList.remove("hide");
  scoreEl.textContent = `${score} / ${questions.length}`;
}

startQuiz();
