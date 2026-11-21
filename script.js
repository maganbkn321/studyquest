
/* ==================================================
   STUDYQUEST - MAIN APPLICATION ENGINE
   Version 1.1
   Added: All Topics Practice
================================================== */

"use strict";

/* ---------- APPLICATION STATE ---------- */

const App = {
  currentExam: null,
  currentSubject: null,
  currentTopic: null,
  questions: [],
  currentIndex: 0,
  answers: {},
  timer: null,
  timeLeft: 0,
  duration: 0,
  negativeMarking: 0,
  lastResult: null
};

/* ---------- LOCAL STORAGE ---------- */

const STORAGE_KEY = "studyquest_user_data";

function getUserData() {
  const defaultData = {
    xp: 0,
    streak: 0,
    lastStudyDate: null,
    dailyXP: 0,
    dailyDate: null,
    tests: 0,
    totalCorrect: 0
  };

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? { ...defaultData, ...JSON.parse(saved) } : defaultData;
  } catch (error) {
    console.error("User data loading error:", error);
    return defaultData;
  }
}

let userData = getUserData();

function saveUserData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
  } catch (error) {
    console.error("Could not save user data:", error);
  }
}

/* ---------- DATE HELPERS ---------- */

function getToday() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getYesterday() {
  const date = new Date();
  date.setDate(date.getDate() - 1);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

/* ---------- SCREEN MANAGEMENT ---------- */

const SCREEN_IDS = [
  "homeScreen",
  "examScreen",
  "subjectScreen",
  "topicScreen",
  "settingsScreen",
  "quizScreen",
  "resultScreen",
  "profileScreen"
];

function showScreen(screenId) {
  SCREEN_IDS.forEach(id => {
    const screen = document.getElementById(id);

    if (screen) {
      screen.classList.add("hidden");
      screen.classList.remove("active");
    }
  });

  const target = document.getElementById(screenId);

  if (target) {
    target.classList.remove("hidden");
    target.classList.add("active");
  }

  updateNavigation(screenId);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function updateNavigation(screenId) {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach(item => item.classList.remove("active"));

  if (screenId === "homeScreen") {
    navItems[0]?.classList.add("active");
  }

  if ([
    "examScreen",
    "subjectScreen",
    "topicScreen",
    "settingsScreen",
    "quizScreen"
  ].includes(screenId)) {
    navItems[1]?.classList.add("active");
  }

  if (screenId === "profileScreen") {
    navItems[2]?.classList.add("active");
  }
}

/* ---------- HOME ---------- */

function goHome() {
  if (App.timer) {
    clearInterval(App.timer);
    App.timer = null;
  }

  updateDashboard();
  showScreen("homeScreen");
}

function updateDashboard() {
  const today = getToday();

  if (userData.dailyDate !== today) {
    userData.dailyXP = 0;
    userData.dailyDate = today;
    saveUserData();
  }

  setText("totalXP", userData.xp);
  setText("streakCount", userData.streak + " Days");
  setText("goalText", Math.min(userData.dailyXP, 20) + " / 20 XP");

  const progress = Math.min((userData.dailyXP / 20) * 100, 100);
  setWidth("goalProgress", progress + "%");

  setText("profileXP", userData.xp);
  setText("profileStreak", userData.streak);
  setText("profileTests", userData.tests);
}

/* ---------- EXAM SELECTION ---------- */

function showExams() {
  const container = document.getElementById("examList");
  if (!container) return;

  container.innerHTML = "";

  STUDY_DATA.exams.forEach(exam => {
    const button = document.createElement("button");

    button.innerHTML = `
      <span>
        <strong>${exam.icon} ${escapeHTML(exam.name)}</strong>
        <br>
        <small>${escapeHTML(exam.subtitle)}</small>
      </span>
      <span>→</span>
    `;

    button.addEventListener("click", () => selectExam(exam.name));
    container.appendChild(button);
  });

  showScreen("examScreen");
}

function selectExam(examName) {
  const exam = STUDY_DATA.exams.find(
    item => item.name === examName || item.id === examName
  );

  if (!exam) {
    alert("Exam not found.");
    return;
  }

  App.currentExam = exam;
  showSubjects();
}

/* ---------- SUBJECT SELECTION ---------- */

function showSubjects() {
  if (!App.currentExam) {
    showExams();
    return;
  }

  const container = document.getElementById("subjectList");
  if (!container) return;

  setText("selectedExamName", App.currentExam.name);
  container.innerHTML = "";

  App.currentExam.subjects.forEach(subjectId => {
    const subject = STUDY_DATA.subjects[subjectId];
    if (!subject) return;

    const button = document.createElement("button");

    button.innerHTML = `
      <span>
        <strong>${subject.icon} ${escapeHTML(subject.name)}</strong>
        <br>
        <small>${subject.topics.length} Topics</small>
      </span>
      <span>→</span>
    `;

    button.addEventListener("click", () => selectSubject(subjectId));
    container.appendChild(button);
  });

  showScreen("subjectScreen");
}

function selectSubject(subjectId) {
  const subject = STUDY_DATA.subjects[subjectId];
  if (!subject) return;

  App.currentSubject = subjectId;
  showTopics();
}

/* ---------- TOPIC SELECTION ---------- */

function showTopics() {
  if (!App.currentSubject) {
    showSubjects();
    return;
  }

  const subject = STUDY_DATA.subjects[App.currentSubject];
  if (!subject) return;

  const container = document.getElementById("topicList");
  if (!container) return;

  setText("selectedSubjectName", subject.name);
  container.innerHTML = "";

  // ALL TOPICS PRACTICE OPTION
  const allQuestions = QUESTIONS.filter(
    q => q.subject === App.currentSubject
  );

  if (allQuestions.length > 0) {
    const allButton = document.createElement("button");

    allButton.innerHTML = `
      <span>
        <strong>📚 सभी Topics से अभ्यास</strong>
        <br>
        <small>${allQuestions.length} Questions Available</small>
      </span>
      <span>→</span>
    `;

    allButton.addEventListener("click", () => {
      selectTopic("all");
    });

    container.appendChild(allButton);
  }

  // INDIVIDUAL TOPICS
  subject.topics.forEach(topic => {
    const button = document.createElement("button");

    const available = QUESTIONS.filter(q =>
      q.subject === App.currentSubject &&
      q.topic === topic
    ).length;

    button.innerHTML = `
      <span>
        <strong>📖 ${escapeHTML(topic)}</strong>
        <br>
        <small>${available} Questions Available</small>
      </span>
      <span>→</span>
    `;

    button.addEventListener("click", () => selectTopic(topic));
    container.appendChild(button);
  });

  showScreen("topicScreen");
}

function selectTopic(topic) {
  App.currentTopic = topic;

  setText(
    "settingsTopic",
    topic === "all" ? "सभी Topics" : topic
  );

  const available = getAvailableQuestions();
  const countSelect = document.getElementById("questionCount");

  if (countSelect) {
    Array.from(countSelect.options).forEach(option => {
      option.disabled = Number(option.value) > available.length;
    });

    const firstAvailable = Array.from(countSelect.options).find(
      option => !option.disabled && Number(option.value) > 0
    );

    if (firstAvailable) {
      countSelect.value = firstAvailable.value;
    }
  }

  if (available.length === 0) {
    alert("इस Topic के लिए अभी MCQs उपलब्ध नहीं हैं।");
    return;
  }

  showScreen("settingsScreen");
}

/* ---------- QUESTION FILTERING ---------- */

function getAvailableQuestions() {
  return QUESTIONS.filter(question => {
    const sameSubject = question.subject === App.currentSubject;

    if (App.currentTopic === "all") {
      return sameSubject;
    }

    return sameSubject && question.topic === App.currentTopic;
  });
}

function shuffleArray(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

/* ---------- START QUIZ ---------- */

function beginTest() {
  const available = getAvailableQuestions();

  if (available.length === 0) {
    alert("इस Topic में कोई Question नहीं है।");
    return;
  }

  const questionCountElement = document.getElementById("questionCount");
  const durationElement = document.getElementById("testDuration");
  const negativeElement = document.getElementById("negativeMarking");

  if (!questionCountElement || !durationElement || !negativeElement) {
    alert("Test Settings में कोई जरूरी विकल्प नहीं मिला।");
    return;
  }

  const requestedCount = Number(questionCountElement.value);
  const minutes = Number(durationElement.value);

  App.negativeMarking = Number(negativeElement.value);

  if (
    !Number.isFinite(requestedCount) ||
    requestedCount <= 0 ||
    !Number.isFinite(minutes) ||
    minutes <= 0
  ) {
    alert("कृपया सही Test Settings चुनें।");
    return;
  }

  App.questions = shuffleArray(available).slice(0, requestedCount);

  App.currentIndex = 0;
  App.answers = {};

  App.duration = minutes * 60;
  App.timeLeft = App.duration;
  App.lastResult = null;

  startTimer();
  renderQuestion();
  showScreen("quizScreen");
}

/* ---------- TIMER ---------- */

function startTimer() {
  if (App.timer) clearInterval(App.timer);

  updateTimerDisplay();

  App.timer = setInterval(() => {
    App.timeLeft--;
    updateTimerDisplay();

    if (App.timeLeft <= 0) {
      clearInterval(App.timer);
      App.timer = null;

      alert("समय समाप्त! आपका Test Submit हो रहा है।");
      submitTest(true);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(App.timeLeft / 60);
  const seconds = App.timeLeft % 60;

  const display =
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0");

  setText("timer", display);
}

/* ---------- RENDER QUESTION ---------- */

function renderQuestion() {
  const question = App.questions[App.currentIndex];
  if (!question) return;

  setText(
    "questionNumber",
    `Question ${App.currentIndex + 1} / ${App.questions.length}`
  );

  setText(
    "answeredCount",
    Object.keys(App.answers).length + " Answered"
  );

  setText("questionText", question.question);

  const subject = STUDY_DATA.subjects[question.subject];

  setText(
    "quizSubject",
    subject ? subject.name : question.subject
  );

  const progress =
    ((App.currentIndex + 1) / App.questions.length) * 100;

  setWidth("quizProgress", progress + "%");

  const optionsContainer = document.getElementById("optionsList");
  if (!optionsContainer) return;

  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");

    button.textContent =
      String.fromCharCode(65 + index) + ". " + option;

    const selected = App.answers[App.currentIndex];

    if (selected === index) {
      button.classList.add("selected");
    }

    if (selected !== undefined) {
      button.disabled = true;

      if (index === question.answer) {
        button.classList.add("correct");
      }

      if (index === selected && selected !== question.answer) {
        button.classList.add("wrong");
      }
    }

    button.addEventListener("click", () => selectAnswer(index));
    optionsContainer.appendChild(button);
  });

  const explanation = document.getElementById("explanationBox");

  if (explanation) {
    if (App.answers[App.currentIndex] !== undefined) {
      const selected = App.answers[App.currentIndex];

      explanation.textContent =
        (selected === question.answer ? "✅ सही उत्तर! " : "❌ गलत उत्तर। ") +
        question.explanation;

      explanation.classList.remove("hidden");
    } else {
      explanation.classList.add("hidden");
      explanation.textContent = "";
    }
  }

  const previousButton = document.getElementById("previousBtn");

  if (previousButton) {
    previousButton.disabled = App.currentIndex === 0;
  }

  const nextButton = document.getElementById("nextBtn");

  if (nextButton) {
    nextButton.textContent =
      App.currentIndex === App.questions.length - 1
        ? "Finish →"
        : "Next →";
  }
}

/* ---------- ANSWER SELECTION ---------- */

function selectAnswer(index) {
  const question = App.questions[App.currentIndex];
  if (!question) return;

  if (App.answers[App.currentIndex] !== undefined) return;

  App.answers[App.currentIndex] = index;

  const buttons = document.querySelectorAll("#optionsList button");

  buttons.forEach((button, buttonIndex) => {
    button.disabled = true;

    if (buttonIndex === question.answer) {
      button.classList.add("correct");
    }

    if (buttonIndex === index && index !== question.answer) {
      button.classList.add("wrong");
    }
  });

  const explanation = document.getElementById("explanationBox");

  if (explanation) {
    explanation.textContent =
      (index === question.answer ? "✅ सही उत्तर! " : "❌ गलत उत्तर। ") +
      question.explanation;

    explanation.classList.remove("hidden");
  }

  setText(
    "answeredCount",
    Object.keys(App.answers).length + " Answered"
  );
}

/* ---------- QUESTION NAVIGATION ---------- */

function nextQuestion() {
  if (App.currentIndex < App.questions.length - 1) {
    App.currentIndex++;
    renderQuestion();
  } else {
    submitTest();
  }
}

function previousQuestion() {
  if (App.currentIndex > 0) {
    App.currentIndex--;
    renderQuestion();
  }
}

/* ---------- EXIT CONFIRMATION ---------- */

function confirmExit() {
  const confirmed = confirm(
    "क्या आप Test से बाहर जाना चाहते हैं? आपकी मौजूदा Test Progress समाप्त हो जाएगी।"
  );

  if (!confirmed) return;

  if (App.timer) {
    clearInterval(App.timer);
    App.timer = null;
  }

  showTopics();
}

/* ---------- SUBMIT TEST ---------- */

function submitTest(autoSubmit = false) {
  if (App.questions.length === 0) return;

  if (!autoSubmit) {
    const confirmed = confirm("क्या आप अपना Test Submit करना चाहते हैं?");
    if (!confirmed) return;
  }

  if (App.timer) {
    clearInterval(App.timer);
    App.timer = null;
  }

  let correct = 0;
  let wrong = 0;
  let skipped = 0;

  App.questions.forEach((question, index) => {
    const selected = App.answers[index];

    if (selected === undefined) {
      skipped++;
    } else if (selected === question.answer) {
      correct++;
    } else {
      wrong++;
    }
  });

  const total = App.questions.length;
  const score = correct - (wrong * App.negativeMarking);
  const accuracy = total > 0 ? (correct / total) * 100 : 0;
  const earnedXP = correct * 10;

  App.lastResult = {
    correct,
    wrong,
    skipped,
    total,
    score: Number(score.toFixed(2)),
    accuracy: Number(accuracy.toFixed(1)),
    earnedXP
  };

  userData.xp += earnedXP;
  userData.tests++;
  userData.totalCorrect += correct;

  updateStreak(earnedXP);
  saveUserData();

  displayResult(App.lastResult);
  showScreen("resultScreen");
}

/* ---------- STREAK SYSTEM ---------- */

function updateStreak(earnedXP) {
  const today = getToday();
  const yesterday = getYesterday();

  if (userData.lastStudyDate !== today) {
    if (userData.lastStudyDate === yesterday) {
      userData.streak++;
    } else {
      userData.streak = 1;
    }

    userData.lastStudyDate = today;
  }

  if (userData.dailyDate !== today) {
    userData.dailyXP = 0;
    userData.dailyDate = today;
  }

  userData.dailyXP += earnedXP;
}

/* ---------- RESULT DISPLAY ---------- */

function displayResult(result) {
  setText("finalScore", result.score);
  setText("correctCount", result.correct);
  setText("wrongCount", result.wrong);
  setText("skippedCount", result.skipped);
  setText("accuracyValue", result.accuracy + "%");
  setText("earnedXP", result.earnedXP + " XP");

  updateDashboard();
}

/* ---------- RESTART TEST ---------- */

function restartTest() {
  if (!App.currentTopic) {
    goHome();
    return;
  }

  beginTest();
}

/* ---------- PROFILE ---------- */

function showProfile() {
  updateDashboard();
  showScreen("profileScreen");
}

/* ---------- SAFE HTML ---------- */

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

/* ---------- DOM HELPERS ---------- */

function setText(id, value) {
  const element = document.getElementById(id);

  if (element) {
    element.textContent = value;
  }
}

function setWidth(id, value) {
  const element = document.getElementById(id);

  if (element) {
    element.style.width = value;
  }
}

/* ---------- INITIALIZATION ---------- */

function initializeStudyQuest() {
  updateDashboard();
  showScreen("homeScreen");

  console.log("StudyQuest initialized successfully!");
}

document.addEventListener("DOMContentLoaded", initializeStudyQuest);

/* ==================================================
   STUDYQUEST APPLICATION ENGINE READY
================================================== */
