const questions = [
  {
    question: "What is the difference between strong AI and weak AI?",
    options: ["Strong AI can perform general tasks like humans, Weak AI is task-specific", "Weak AI is conscious, Strong AI is not", "Strong AI uses rule-based systems, Weak AI does not", "Weak AI uses deep learning only"],
    correctAnswer: "Strong AI can perform general tasks like humans, Weak AI is task-specific"
  },
  {
    question: "Which algorithm is commonly used for training deep neural networks?",
    options: ["Gradient Descent", "Q-Learning", "Minimax", "Breadth-First Search"],
    correctAnswer: "Gradient Descent"
  },
  {
    question: "What is the vanishing gradient problem?",
    options: ["Gradients become zero and stop training", "Gradients become too large", "Gradients oscillate and diverge", "Gradients increase model accuracy"],
    correctAnswer: "Gradients become zero and stop training"
  },
  {
    question: "Which activation function helps mitigate the vanishing gradient problem?",
    options: ["ReLU", "Sigmoid", "Tanh", "Softmax"],
    correctAnswer: "ReLU"
  },
  {
    question: "What is the purpose of the softmax function?",
    options: ["Normalize outputs into probabilities", "Reduce overfitting", "Increase sparsity", "Prevent underfitting"],
    correctAnswer: "Normalize outputs into probabilities"
  },
  {
    question: "Which of the following is an unsupervised learning algorithm?",
    options: ["K-Means", "Linear Regression", "Decision Trees", "Support Vector Machines"],
    correctAnswer: "K-Means"
  },
  {
    question: "What is overfitting in machine learning?",
    options: ["Model performs well on training data but poorly on new data", "Model performs poorly on both training and test data", "Model trains faster", "Model accuracy improves over time"],
    correctAnswer: "Model performs well on training data but poorly on new data"
  },
  {
    question: "What does LSTM stand for in deep learning?",
    options: ["Long Short-Term Memory", "Layered Short-Time Model", "Least Square Temporal Memory", "Long Sequence Tensor Matrix"],
    correctAnswer: "Long Short-Term Memory"
  },
  {
    question: "Which AI technique is used to simulate human reasoning?",
    options: ["Expert Systems", "Clustering", "Regression", "Neural Networks"],
    correctAnswer: "Expert Systems"
  },
  {
    question: "Which of these is a key idea behind reinforcement learning?",
    options: ["Learning through rewards and penalties", "Learning from labeled data", "Learning via clustering", "Learning through statistical tests"],
    correctAnswer: "Learning through rewards and penalties"
  },
  {
    question: "What is the main goal of the Turing Test?",
    options: ["To test if a machine exhibits intelligent behavior", "To measure CPU performance", "To evaluate software bugs", "To simulate neural activity"],
    correctAnswer: "To test if a machine exhibits intelligent behavior"
  },
  {
    question: "Which method is used to prevent overfitting in neural networks?",
    options: ["Dropout", "Batch Normalization", "Convolution", "Gradient Clipping"],
    correctAnswer: "Dropout"
  },
  {
    question: "What does the term 'curse of dimensionality' refer to?",
    options: ["Increased complexity with higher features", "Data becoming simpler in high dimensions", "Fewer variables causing lower performance", "None of the above"],
    correctAnswer: "Increased complexity with higher features"
  },
  {
    question: "Which technique is used to reduce the number of features in a dataset?",
    options: ["Principal Component Analysis", "K-Nearest Neighbors", "Gradient Boosting", "Hyperparameter Tuning"],
    correctAnswer: "Principal Component Analysis"
  },
  {
    question: "Which language is most commonly used for AI development?",
    options: ["Python", "Java", "C++", "PHP"],
    correctAnswer: "Python"
  },
  {
    question: "In Natural Language Processing, what does 'tokenization' mean?",
    options: ["Splitting text into individual words or terms", "Encrypting text", "Training a model", "Compressing data"],
    correctAnswer: "Splitting text into individual words or terms"
  },
  {
    question: "Which neural network architecture is best suited for image data?",
    options: ["Convolutional Neural Networks", "Recurrent Neural Networks", "Feedforward Networks", "Radial Basis Networks"],
    correctAnswer: "Convolutional Neural Networks"
  },
  {
    question: "What is the primary objective of a generative adversarial network (GAN)?",
    options: ["Generate realistic synthetic data", "Classify images", "Reduce bias", "Cluster documents"],
    correctAnswer: "Generate realistic synthetic data"
  },
  {
    question: "Which algorithm is primarily used in game-playing AI like AlphaGo?",
    options: ["Monte Carlo Tree Search", "Naive Bayes", "Logistic Regression", "Hierarchical Clustering"],
    correctAnswer: "Monte Carlo Tree Search"
  },
  {
    question: "What does backpropagation do in a neural network?",
    options: ["Updates weights using error gradients", "Creates layers", "Randomizes predictions", "Measures model accuracy"],
    correctAnswer: "Updates weights using error gradients"
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
