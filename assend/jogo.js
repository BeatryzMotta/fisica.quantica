const questions = [
  {
    q: "As partículas se comportam como bolinhas ou como ondas?",
    options: ["Bolinhas", "Ondas"],
    correct: 1,
    title: " Acertou! Partículas podem se comportar como ondas!",
    video: "https://www.youtube.com/embed/CgY_zBuK2Cw",
    text: "No experimento da dupla fenda, vemos que as partículas criam um padrão de ondas, como se fossem água!",
    wrongExplain: "Bolinhas não explicam o padrão de interferência que vemos nos experimentos. As ondas conseguem!"
  },
  {
    q: "Qual é o nome do fenômeno em que partículas atravessam barreiras impossíveis?",
    options: ["Reflexão", "Tunelamento Quântico"],
    correct: 1,
    title: "Muito bem! Isso é o Tunelamento Quântico!",
    video: "https://www.youtube.com/embed/m-H7zPSI9s4",
    text: "No tunelamento quântico, partículas atravessam barreiras como se fossem mágicas!",
    wrongExplain: "Reflexão é quando algo bate e volta. Mas aqui as partículas atravessam a barreira — isso é tunelamento!"
  },
  {
    q: "Quando uma partícula pode estar em dois lugares ao mesmo tempo, chamamos de...",
    options: ["Superposição", "Gravidade"],
    correct: 0,
    title: "Correto! Isso é Superposição!",
    video: "https://www.youtube.com/embed/RmnPPXKDTL4",
    text: "A superposição permite que uma partícula exista em mais de um estado ou lugar ao mesmo tempo!",
    wrongExplain: "Gravidade é a força que puxa objetos. Mas estar em dois lugares ao mesmo tempo é superposição!"
  },
  {
    q: "Quando duas partículas ficam ligadas mesmo à distância, chamamos de...",
    options: ["Entrelaçamento", "Magnetismo"],
    correct: 0,
    title: "Isso mesmo! É o Entrelaçamento Quântico!",
    video: "https://www.youtube.com/embed/Q9J4ArjheD8",
    text: "No entrelaçamento, partículas compartilham uma conexão misteriosa, mesmo distantes!",
    wrongExplain: "Magnetismo liga objetos com campos magnéticos, mas no quântico, é entrelaçamento que conecta partículas!"
  },
  {
    q: "Qual partícula é conhecida como a menor unidade de luz?",
    options: ["Fóton", "Elétron"],
    correct: 0,
    title: "Perfeito! É o Fóton!",
    video: "https://www.youtube.com/embed/-rRUJaK9CEY",
    text: "O fóton é a partícula da luz, viajando em pacotinhos minúsculos pelo universo!",
    wrongExplain: "Elétron é uma partícula de carga elétrica. A menor unidade de luz é o fóton!"
  }
];

let current = 0;

const quiz = document.getElementById('quiz');
const card = document.getElementById('card');
const cardBox = document.getElementById('card-box');
const cardTitle = document.getElementById('card-title');
const cardVideo = document.getElementById('card-video');
const cardText = document.getElementById('card-text');
const cardButtons = document.getElementById('card-buttons');

function loadQuestion() {
  const q = questions[current];
  quiz.innerHTML = `
    <h2>${q.q}</h2>
    <div class="answers">
      ${q.options.map((opt, i) => `
        <button class="answer-btn" onclick="checkAnswer(${i})">${opt}</button>
      `).join('')}
    </div>
  `;
}

function checkAnswer(i) {
  const q = questions[current];
  if (i === q.correct) {
    showCard(q.title, q.video, q.text, true);
    createConfetti();
  } else {
    showCard("❌ Alternativa incorreta!", "", q.wrongExplain, false);
  }
}

function showCard(title, video, text, correct) {
  cardTitle.innerText = title;
  if (video) {
    cardVideo.style.display = "block";
    cardVideo.src = video;
  } else {
    cardVideo.style.display = "none";
    cardVideo.src = "";
  }
  cardText.innerText = text;
  cardButtons.innerHTML = "";

  if (correct) {
    if (current < questions.length - 1) {
      cardButtons.innerHTML = `<button onclick="nextQuestion()">Próxima Pergunta ➡️</button>`;
    } else {
      cardButtons.innerHTML = `
        <button onclick="finishGame()">Fim do Jogo ✅</button>
        <button onclick="window.location.href='index.html'">Voltar</button>
      `;
    }
  } else {
    cardButtons.innerHTML = `<button onclick="retry()">Tentar novamente</button>`;
  }

  card.style.visibility = 'visible';
}

// === NOVA FUNÇÃO: para parar o vídeo ===
function stopVideo() {
  cardVideo.src = ""; // Remove o vídeo do iframe (YouTube para o som)
}

function nextQuestion() {
  removeConfetti();
  stopVideo(); // ⛔ Para o som
  card.style.visibility = 'hidden';
  current++;
  loadQuestion();
}

function retry() {
  stopVideo(); // ⛔ Para o som
  card.style.visibility = 'hidden';
  loadQuestion();
}

function finishGame() {
  removeConfetti();
  stopVideo(); // ⛔ Para o som
  card.style.visibility = 'hidden';
  alert('🎉 Parabéns! Você completou todas as perguntas!');
}

// === CONFETE ===
function createConfetti() {
  removeConfetti();
  for (let side of ["left", "right"]) {
    for (let i = 0; i < 60; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`;
      confetti.style.top = "50%";
      confetti.style[side] = "0";
      const angle = side === "left" ? 1 : -1;
      const x = (Math.random() * 400 + 200) * angle + "px";
      const y = (Math.random() * 400 - 200) + "px";
      confetti.style.setProperty("--x", x);
      confetti.style.setProperty("--y", y);
      cardBox.appendChild(confetti);
    }
  }
}

function removeConfetti() {
  document.querySelectorAll(".confetti").forEach(c => c.remove());
}

loadQuestion();
