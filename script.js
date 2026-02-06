const questions = [
  {
    text: "Do you love me?",
    yes: "Yes",
    no: "No..",
    secret: "One out of the many reasons I love you. You shine like the brightest star in the night sky and guide souls who need comfort."
  },
  {
    text: "How much do you love me?(๑>◡<๑)",
    yes: "Very much!",
    no: "as much as i love my big toe"
  },
  {
    text: "Would maybe...possibly answer my next question for me?ꉂ(˵˃ ᗜ ˂˵)",
    yes: "Yes ofc!",
    no: "No..never you stinky person..ew",
    secret: "Another out of many reasons I love you. You're such a beautiful and radiant soul. I wish we keep meeting in different lifetimes."
  },
  {
    text: "Will you be my Valentine...?",
    yes: "Yes!",
    no: "No"
  }
];

let index = 0;

const questionEl = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const secretEl = document.getElementById("secret");

function loadQuestion() {
  const q = questions[index];
  questionEl.textContent = q.text;
  yesBtn.textContent = q.yes;
  noBtn.textContent = q.no;
  secretEl.classList.add("hidden");
  secretEl.textContent = q.secret || "";
}

yesBtn.onclick = () => {
  if (questions[index].secret) {
    secretEl.classList.remove("hidden");
  }
  index++;
  if (index < questions.length) {
    setTimeout(loadQuestion, 800);
  } else {
    celebrate();
  }
};

noBtn.onclick = () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 70 + "%";
  noBtn.style.top = Math.random() * 70 + "%";
};

function celebrate() {
  document.body.innerHTML = `
    <div class="card">
      <h1>Yay! I'm the luckiest person...</h1>
      <p>Thank you so much for gracing my life with your presence and light.</p>
      <div style="font-size:40px">💐🌸💞💗💋🫂</div>
    </div>
  `;
}

loadQuestion();

/* Floating emojis */
const floatingContainer = document.getElementById("floating-container");
const emojis = ['❤︎','ꉂ(˵˃ ᗜ ˂˵)','۶ৎ','💗','❀','🧸','🪼'];

setInterval(() => {
  const span = document.createElement("span");
  span.className = "floating";
  span.textContent = emojis[Math.floor(Math.random()*emojis.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = (10 + Math.random()*10) + "s";
  floatingContainer.appendChild(span);
  setTimeout(() => span.remove(), 20000);
}, 600);

/* Music */
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.onclick = () => {
  if (music.paused) {
    music.volume = 0.5;
    music.play();
    musicBtn.textContent = "🔇 Stop Music";
  } else {
    music.pause();
    musicBtn.textContent = "🎵 Play Music";
  }
};
