const questions = [
  {
    question: "What will `typeof null` return?",
    options: ["null", "object", "undefined", "string"],
    correctAnswer: "object"
  },
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["const", "let", "var", "define"],
    correctAnswer: "const"
  },
  {
    question: "Which function converts JSON to a JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "toObject()"],
    correctAnswer: "JSON.parse()"
  },
  {
    question: "What is the output of `[] + []` in JavaScript?",
    options: ["[]", "undefined", "NaN", '""'],
    correctAnswer: '""'
  },
  {
    question: "What is the result of `2 == '2'`?",
    options: ["true", "false", "undefined", "NaN"],
    correctAnswer: "true"
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