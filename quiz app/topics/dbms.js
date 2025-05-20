const questions = [
  {
    question: "What is the difference between a clustered and a non-clustered index?",
    options: [
      "Clustered index changes the physical order of the table, non-clustered does not",
      "Non-clustered index changes the physical order of the table, clustered does not",
      "Both change the physical order of the table",
      "Neither changes the physical order of the table"
    ],
    correctAnswer: "Clustered index changes the physical order of the table, non-clustered does not"
  },
  {
    question: "Which normal form eliminates transitive dependencies?",
    options: [
      "First Normal Form (1NF)",
      "Second Normal Form (2NF)",
      "Third Normal Form (3NF)",
      "Boyce-Codd Normal Form (BCNF)"
    ],
    correctAnswer: "Third Normal Form (3NF)"
  },
  {
    question: "What is the main purpose of the ACID properties in a transaction?",
    options: [
      "To ensure data is accurate and consistent",
      "To improve query speed",
      "To increase database storage",
      "To prevent unauthorized access"
    ],
    correctAnswer: "To ensure data is accurate and consistent"
  },
  {
    question: "In which situation would you use a deadlock detection algorithm?",
    options: [
      "When multiple transactions lock resources and none can proceed",
      "When database needs to backup data",
      "When optimizing query performance",
      "When normalizing tables"
    ],
    correctAnswer: "When multiple transactions lock resources and none can proceed"
  },
  {
    question: "Which SQL command is used to remove a table and its structure from the database?",
    options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
    correctAnswer: "DROP"
  },
  {
    question: "What is a foreign key in relational databases?",
    options: [
      "A key that uniquely identifies a record in the same table",
      "A key that is primary in a different table and refers to this table",
      "A key used to encrypt data",
      "A key that refers to the primary key of another table"
    ],
    correctAnswer: "A key that refers to the primary key of another table"
  },
  {
    question: "Which isolation level allows dirty reads?",
    options: [
      "Read Uncommitted",
      "Read Committed",
      "Repeatable Read",
      "Serializable"
    ],
    correctAnswer: "Read Uncommitted"
  },
  {
    question: "What is the difference between DELETE and TRUNCATE commands?",
    options: [
      "DELETE is slower and logs individual row deletions; TRUNCATE is faster and deallocates data pages",
      "TRUNCATE deletes rows one by one; DELETE deallocates data pages",
      "Both perform the same operation with different syntax",
      "DELETE cannot be rolled back; TRUNCATE can"
    ],
    correctAnswer: "DELETE is slower and logs individual row deletions; TRUNCATE is faster and deallocates data pages"
  },
  {
    question: "What does a checkpoint do in a database system?",
    options: [
      "Marks a point to which database can be recovered",
      "Backs up the entire database",
      "Deletes old transaction logs",
      "Optimizes query execution"
    ],
    correctAnswer: "Marks a point to which database can be recovered"
  },
  {
    question: "What is a view in a database?",
    options: [
      "A physical table storing data",
      "A virtual table representing the result of a query",
      "A backup of a table",
      "An index on a table"
    ],
    correctAnswer: "A virtual table representing the result of a query"
  },
  {
    question: "Which of the following best describes a deadlock?",
    options: [
      "Two transactions waiting indefinitely for each other’s locked resources",
      "A process that never starts",
      "A backup failure",
      "A query timeout"
    ],
    correctAnswer: "Two transactions waiting indefinitely for each other’s locked resources"
  },
  {
    question: "What is the difference between a primary key and a unique key?",
    options: [
      "Primary key cannot have nulls; unique key can have one null",
      "Unique key cannot have nulls; primary key can have nulls",
      "Primary key can have duplicates; unique key cannot",
      "There is no difference"
    ],
    correctAnswer: "Primary key cannot have nulls; unique key can have one null"
  },
  {
    question: "Which transaction property ensures that all parts of the transaction are completed or none at all?",
    options: [
      "Atomicity",
      "Consistency",
      "Isolation",
      "Durability"
    ],
    correctAnswer: "Atomicity"
  },
  {
    question: "What is the purpose of indexing in databases?",
    options: [
      "To speed up data retrieval",
      "To compress data",
      "To backup data",
      "To maintain data integrity"
    ],
    correctAnswer: "To speed up data retrieval"
  },
  {
    question: "What is a materialized view?",
    options: [
      "A virtual table from a query",
      "A stored physical copy of the query result",
      "An index on a table",
      "A backup of the database"
    ],
    correctAnswer: "A stored physical copy of the query result"
  },
  {
    question: "Which locking protocol ensures serializability?",
    options: [
      "Two-Phase Locking (2PL)",
      "Optimistic Locking",
      "Pessimistic Locking",
      "No Locking"
    ],
    correctAnswer: "Two-Phase Locking (2PL)"
  },
  {
    question: "What is a deadlock prevention technique?",
    options: [
      "Ordering resource requests",
      "Allowing transactions to wait indefinitely",
      "Rolling back transactions randomly",
      "Disabling locking"
    ],
    correctAnswer: "Ordering resource requests"
  },
  {
    question: "Which SQL command is used to add a new column to an existing table?",
    options: [
      "ALTER TABLE ADD COLUMN",
      "UPDATE TABLE ADD COLUMN",
      "INSERT INTO TABLE",
      "CREATE COLUMN"
    ],
    correctAnswer: "ALTER TABLE ADD COLUMN"
  },
  {
    question: "What is the difference between a full outer join and an inner join?",
    options: [
      "Full outer join returns all rows from both tables; inner join returns only matching rows",
      "Inner join returns all rows from both tables; full outer join returns only matching rows",
      "Both return the same result",
      "Full outer join returns unmatched rows only"
    ],
    correctAnswer: "Full outer join returns all rows from both tables; inner join returns only matching rows"
  },
  {
    question: "Which of these is NOT a type of NoSQL database?",
    options: [
      "Document-based",
      "Key-value",
      "Relational",
      "Graph"
    ],
    correctAnswer: "Relational"
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