const questions = [
  {
    question: "What is the output of `len([[]])`?",
    options: ["0", "1", "2", "None"],
    correctAnswer: "1"
  },
  {
    question: "What data type is the object below? `x = {}`",
    options: ["list", "dict", "set", "tuple"],
    correctAnswer: "dict"
  },
  {
    question: "Which of the following is immutable?",
    options: ["List", "Dictionary", "Set", "Tuple"],
    correctAnswer: "Tuple"
  },
  {
    question: "What keyword is used for defining a function?",
    options: ["function", "def", "define", "func"],
    correctAnswer: "def"
  },
  {
    question: "Which module in Python is used for regular expressions?",
    options: ["regex", "re", "pyregex", "match"],
    correctAnswer: "re"
  }
];


function loadQuiz() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";

  questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p>${q.question}</p>
      ${q.options.map(opt => `
        <label>
          <input type="radio" name="q${index}" value="${opt}"> ${opt}
        </label><br>`).join("")}
    `;
    quizContainer.appendChild(div);
  });
}

function submitQuiz() {
  let score = 0;
  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.correctAnswer) {
      score++;
    }
  });
  document.getElementById("score").innerText = `You scored ${score}/${questions.length}`;
}

window.onload = loadQuiz;
// Theme Toggle
themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  modeLabel.innerText = themeSwitch.checked ? "Dark Mode" : "Light Mode";
});