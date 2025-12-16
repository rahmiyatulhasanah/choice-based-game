// rara was here

let state = "menu";
let chapter = 1;
let animIndex = 0;
let mood = 2; // Start at mood level 2
let poinEnding = 0;
let choicesMade = {};

const chapters = {
  1: {
    anims: [
      { img: "assets/anim_ch1_1.gif", text: "Ini adalah Putra. Mahasiswa semester akhir di salah satu kampus ternama. Hari ini, semangatnya sedang penuh. Putra: 'Cuaca hari ini cerah banget. Rasanya semua tugas kuliah bakal lancar kalau mood sebagus ini.'" },
      { img: "assets/anim_ch1_2.gif", text: "Putra: 'Tapi sebelum lanjut nugas... urusan perut nomor satu. Jam segini kantin pasti ramai, tapi semoga ayam geprek langganan belum habis.'" },
      { img: "assets/anim_ch1_3.gif", text: "Putra: 'Tapi sebelum lanjut nugas... urusan perut nomor satu. Jam segini kantin pasti ramai, tapi semoga ayam geprek langganan belum habis.'" },
    ],
    mood: 2,
    narrator: "Apa yang harus dilakukan Putra?",
    options: {
      A: {
        text: "Dekati Nadia perlahan dan bertanya keadaannya.",
        moodChange: 1,
        poinChange: 1,
        education: null,
        nextScene: 2,
      },
      B: {
        text: "Abaikan saja dan lanjut jalan ke kantin.",
        moodChange: -1,
        poinChange: -1,
        education: "Dalam situasi seperti ini, mengabaikan seseorang yang sedang mengalami tekanan bukan pilihan yang tepat. Bullying atau kekerasan sering makin parah ketika orang di sekitar memilih diam.",
        nextScene: 1,
        retry: true,
      },
    },
  },
2: {
  anims: [{ img: "assets/anim_ch2.gif", text: "Keheningan sejenak terasa lebih baik daripada kata-kata yang salah. Putra membiarkan Nadia menyadari kehadirannya tanpa merasa terancam.\nPutra: 'Dia terlihat terguncang sekali. Aku nggak boleh gegabah. Salah ngomong sedikit bisa bikin dia lari.'" }],
    mood: 3,
    narrator: "Nadia mulai sedikit tenang, tapi ia belum bicara. Bagaimana cara Putra membuka percakapan agar Nadia merasa aman?",
    options: {
      A: {
        text: '"Nad… nggak apa-apa, kok. Kamu nggak harus cerita kalau belum siap. Aku cuma mau pastikan kamu aman."',
        moodChange: 0,
        poinChange: 1,
        education: null,
        nextScene: 3,
      },
      B: {
        text: '"Kenapa kamu menangis? Siapa yang bikin kamu begini?"',
        moodChange: -1,
        poinChange: -1,
        education: "Mengajukan pertanyaan yang terlalu langsung atau mendesak bisa membuat korban merasa tertekan. Korban perlu diberikan ruang dan rasa aman sebelum diminta bercerita.",
        nextScene: 2,
        retry: true,
      },
    },
  },
3: {
  anims: [{ img: "assets/anim_ch3.gif", text: "Suasana koridor perlahan menjadi hening. Mahasiswa lain yang berlalu-lalang mulai menjauh, memberi ruang privasi yang sangat dibutuhkan saat ini.\nPutra: 'Syukurlah, dia sudah mulai bisa bernapas lega. Aku nggak boleh buru-buru nanya macam-macam. Yang penting sekarang dia tahu kalau dia nggak sendirian.'" }],
    mood: 3,
    narrator: "Nadia mulai sedikit tenang, tapi ia belum bicara. Bagaimana cara Putra membuka percakapan agar Nadia merasa aman?",
    options: {
      A: {
        text: '"Kalau kamu mau, kita bisa duduk di sini sebentar. Kamu nggak sendirian, Nad."',
        moodChange: 1,
        poinChange: 1,
        education: null,
        nextScene: 4,
      },
      B: {
        text: 'Menepuk bahu Nadia — "Udahlah, jangan nangis. Nggak usah dibesar-besarin."',
        moodChange: -1,
        poinChange: -1,
        education: "Mengatakan 'jangan menangis' atau 'nggak usah dibesar-besarkan' dapat membuat korban merasa emosi mereka tidak valid. Korban butuh didengarkan dan ditemani, bukan diremehkan.",
        nextScene: 3,
        retry: true,
      },
    },
  },
4: {
  anims: [{ img: "assets/anim_ch4.gif", text: "Beberapa menit berlalu dalam diam yang menenangkan. Isakan Nadia perlahan mereda, menyisakan mata yang memerah dan napas yang berangsur teratur.\nPutra: 'Dia sudah sedikit lebih tenang. Ini momen penting. Aku nggak boleh merusak rasa amannya dengan pertanyaan yang salah.'\nPutra: 'Jangan tanya kenapa. Jangan tanya siapa. Fokus ke apa yang dia butuhkan sekarang.'" }],
    mood: 4,
    narrator: "Putra ingin menawarkan bantuan tanpa membuat Nadia merasa tersudut. Kalimat mana yang harus ia pilih?",
    options: {
      A: {
        text: '"Nad… ada sesuatu yang bisa aku lakuin buat bantu kamu sekarang? Kamu maunya gimana?"',
        moodChange: 0,
        poinChange: 1,
        education: null,
        nextScene: 5,
      },
      B: {
        text: '"Siapa yang bikin kamu nangis? Ceritain ke aku sekarang biar jelas."',
        moodChange: -1,
        poinChange: -1,
        education: "Meminta korban langsung menceritakan detail kejadian dapat membuat mereka merasa terdesak dan tidak aman. Prioritas utama bukan mencari pelaku, tetapi memastikan kondisi korban stabil.",
        nextScene: 4,
        retry: true,
      },
    },
  },
  5: {
    anims: [{ img: "assets/anim_ch5.gif", text: "Nadia menarik napas dalam-dalam, mencoba merangkai kata di tengah gemuruh emosinya. Putra menunggu dengan sabar, tidak memotong.\nNadia: (Suara pelan, serak, dan terbata-bata) 'Aku... aku cuma... merasa overwhelmed...'\n(Nadia berhenti sejenak, menelan ludah).\nNadia: '...Mereka... ngomong hal-hal yang bikin aku down...'\nPutra (Dalam Hati): 'Akhirnya dia mau bicara. Ini momen krusial. Aku nggak boleh salah respon. Aku nggak boleh menghakimi atau mendesak dia.'" }],
    mood: 4,
    narrator: "Nadia mulai membuka diri tentang perasaannya. Bagaimana Putra harus merespons agar Nadia tetap merasa aman?",
    options: {
      A: {
        text: '"Nad… makasih ya udah mau cerita sedikit. Itu pasti berat banget buat kamu. Aku di sini buat dengerin, kamu nggak sendirian."',
        moodChange: 0,
        poinChange: 1,
        education: null,
        nextScene: 6,
      },
      B: {
        text: '"Ah, masa sih gitu doang bikin kamu nangis? Kamu terlalu sensitif, Nad."',
        moodChange: -1,
        poinChange: -1,
        education: "Meremehkan perasaan korban atau menyebut mereka 'terlalu sensitif' dapat memperparah luka emosional. Dalam situasi krisis, korban perlu didengarkan tanpa dihakimi.",
        nextScene: 5,
        retry: true,
      },
    },
  },
6: {
  anims: [{ img: "assets/anim_ch6.gif", text: "Hening sejenak. Nadia berusaha mengumpulkan sisa-sisa tenaganya. Putra menyadari bahwa meskipun Nadia sudah lebih stabil, membiarkannya kembali sendirian ke keramaian mungkin bukan ide yang baik.\nPutra (Dalam Hati): 'Dia butuh ruang aman. Tapi aku nggak boleh mutusin sepihak. Dia yang paling tahu apa yang dia butuhin sekarang.'" }],
    mood: 4,
    narrator: "Putra ingin menawarkan langkah selanjutnya yang mendukung pemulihan Nadia tanpa memaksanya. Apa yang sebaiknya ia katakan?",
    options: {
      A: {
        text: '"Nad, kalau kamu mau… kita bisa cari tempat yang lebih tenang dulu. Atau kalau kamu butuh ditemani ke ruang konseling, aku bisa ikut."',
        moodChange: 1,
        poinChange: 1,
        education: null,
        nextScene: null,
        isEnding: true,
      },
      B: {
        text: '"Udahlah, balik kelas aja. Ngapain dipikirin?"',
        moodChange: -1,
        poinChange: -1,
        education: "Mendorong korban untuk 'lupa saja' atau kembali beraktivitas dapat membuat korban merasa tidak didukung. Proses pemulihan membutuhkan ruang, waktu, dan dukungan yang sensitif.",
        nextScene: 6,
        retry: true,
      },
    },
  },
};

const screens = {
  menu: document.getElementById("menu"),
  gameplay: document.getElementById("gameplay"),
  option: document.getElementById("options"),
  education: document.getElementById("education"),
  result: document.getElementById("result"),
  ending: document.getElementById("ending"),
};

const endingData = {
  good: {
    title: "GOOD ENDING",
    text: "Kamu Sudah Menjadi Dukungan yang Tepat\n\nKamu berhasil memberikan bantuan yang tepat. Kehadiranmu membuat Nadia merasa lebih aman, didengar, dan dihargai. Terkadang, menyelamatkan satu orang hari ini sudah lebih dari cukup.",
    bg: "assets/Good Ending.png",
  },
  neutral: {
    title: "NEUTRAL ENDING",
    text: "Niat Baik Perlu Cara yang Tepat\n\nKamu sudah mencoba, tapi masih ada yang perlu dipelajari. Membantu seseorang bukan hanya soal niat, tapi juga soal cara penyampaian. Hari ini kamu belajar: Empati membutuhkan kehati-hatian agar tidak melukai tanpa sadar.",
    bg: "assets/Neutral ending.png",
  },
  bad: {
    title: "BAD ENDING",
    text: "Belajarlah untuk Mendengar Lebih Baik\n\nResponsemu membuat Nadia merasa tidak sepenuhnya aman. Niat baikmu tidak tersampaikan karena cara yang kurang tepat. Jangan menyerah. Ini adalah kesempatan untuk belajar, memahami, dan memperbaiki diri di kesempatan berikut.",
    bg: "assets/Bad Ending.png",
  },
};

// FORCE INIT STATE (DEPLOY SAFE)
document.addEventListener("DOMContentLoaded", () => {
  show("menu");
});

// Event listeners
document.getElementById("startBtn").addEventListener("click", () => {
  resetGame();
  show("gameplay");
  updateGameplay();
});

document.getElementById("nextAnim").addEventListener("click", () => {
  animIndex++;
  if (animIndex >= chapters[chapter].anims.length) {
    // All animations done, show options
    showOptions();
  } else {
    updateGameplay();
  }
});

document.getElementById("prevAnim").addEventListener("click", () => {
  if (animIndex > 0) {
    animIndex--;
    updateGameplay();
  }
});

document.getElementById("choiceA").addEventListener("click", () => {
  handleChoice("A");
});

document.getElementById("choiceB").addEventListener("click", () => {
  handleChoice("B");
});

document.getElementById("retryBtn").addEventListener("click", () => {
  animIndex = 0;
  show("gameplay");
  updateGameplay();
});

document.getElementById("continueBtn").addEventListener("click", () => {
  // Move to next chapter
  chapter++;
  animIndex = 0;
  if (chapter > 6) {
    showEnding();
  } else {
    show("gameplay");
    updateGameplay();
  }
});

document.getElementById("endingBtn").addEventListener("click", () => {
  resetGame();
  show("menu");
});

function resetGame() {
  chapter = 1;
  animIndex = 0;
  mood = 2;
  poinEnding = 0;
  choicesMade = {};
}

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
  document.getElementById("animation").src = data.img;
  document.getElementById("narrator").innerText = data.text;
  updateMoodBar();
}

function updateMoodBar() {
  const moodBar = document.getElementById("moodBar");
  moodBar.src = `assets/mood_lv${mood}.png`;
}

// function showOptions() {
//   const chapterData = chapters[chapter];
//   document.getElementById("optionNarrator").innerText = chapterData.narrator;
//   document.getElementById("choiceA").innerText = chapterData.options.A.text;
//   document.getElementById("choiceB").innerText = chapterData.options.B.text;

//   console.log("Buttons found?", 
//   document.getElementById("choiceA"), 
//   document.getElementById("choiceB")
//   );
//   console.log("Button A text:", chapterData.options.A.text);

//   show("option");
// }

function showOptions() {
  const chapterData = chapters[chapter];
  document.getElementById("optionNarrator").innerText = chapterData.narrator;
  document.getElementById("choiceA").innerText = chapterData.options.A.text;
  document.getElementById("choiceB").innerText = chapterData.options.B.text;
  
  // HARDCORE DEBUG
  const btnA = document.getElementById("choiceA");
  const btnB = document.getElementById("choiceB");
  
  console.log("=== BUTTON DEBUG ===");
  console.log("Button A element:", btnA);
  console.log("Button A disabled?", btnA.disabled);
  console.log("Button A display:", window.getComputedStyle(btnA).display);
  console.log("Button A pointer-events:", window.getComputedStyle(btnA).pointerEvents);
  console.log("Button A parent:", btnA.parentElement);
  console.log("Button A parent display:", window.getComputedStyle(btnA.parentElement).display);
  console.log("Options screen display:", window.getComputedStyle(screens.option).display);
  
  // Try manually adding click listener
  btnA.onclick = function() {
    console.log("BUTTON A CLICKED VIA ONCLICK!");
    handleChoice("A");
  };
  
  btnB.onclick = function() {
    console.log("BUTTON B CLICKED VIA ONCLICK!");
    handleChoice("B");
  };
  
  show("option");
}

function handleChoice(choice) {
  const chapterData = chapters[chapter];
  const choiceData = chapterData.options[choice];

  // Only count poin on first choice of this scene
  if (!choicesMade[chapter]) {
    mood += choiceData.moodChange;
    poinEnding += choiceData.poinChange;
    choicesMade[chapter] = choice;
  } else {
    // Still update mood on retry but don't count poin again
    mood += choiceData.moodChange;
  }

  // Clamp mood between 0 and 5
  if (mood < 0) mood = 0;
  if (mood > 5) mood = 5;

  if (choiceData.education) {
    // Show education message
    document.getElementById("educationText").innerText = choiceData.education;
    show("education");
  } else {
    // Move to next scene
    if (choiceData.isEnding) {
      showEnding();
    } else {
      chapter = choiceData.nextScene;
      animIndex = 0;
      show("gameplay");
      updateGameplay();
    }
  }
}

function showEnding() {
  const endingScreen = document.getElementById("ending");
  let ending;

  if (poinEnding >= 6) {
    ending = endingData.good;
  } else if (poinEnding >= 4) {
    ending = endingData.neutral;
  } else {
    ending = endingData.bad;
  }

  document.getElementById("endingBg").src = ending.bg;
  document.getElementById("endingTitle").innerText = ending.title;
  document.getElementById("endingText").innerText = ending.text;

  show("ending");
}

