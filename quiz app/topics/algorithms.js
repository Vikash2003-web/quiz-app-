const questions = [
  {
    question: "What is the worst-case time complexity of quicksort?",
    options: ["O(n)", "O(n log n)", "O(log n)", "O(n²)"],
    correctAnswer: "O(n²)"
  },
  {
    question: "Which algorithm technique is used in merge sort?",
    options: ["Greedy", "Divide and Conquer", "Dynamic Programming", "Backtracking"],
    correctAnswer: "Divide and Conquer"
  },
  {
    question: "What data structure is used in Breadth First Search (BFS)?",
    options: ["Stack", "Queue", "Priority Queue", "Heap"],
    correctAnswer: "Queue"
  },
  {
    question: "What is the time complexity of inserting an element in a balanced binary search tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)"
  },
  {
    question: "Which of the following algorithms finds the shortest path in a weighted graph?",
    options: ["DFS", "BFS", "Dijkstra's Algorithm", "Prim's Algorithm"],
    correctAnswer: "Dijkstra's Algorithm"
  },
  {
    question: "What technique does dynamic programming use to solve problems?",
    options: ["Divide and Conquer", "Memoization", "Greedy", "Backtracking"],
    correctAnswer: "Memoization"
  },
  {
    question: "What is the best case time complexity of bubble sort?",
    options: ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
    correctAnswer: "O(n)"
  },
  {
    question: "Which algorithm is used for finding the minimum spanning tree?",
    options: ["Dijkstra's Algorithm", "Kruskal's Algorithm", "Bellman-Ford Algorithm", "Floyd-Warshall Algorithm"],
    correctAnswer: "Kruskal's Algorithm"
  },
  {
    question: "In which algorithm are subproblems overlapping?",
    options: ["Divide and Conquer", "Greedy", "Dynamic Programming", "Backtracking"],
    correctAnswer: "Dynamic Programming"
  },
  {
    question: "What is the space complexity of merge sort?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)"
  },
  {
    question: "Which algorithm is used to detect cycles in a graph?",
    options: ["Topological Sort", "Union-Find", "DFS", "Both DFS and Union-Find"],
    correctAnswer: "Both DFS and Union-Find"
  },
  {
    question: "What is the time complexity of accessing an element in a hash table?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(1)"
  },
  {
    question: "Which sorting algorithm is stable?",
    options: ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"],
    correctAnswer: "Merge Sort"
  },
  {
    question: "What is the purpose of the greedy algorithm?",
    options: ["To find an optimal solution by choosing local optimums", "To explore all possibilities", "To divide the problem", "To memorize results"],
    correctAnswer: "To find an optimal solution by choosing local optimums"
  },
  {
    question: "Which algorithm is used in shortest path for graphs with negative weights?",
    options: ["Dijkstra's Algorithm", "Bellman-Ford Algorithm", "Floyd-Warshall Algorithm", "Prim's Algorithm"],
    correctAnswer: "Bellman-Ford Algorithm"
  },
  {
    question: "What data structure is used in Depth First Search (DFS)?",
    options: ["Queue", "Stack", "Heap", "Priority Queue"],
    correctAnswer: "Stack"
  },
  {
    question: "What is the best case time complexity of insertion sort?",
    options: ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
    correctAnswer: "O(n)"
  },
  {
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correctAnswer: "O(log n)"
  },
  {
    question: "Which algorithm technique uses a state transition table or matrix?",
    options: ["Backtracking", "Dynamic Programming", "Greedy", "Divide and Conquer"],
    correctAnswer: "Dynamic Programming"
  },
  {
    question: "What is the average case time complexity of quicksort?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
    correctAnswer: "O(n log n)"
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