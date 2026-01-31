const questions = [
    {
      q: "Your manager takes credit for your work.",
      a1: "Speak up respectfully",
      a2: "Let it go and move on",
      trait1: "leadership",
      trait2: "people"
    },
    {
      q: "You're offered a high-paying job with no growth.",
      a1: "Accept it",
      a2: "Decline and wait",
      trait1: "stability",
      trait2: "growth"
    },
    {
      q: "A teammate keeps missing deadlines.",
      a1: "Confront them directly",
      a2: "Cover for them quietly",
      trait1: "communication",
      trait2: "people"
    },
    {
      q: "You fail publicly at an important task.",
      a1: "Own it and learn",
      a2: "Move on silently",
      trait1: "growth",
      trait2: "stability"
    },
    {
      q: "You can learn a new skill after work.",
      a1: "Do it even if tired",
      a2: "Rest instead",
      trait1: "growth",
      trait2: "stability"
    },
    {
      q: "Your role becomes repetitive.",
      a1: "Ask for more responsibility",
      a2: "Stay comfortable",
      trait1: "leadership",
      trait2: "stability"
    },
    {
      q: "Feedback you get feels unfair.",
      a1: "Ask for clarity",
      a2: "Ignore it",
      trait1: "communication",
      trait2: "people"
    },
    {
      q: "You get an opportunity with uncertainty.",
      a1: "Take the risk",
      a2: "Choose stability",
      trait1: "risk",
      trait2: "stability"
    },
    {
      q: "You disagree with leadership.",
      a1: "Share your perspective",
      a2: "Stay quiet",
      trait1: "leadership",
      trait2: "people"
    },
    {
      q: "Your growth is slow but steady.",
      a1: "Be patient",
      a2: "Look elsewhere",
      trait1: "stability",
      trait2: "risk"
    }
  ];
  
  let currentQuestion = 0;
  let timeLeft = 60;
  let timer;
  let scores = {
    leadership: 0,
    growth: 0,
    risk: 0,
    stability: 0,
    communication: 0,
    people: 0
  };
  
  const timerEl = document.getElementById("timer");
  const questionText = document.getElementById("question-text");
  const option1 = document.getElementById("option1");
  const option2 = document.getElementById("option2");
  const startBtn = document.getElementById("startBtn");
  
  startBtn.onclick = startGame;
  
  function startGame() {
    startBtn.style.display = "none";
    loadQuestion();
    timer = setInterval(() => {
      timeLeft--;
      timerEl.innerText = `Time Left: ${timeLeft}s`;
      if (timeLeft <= 0) endGame();
    }, 1000);
  }
  
  function loadQuestion() {
    if (currentQuestion >= questions.length) {
      endGame();
      return;
    }
    const q = questions[currentQuestion];
    questionText.innerText = q.q;
    option1.innerText = q.a1;
    option2.innerText = q.a2;
  
    option1.onclick = () => choose(q.trait1);
    option2.onclick = () => choose(q.trait2);
  }
  
  function choose(trait) {
    scores[trait]++;
    currentQuestion++;
    loadQuestion();
  }
  
  function endGame() {
    clearInterval(timer);
  
    let result = "you are the Silent High Performer";
    if (scores.leadership > scores.people && scores.growth > scores.stability) {
      result = "you are the Strategic Leader";
    } else if (scores.risk > scores.stability) {
      result = "you are the Risk-Taking Builder";
    } else if (scores.people > scores.leadership) {
      result = "you are the People-First Professional";
    }
  
    document.getElementById("game-container").innerHTML = `
      <h1>${result}</h1>
      <p>.</p>
      <p>👏🏻You completed the 60-Second Career Test.</p>
      <p><b>🤓Most professionals get a different result.</b></p>
      <p>What did you get?</p>
      <p>📸 Screenshot & share With you friends 🥰</p>
    `;
  }
  
  