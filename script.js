// Fisher–Yates shuffle
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function normalize(s) {
  return String(s).trim();
}

let questions = shuffle(quizData); // randomize questions each load
let current = 0;
let score = 0;

const quizEl = document.getElementById("quiz");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

let selectedAnswer = null; // the selected option's text (exact value from data)

function renderQuestion() {
  selectedAnswer = null;

  const q = questions[current];
  const letters = ["a", "b", "c", "d", "e", "f"]; // supports >4 options
  const options = shuffle(q.options);

  // Build option buttons. Use data-value with encodeURIComponent to be safe.
  const optionsHtml = options
    .map((opt, i) => {
      const encoded = encodeURIComponent(opt);
      return `
        <button type="button" class="option-btn" data-value="${encoded}">
          <span class="option-letter">${letters[i]})</span>
          <span class="option-text">${opt}</span>
        </button>
      `;
    })
    .join("");

  quizEl.innerHTML = `
    <div class="question">${current + 1}. ${q.question}</div>
    <div class="options">${optionsHtml}</div>
  `;
}

// Event delegation: handles clicks for current (and future) option buttons
quizEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".option-btn");
  if (!btn) return;

  // Visual selection
  document.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");

  // Store selected value
  selectedAnswer = decodeURIComponent(btn.dataset.value);
});

nextBtn.addEventListener("click", () => {
  if (!selectedAnswer) {
    alert("Please select an answer!");
    return;
  }

  const correct = questions[current].answer;
  if (normalize(selectedAnswer) === normalize(correct)) score++;

  current++;

  if (current < questions.length) {
    renderQuestion();
  } else {
    quizEl.innerHTML = "";
    nextBtn.style.display = "none";
    resultEl.textContent = `Quiz Over! Your Score: ${score} / ${questions.length}`;
  }
});

// Kick off
renderQuestion();
