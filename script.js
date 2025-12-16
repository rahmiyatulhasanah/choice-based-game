// rara was here

let state = "menu";
let chapter = 1;
let animIndex = 0;
let mood = 0;

const chapters = {
  1: {
    anims: [
      { img: "assets/anim_ch1_1.gif", text: "Narator 1" },
      { img: "assets/anim_ch1_2.gif", text: "Narator 2" },
      { img: "assets/anim_ch1_3.gif", text: "Narator 3" },
    ],
    option: {
      A: { img: "assets/result_A.png", text: "Nad, kamu nggak apa-apa aku duduk sebentar di sini?" },
      B: { img: "assets/result_B.png", text: "Putra memilih untuk mengabaikan dan melanjutkan langkahnya." },
    },
  },
  2: {
    anims: [{ img: "assets/anim_ch2.gif", text: "Narator" }],
    option: {
      A: { img: "assets/result_A.png", text: "Chapter 2 — A" },
      B: { img: "assets/result_B.png", text: "Chapter 2 — B" },
    },
  },
  3: {
    anims: [{ img: "assets/anim_ch3.gif", text: "Narator" }],
    option: {
      A: { img: "assets/result_A.png", text: "Chapter 3 — A" },
      B: { img: "assets/result_B.png", text: "Chapter 3 — B" },
    },
  },
  4: {
    anims: [{ img: "assets/anim_ch4.gif", text: "Narator" }],
    option: {
      A: { img: "assets/result_A.png", text: "Chapter 4 — A" },
      B: { img: "assets/result_B.png", text: "Chapter 4 — B" },
    },
  },
  5: {
    anims: [{ img: "assets/anim_ch5.gif", text: "Narator" }],
    option: {
      A: { img: "assets/result_A.png", text: "Chapter 5 — A" },
      B: { img: "assets/result_B.png", text: "Chapter 5 — B" },
    },
  },
  6: {
    anims: [{ img: "assets/anim_ch6.gif", text: "Narator" }],
    option: {
      A: { img: "assets/result_A.png", text: "Chapter 6 — A" },
      B: { img: "assets/result_B.png", text: "Chapter 6 — B" },
    },
  },
};

const screens = {
  menu: document.getElementById("menu"),
  gameplay: document.getElementById("gameplay"),
  option: document.getElementById("option"),
  result: document.getElementById("result"),
};

// FORCE INIT STATE (DEPLOY SAFE)
document.addEventListener("DOMContentLoaded", () => {
  show("menu");
});

function show(screen) {
  Object.values(screens).forEach((s) => {
    s.style.display = "none";
    s.style.pointerEvents = "none";
  });

  screens[screen].style.display = "block";
  screens[screen].style.pointerEvents = "auto";
  state = screen;
}

function updateGameplay() {
  const data = chapters[chapter].anims[animIndex];
  animation.src = data.img;
  narrator.innerText = data.text;
}