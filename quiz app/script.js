const questions = [
    {
        question: "Which data structure uses LIFO (Last In First Out)?",
        answer: [
            { Text: "Queue", correct: false },
            { Text: "Stack", correct: true },
            { Text: "Array", correct: false },
            { Text: "Linked List", correct: false }
        ]
    },
    {
        question: "What is the time complexity of binary search?",
        answer: [
            { Text: "O(n)", correct: false },
            { Text: "O(log n)", correct: true },
            { Text: "O(n log n)", correct: false },
            { Text: "O(1)", correct: false }
        ]
    },
    {
        question: "Which of these is not a linear data structure?",
        answer: [
            { Text: "Array", correct: false },
            { Text: "Linked List", correct: false },
            { Text: "Tree", correct: true },
            { Text: "Queue", correct: false }
        ]
    },
    {
        question: "Which sorting algorithm is best for nearly sorted data?",
        answer: [
            { Text: "Quick Sort", correct: false },
            { Text: "Merge Sort", correct: false },
            { Text: "Insertion Sort", correct: true },
            { Text: "Bubble Sort", correct: false }
        ]
    },
    {
        question: "What is the worst-case time complexity of Quick Sort?",
        answer: [
            { Text: "O(n)", correct: false },
            { Text: "O(log n)", correct: false },
            { Text: "O(n^2)", correct: true },
            { Text: "O(n log n)", correct: false }
        ]
    },
    {
        question: "Which traversal gives nodes in non-decreasing order in a BST?",
        answer: [
            { Text: "Preorder", correct: false },
            { Text: "Postorder", correct: false },
            { Text: "Inorder", correct: true },
            { Text: "Level order", correct: false }
        ]
    },
    {
        question: "Which data structure is used for BFS in a graph?",
        answer: [
            { Text: "Stack", correct: false },
            { Text: "Queue", correct: true },
            { Text: "Array", correct: false },
            { Text: "Linked List", correct: false }
        ]
    },
    {
        question: "Which algorithm is used to find the shortest path in a graph?",
        answer: [
            { Text: "Kruskal's algorithm", correct: false },
            { Text: "Prim's algorithm", correct: false },
            { Text: "Dijkstra's algorithm", correct: true },
            { Text: "DFS", correct: false }
        ]
    },
    {
        question: "A complete binary tree has how many children at most per node?",
        answer: [
            { Text: "3", correct: false },
            { Text: "2", correct: true },
            { Text: "1", correct: false },
            { Text: "No limit", correct: false }
        ]
    },
    {
        question: "Which of the following is a divide and conquer algorithm?",
        answer: [
            { Text: "Bubble Sort", correct: false },
            { Text: "Merge Sort", correct: true },
            { Text: "Selection Sort", correct: false },
            { Text: "Linear Search", correct: false }
        ]
    },
    {
        question: "Which data structure uses FIFO (First In First Out)?",
        answer: [
            { Text: "Stack", correct: false },
            { Text: "Queue", correct: true },
            { Text: "Tree", correct: false },
            { Text: "Graph", correct: false }
        ]
    },
    {
        question: "Which algorithm is used to detect cycles in a graph?",
        answer: [
            { Text: "Dijkstra's", correct: false },
            { Text: "Bellman-Ford", correct: false },
            { Text: "DFS", correct: true },
            { Text: "Prim's", correct: false }
        ]
    },
    {
        question: "Which of the following data structures can be used to implement a priority queue?",
        answer: [
            { Text: "Binary Heap", correct: true },
            { Text: "Stack", correct: false },
            { Text: "Array", correct: false },
            { Text: "Linked List", correct: false }
        ]
    },
    {
        question: "Which traversal method is used in Depth First Search (DFS)?",
        answer: [
            { Text: "Level order", correct: false },
            { Text: "Inorder", correct: false },
            { Text: "Preorder", correct: false },
            { Text: "Recursive/Stack-based", correct: true }
        ]
    },
    {
        question: "Which structure is ideal for undo operations?",
        answer: [
            { Text: "Queue", correct: false },
            { Text: "Stack", correct: true },
            { Text: "Tree", correct: false },
            { Text: "Graph", correct: false }
        ]
    }
];

const question = [/* your existing questions array here */];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const timerElement = document.getElementById("timer");
const resultElement = document.getElementById("result");
const quizElement = document.querySelector(".quiz");
const playAgainButton = document.getElementById("play-again");
const themeSwitch = document.getElementById("themeSwitch");
const modeLabel = document.getElementById("mode-label");
const sidebar = document.getElementById("sidebar");
const toggleSidebarBtn = document.getElementById("toggleSidebar");

// Tick sound
const tickSound = new Audio("data:audio/wav;base64,UklGRlgAAABXQVZFZm10IBAAAAABAAEAIlYAAESsAAACABAAZGF0YaAAAAA=");
tickSound.volume = 0.3;

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;
let soundUnlocked = false;

// Unlock sound for autoplay
function unlockSound() {
  tickSound.play().then(() => {
    tickSound.pause();
    tickSound.currentTime = 0;
    soundUnlocked = true;
  }).catch(() => {});
  window.removeEventListener('click', unlockSound);
  window.removeEventListener('keydown', unlockSound);
}
window.addEventListener('click', unlockSound);
window.addEventListener('keydown', unlockSound);

// Start Quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerText = "Next";
  resultElement.style.display = "none";
  quizElement.style.display = "block";
  playAgainButton.style.display = "none";
  showQuestion();
}

// Show Question
function showQuestion() {
  resetState();

  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answer.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.Text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = "true";
    }
    button.addEventListener("click", selectAnswer);
    answerButton.appendChild(button);
  });

  startTimer();
}

// Reset previous state
function resetState() {
  clearStatusClass(document.body);
  nextButton.style.display = "none";
  answerButton.innerHTML = "";
  clearInterval(timer);
  timeLeft = 10;
  timerElement.innerText = `Time Left: ${timeLeft}s`;
}

// Start Timer
function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerElement.innerText = `Time Left: ${timeLeft}s`;
    if (soundUnlocked) tickSound.play();

    if (timeLeft <= 0) {
      clearInterval(timer);
      Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
          button.classList.add("correct");
        }
        button.disabled = true;
      });
      nextButton.style.display = "inline-block";
    }
  }, 1000);
}

// Select Answer
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === "true";

  if (correct) score++;

  Array.from(answerButton.children).forEach(button => {
    setStatusClass(button, button.dataset.correct === "true");
    button.disabled = true;
  });

  clearInterval(timer);
  nextButton.style.display = "inline-block";
}

// Set status
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("incorrect");
  }
}

// Clear status
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("incorrect");
}

// Show Score
function showScore() {
  quizElement.style.display = "none";
  resultElement.style.display = "block";
  resultElement.innerHTML = `<h2>Your Score: ${score}/${questions.length}</h2>`;
  playAgainButton.style.display = "inline-block";
}

// Next Question
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

// Play Again
playAgainButton.addEventListener("click", () => {
  startQuiz();
});

// Theme Toggle
themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  modeLabel.innerText = themeSwitch.checked ? "Dark Mode" : "Light Mode";

});

// Sidebar Toggle
toggleSidebarBtn.addEventListener("click", () => {
  sidebar.style.left = sidebar.style.left === "0px" ? "-220px" : "0px";
});
function getShareMessage() {
    const score = localStorage.getItem("latestScore") || 0; // Or wherever your score is stored
    const name = localStorage.getItem("username") || "a quizzer";
    const message = `${name} scored ${score}/10 in the DSA Quiz Challenge 2025! 💪 Think you can beat that? Try now!`;
    const url = "file:///C:/Users/vgupt/quiz%20app/index.html"; // Replace with your app's URL
    return { message, url };
}

function shareOnWhatsApp() {
    const { message, url } = getShareMessage();
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message + ' ' + url)}`;
    window.open(whatsappUrl, '_blank');
}

function shareOnTwitter() {
    const { message, url } = getShareMessage();
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
}

function copyShareLink() {
    const { message, url } = getShareMessage();
    const shareText = `${message} ${url}`;
    navigator.clipboard.writeText(shareText).then(() => {
        document.getElementById("copy-msg").textContent = "Link copied to clipboard!";
    }).catch(() => {
        document.getElementById("copy-msg").textContent = "Failed to copy link.";
    });
}
localStorage.setItem("latestScore", finalScore); // finalScore = total marks
localStorage.setItem("username", userName); // from the welcome input

function showShareButtons(score) {
  document.getElementById("share-container").style.display = "block";

  // Optional: Set dynamic share text
  window.shareText = `I scored ${score} in the DSA Quiz Challenge 2025! Try it now!`;
}

function finishQuiz() {
  // Your existing code to end the quiz and show score
  const score = calculateScore(); // Replace with your method 
  }
