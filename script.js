// Shuffle array (Fisher-Yates)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let questions = shuffle([...quizData]); // randomized questions
let currentQuestionIndex = 0;
let score = 0;
const quizEl = document.getElementById("quiz");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
let selectedAnswer = null;

function loadQuestion() {
  selectedAnswer = null;
  let q = questions[currentQuestionIndex];
  quizEl.innerHTML = `
    <div class="question">${currentQuestionIndex+1}. ${q.question}</div>
    <ul class="options">
      ${shuffle([...q.options]).map(opt => `<li>${opt}</li>`).join("")}
    </ul>
  `;

  document.querySelectorAll(".options li").forEach(li => {
    li.addEventListener("click", () => {
      document.querySelectorAll(".options li").forEach(el => el.style.background="#f0f0f0");
      li.style.background = "#cce5ff";
      selectedAnswer = li.innerText;
    });
  });
}

nextBtn.addEventListener("click", () => {
  if (!selectedAnswer) {
    alert("Please select an answer!");
    return;
  }
  if (selectedAnswer === questions[currentQuestionIndex].answer) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    quizEl.innerHTML = "";
    nextBtn.style.display = "none";
    resultEl.innerText = `Quiz Over! Your Score: ${score} / ${questions.length}`;
  }
});

loadQuestion();
