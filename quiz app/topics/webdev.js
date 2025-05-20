const questions = [
  {
    question: "Which HTTP method is idempotent?",
    options: ["POST", "GET", "PUT", "PATCH"],
    correctAnswer: "PUT"
  },
  {
    question: "What does the 'C' in CRUD stand for?",
    options: ["Connect", "Copy", "Create", "Compile"],
    correctAnswer: "Create"
  },
  {
    question: "Which HTML5 tag is used for embedding JavaScript?",
    options: ["<script>", "<js>", "<javascript>", "<embed>"],
    correctAnswer: "<script>"
  },
  {
    question: "Which CSS layout technique uses 'flex-direction'?",
    options: ["Grid", "Table", "Flexbox", "Float"],
    correctAnswer: "Flexbox"
  },
  {
    question: "What is the purpose of a CDN?",
    options: ["Compress files", "Increase bandwidth", "Serve static assets faster", "Encrypt data"],
    correctAnswer: "Serve static assets faster"
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