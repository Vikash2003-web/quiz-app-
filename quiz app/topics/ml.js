const questions = [
  {
    question: "What is overfitting in a machine learning model?",
    options: ["Underestimating the data", "High bias", "Fits training data too well", "Low variance"],
    correctAnswer: "Fits training data too well"
  },
  {
    question: "Which algorithm is used for regression tasks?",
    options: ["Logistic Regression", "K-Means", "Naive Bayes", "Linear Regression"],
    correctAnswer: "Linear Regression"
  },
  {
    question: "What is the purpose of cross-validation?",
    options: ["Speed up training", "Measure model performance", "Tune hyperparameters", "Improve dataset quality"],
    correctAnswer: "Measure model performance"
  },
  {
    question: "What is a confusion matrix used for?",
    options: ["Optimizing models", "Visualizing errors in classification", "Training data collection", "Detecting outliers"],
    correctAnswer: "Visualizing errors in classification"
  },
  {
    question: "Which one is a dimensionality reduction technique?",
    options: ["KNN", "PCA", "SVM", "Random Forest"],
    correctAnswer: "PCA"
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