const questions = [
  {
    question: "What is the time complexity of searching an element in a balanced Binary Search Tree (BST)?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)"
  },
  {
    question: "Which data structure is used for implementing recursion?",
    options: ["Queue", "Stack", "Linked List", "Heap"],
    correctAnswer: "Stack"
  },
  {
    question: "What is the worst-case time complexity of accessing an element in a hash table?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)"
  },
  {
    question: "Which data structure uses FIFO (First In First Out) principle?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    correctAnswer: "Queue"
  },
  {
    question: "What is the main advantage of a doubly linked list over a singly linked list?",
    options: [
      "Faster insertion at the head",
      "Efficient traversal in both directions",
      "Uses less memory",
      "Simpler implementation"
    ],
    correctAnswer: "Efficient traversal in both directions"
  },
  {
    question: "What is the space complexity of an adjacency matrix for representing a graph with n vertices?",
    options: ["O(n)", "O(n²)", "O(log n)", "O(n log n)"],
    correctAnswer: "O(n²)"
  },
  {
    question: "Which traversal technique is used in depth-first search (DFS)?",
    options: ["Level order", "Inorder", "Preorder", "Postorder"],
    correctAnswer: "Preorder"
  },
  {
    question: "What is the time complexity of enqueue and dequeue operations in a queue implemented using a linked list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(1)"
  },
  {
    question: "Which of the following data structures is most suitable for implementing undo functionality?",
    options: ["Queue", "Stack", "Linked List", "Graph"],
    correctAnswer: "Stack"
  },
  {
    question: "What is the worst-case time complexity of deleting a node from a singly linked list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)"
  },
  {
    question: "In which data structure does each node have at most two children?",
    options: ["Graph", "Tree", "Binary Tree", "Linked List"],
    correctAnswer: "Binary Tree"
  },
  {
    question: "What is the average-case time complexity for searching in a binary search tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)"
  },
  {
    question: "Which data structure is used for implementing priority queues?",
    options: ["Array", "Linked List", "Heap", "Stack"],
    correctAnswer: "Heap"
  },
  {
    question: "Which of these sorting algorithms is NOT comparison-based?",
    options: ["Quick Sort", "Counting Sort", "Merge Sort", "Heap Sort"],
    correctAnswer: "Counting Sort"
  },
  {
    question: "What is the time complexity of finding the height of a binary tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)"
  },
  {
    question: "What is the main property of a min-heap?",
    options: [
      "Parent node is smaller than its children",
      "Parent node is larger than its children",
      "All leaf nodes are at the same level",
      "No duplicate elements allowed"
    ],
    correctAnswer: "Parent node is smaller than its children"
  },
  {
    question: "Which algorithm technique is used in topological sorting?",
    options: ["Greedy", "Divide and Conquer", "Dynamic Programming", "DFS"],
    correctAnswer: "DFS"
  },
  {
    question: "Which data structure is used to detect a cycle in a directed graph?",
    options: ["Queue", "Stack", "DFS recursion stack", "Heap"],
    correctAnswer: "DFS recursion stack"
  },
  {
    question: "What is the time complexity of inserting an element at the beginning of a singly linked list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(1)"
  },
  {
    question: "Which data structure uses key-value pairs for storage?",
    options: ["Array", "Hash Table", "Linked List", "Stack"],
    correctAnswer: "Hash Table"
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