// ===== Dữ liệu các chủ đề =====
// Mỗi từ: [tiếng Anh, nghĩa tiếng Việt]. Thứ tự trong mảng là thứ tự đúng.
const CATEGORIES = {
  days: {
    label: "📅 Thứ",
    color: "#cfe8f9",
    btnColor: "rgb(35, 146, 214)",
    arrange: "📅 Sắp xếp các ngày trong tuần!",
    words: [
      ["Sunday", "Chủ nhật"], ["Monday", "Thứ hai"], ["Tuesday", "Thứ ba"],
      ["Wednesday", "Thứ tư"], ["Thursday", "Thứ năm"], ["Friday", "Thứ sáu"],
      ["Saturday", "Thứ bảy"]
    ]
  },
  months: {
    label: "🗓️ Tháng",
    color: "#d0eddc",
    btnColor: "rgb(48, 104, 5)",
    arrange: "🗓️ Sắp xếp các tháng trong năm!",
    words: [
      ["January", "Tháng 1"], ["February", "Tháng 2"], ["March", "Tháng 3"],
      ["April", "Tháng 4"], ["May", "Tháng 5"], ["June", "Tháng 6"],
      ["July", "Tháng 7"], ["August", "Tháng 8"], ["September", "Tháng 9"],
      ["October", "Tháng 10"], ["November", "Tháng 11"], ["December", "Tháng 12"]
    ]
  },
  planets: {
    label: "🪐 Hành tinh",
    color: "#efd9ec",
    btnColor: "rgb(108, 57, 111)",
    arrange: "🪐 Sắp xếp các hành tinh từ gần đến xa Mặt Trời!",
    words: [
      ["Mercury", "Sao Thủy"], ["Venus", "Sao Kim"], ["Earth", "Trái Đất"],
      ["Mars", "Sao Hỏa"], ["Jupiter", "Sao Mộc"], ["Saturn", "Sao Thổ"],
      ["Uranus", "Sao Thiên Vương"], ["Neptune", "Sao Hải Vương"]
    ]
  },
  colors: {
    label: "🌈 Cầu vồng",
    color: "#fff3c4",
    btnColor: "rgb(214, 120, 20)",
    arrange: "🌈 Sắp xếp màu cầu vồng từ trên xuống!",
    words: [
      ["Red", "Đỏ"], ["Orange", "Cam"], ["Yellow", "Vàng"], ["Green", "Xanh lá"],
      ["Blue", "Xanh dương"], ["Indigo", "Chàm"], ["Violet", "Tím"]
    ]
  },
  numbers: {
    label: "🔢 Số đếm",
    color: "#ffd9d9",
    btnColor: "rgb(190, 40, 70)",
    arrange: "🔢 Sắp xếp các số từ 1 đến 10!",
    words: [
      ["One", "Một"], ["Two", "Hai"], ["Three", "Ba"], ["Four", "Bốn"],
      ["Five", "Năm"], ["Six", "Sáu"], ["Seven", "Bảy"], ["Eight", "Tám"],
      ["Nine", "Chín"], ["Ten", "Mười"]
    ]
  },

  // ----- Chủ đề khó (chỉ hiện ở chế độ Khó) -----
  ordinals: {
    hard: true,
    label: "🥇 Số thứ tự",
    color: "#e0d7ff",
    btnColor: "rgb(90, 60, 200)",
    arrange: "🥇 Sắp xếp số thứ tự từ thứ nhất đến thứ mười hai!",
    words: [
      ["First", "Thứ nhất"], ["Second", "Thứ hai"], ["Third", "Thứ ba"],
      ["Fourth", "Thứ tư"], ["Fifth", "Thứ năm"], ["Sixth", "Thứ sáu"],
      ["Seventh", "Thứ bảy"], ["Eighth", "Thứ tám"], ["Ninth", "Thứ chín"],
      ["Tenth", "Thứ mười"], ["Eleventh", "Thứ mười một"], ["Twelfth", "Thứ mười hai"]
    ]
  },
  tens: {
    hard: true,
    label: "💯 Số tròn chục",
    color: "#d4f5f0",
    btnColor: "rgb(0, 130, 120)",
    arrange: "💯 Sắp xếp các số tròn chục từ nhỏ đến lớn!",
    words: [
      ["Ten", "Mười"], ["Twenty", "Hai mươi"], ["Thirty", "Ba mươi"],
      ["Forty", "Bốn mươi"], ["Fifty", "Năm mươi"], ["Sixty", "Sáu mươi"],
      ["Seventy", "Bảy mươi"], ["Eighty", "Tám mươi"], ["Ninety", "Chín mươi"],
      ["Hundred", "Một trăm"]
    ]
  },
  time: {
    hard: true,
    label: "⏳ Thời gian",
    color: "#ffe6cc",
    btnColor: "rgb(160, 80, 20)",
    arrange: "⏳ Sắp xếp đơn vị thời gian từ ngắn đến dài!",
    words: [
      ["Second", "Giây"], ["Minute", "Phút"], ["Hour", "Giờ"], ["Day", "Ngày"],
      ["Week", "Tuần"], ["Month", "Tháng"], ["Year", "Năm"],
      ["Decade", "Thập kỷ"], ["Century", "Thế kỷ"]
    ]
  }
};

// Thiết lập theo cấp độ: Dễ (bé nhỏ) và Khó (bé 10 tuổi)
const MODES = {
  easy: { label: "🐣 Dễ", arrangePts: 10, wordPts: 5, bonus: 20, hintCost: 2 },
  hard: { label: "🦁 Khó", arrangePts: 20, wordPts: 10, bonus: 50, hintCost: 5 }
};

// ===== Phần tử giao diện =====
const $ = (id) => document.getElementById(id);
const container = $("game-container");
const wordPicker = $("word-picker");
const subtitle = $("subtitle");
const msgBox = $("msg-box");
const startScreen = $("start-screen");
const gameArea = $("game-area");
const scoreBoard = $("score-board");
const bestBoard = $("best-board");
const confettiContainer = $("confetti-container");
const checkContainer = $("check-container");
const categoryButtons = $("category-buttons");
const hintBtn = $("hint-btn");
const speakBtn = $("speak-btn");
const muteBtn = $("mute-btn");
const modeButtons = $("mode-buttons");
const tip = $("tip");
const sounds = {
  success: $("success-sound"),
  error: $("error-sound"),
  win: $("win-sound"),
  bg: $("bg-music")
};
sounds.bg.volume = 0.4;
sounds.success.volume = 0.6;
sounds.error.volume = 0.5;
sounds.win.volume = 0.7;

// ===== Trạng thái =====
let isMuted = false;
let mode = loadMode();
let score = 0;
let best = loadBest();
let level = 1; // 1 = sắp xếp từ, 2 = đánh vần
let currentGame = "";
let currentOrder = [];   // thứ tự từ hiện tại (level 1)
let currentWord = "";
let currentLetters = []; // thứ tự chữ cái hiện tại (level 2)
let currentWordList = [];
let draggedIndex = null;
let selectedIndex = null; // dùng cho chế độ chạm để đổi chỗ

// ===== Tiện ích =====
function shuffleArray(array) {
  const a = [...array];
  if (a.length < 2) return a;
  do {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
  } while (a.join() === array.join());
  return a;
}

function englishOf(category) {
  return CATEGORIES[category].words.map((w) => w[0]);
}

function meaningOf(word) {
  const entry = CATEGORIES[currentGame].words.find((w) => w[0] === word);
  return entry ? entry[1] : "";
}

function loadBest() {
  try { return Number(localStorage.getItem("wa-best")) || 0; } catch { return 0; }
}

function loadMode() {
  try { return localStorage.getItem("wa-mode") === "hard" ? "hard" : "easy"; } catch { return "easy"; }
}

function isHard() {
  return mode === "hard";
}

function saveBest() {
  try { localStorage.setItem("wa-best", String(best)); } catch {}
}

// ===== Điểm =====
function updateScoreBoard() {
  scoreBoard.textContent = `⭐ Điểm: ${score}`;
  bestBoard.textContent = `🏆 Kỷ lục: ${best}`;
}

function addScore(points) {
  score = Math.max(0, score + points);
  if (score > best) {
    best = score;
    saveBest();
  }
  updateScoreBoard();
}

// ===== Âm thanh =====
function play(name) {
  const s = sounds[name];
  if (!s || isMuted) return;
  s.currentTime = 0;
  s.play().catch(() => {});
}

function startBackgroundMusic() {
  if (!isMuted) sounds.bg.play().catch(() => {});
}

function speak(word) {
  if (isMuted || !("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(word);
  u.lang = "en-US";
  u.rate = 0.8;
  speechSynthesis.speak(u);
}

muteBtn.addEventListener("click", () => {
  isMuted = !isMuted;
  if (isMuted) {
    sounds.bg.pause();
    muteBtn.textContent = "🔇 Tắt âm";
  } else {
    startBackgroundMusic();
    muteBtn.textContent = "🔊 Bật âm";
  }
});

// ===== Hiệu ứng =====
function launchConfetti() {
  confettiContainer.innerHTML = "";
  for (let i = 0; i < 90; i++) {
    const c = document.createElement("div");
    c.className = "confetti-piece";
    c.style.left = `${Math.random() * 100}%`;
    c.style.animationDelay = `${Math.random() * 0.5}s`;
    confettiContainer.appendChild(c);
  }
  setTimeout(() => (confettiContainer.innerHTML = ""), 2500);
}

function showMessage(type, text) {
  msgBox.textContent = text;
  msgBox.className = `show ${type}`;
}

function clearMessage() {
  msgBox.className = "";
  msgBox.textContent = "";
}

// ===== Nút chủ đề =====
Object.entries(CATEGORIES).forEach(([key, cat]) => {
  const btn = document.createElement("button");
  btn.textContent = cat.label;
  btn.dataset.cat = key;
  btn.style.background = cat.btnColor;
  btn.addEventListener("click", () => startCategory(key));
  categoryButtons.appendChild(btn);
});

function updateActiveButton() {
  categoryButtons.querySelectorAll("button").forEach((b) => {
    b.classList.toggle("active", b.dataset.cat === currentGame);
    b.classList.toggle("hidden", !!CATEGORIES[b.dataset.cat].hard && !isHard());
  });
}

// ===== Chọn cấp độ =====
Object.entries(MODES).forEach(([key, m]) => {
  const btn = document.createElement("button");
  btn.textContent = m.label;
  btn.dataset.mode = key;
  btn.addEventListener("click", () => setMode(key));
  modeButtons.appendChild(btn);
});

function setMode(key) {
  mode = key;
  try { localStorage.setItem("wa-mode", key); } catch {}
  modeButtons.querySelectorAll("button").forEach((b) => {
    b.classList.toggle("active", b.dataset.mode === mode);
  });
  hintBtn.textContent = `💡 Gợi ý (-${MODES[mode].hintCost})`;
  tip.textContent = isHard()
    ? "🦁 Chế độ Khó: không có nghĩa tiếng Việt khi sắp xếp, nghe rồi tự gõ từ!"
    : "💡 Kéo-thả hoặc chạm vào 2 ô để đổi chỗ";
  if (currentGame && CATEGORIES[currentGame].hard && !isHard()) {
    currentGame = "";
    container.innerHTML = "";
    wordPicker.innerHTML = "";
    checkContainer.classList.add("hidden");
    clearMessage();
    setTheme();
    subtitle.textContent = "🎮 Chọn một chủ đề để bắt đầu!";
  } else if (currentGame) {
    startCategory(currentGame);
  }
  updateActiveButton();
}

// ===== Danh sách kéo-thả / chạm để đổi chỗ (dùng chung cho cả 2 level) =====
function renderTiles(items, { isLetters, getLabel, onChange }) {
  container.innerHTML = "";
  container.classList.toggle("letters", isLetters);

  items.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "word";
    div.draggable = true;

    if (isLetters) {
      const up = item.toUpperCase();
      div.textContent = up;
      div.classList.add("AEIOU".includes(up) ? "vowel" : "consonant");
    } else {
      div.innerHTML = getLabel(item);
      div.style.backgroundColor = CATEGORIES[currentGame].color;
    }
    if (selectedIndex === index) div.classList.add("selected");

    const move = (from, to) => {
      if (from === null || from === to) return;
      const [moved] = items.splice(from, 1);
      items.splice(to, 0, moved);
      draggedIndex = null;
      selectedIndex = null;
      onChange();
    };

    // Kéo-thả (máy tính)
    div.addEventListener("dragstart", () => {
      draggedIndex = index;
      selectedIndex = null;
      div.classList.add("dragging");
    });
    div.addEventListener("dragend", () => div.classList.remove("dragging"));
    div.addEventListener("dragover", (e) => e.preventDefault());
    div.addEventListener("drop", (e) => {
      e.preventDefault();
      move(draggedIndex, index);
    });

    // Chạm / bấm để đổi chỗ (điện thoại)
    div.addEventListener("click", () => {
      if (selectedIndex === null) {
        selectedIndex = index;
        onChange();
      } else if (selectedIndex === index) {
        selectedIndex = null;
        onChange();
      } else {
        // đổi chỗ 2 ô
        const a = selectedIndex;
        [items[a], items[index]] = [items[index], items[a]];
        selectedIndex = null;
        onChange();
      }
    });

    container.appendChild(div);
  });
}

// ===== Level 1: sắp xếp từ =====
function startCategory(key) {
  startBackgroundMusic();
  currentGame = key;
  level = 1;
  currentOrder = shuffleArray(englishOf(key));
  selectedIndex = null;
  wordPicker.innerHTML = "";
  speakBtn.classList.add("hidden");
  hintBtn.classList.remove("hidden");
  clearMessage();
  setTheme();
  updateActiveButton();
  subtitle.textContent = CATEGORIES[key].arrange;
  checkContainer.classList.remove("hidden");
  renderWords();
}

function renderWords() {
  renderTiles(currentOrder, {
    isLetters: false,
    getLabel: (w) => (isHard() ? w : `${w}<small>${meaningOf(w)}</small>`),
    onChange: renderWords
  });
}

function setTheme() {
  document.body.className = currentGame ? `${currentGame}-theme` : "";
}

// ===== Level 2: đánh vần =====
function showWordPicker(wordList) {
  currentWordList = [...wordList];
  container.innerHTML = "";
  wordPicker.innerHTML = "";
  checkContainer.classList.add("hidden");
  subtitle.textContent = "📝 Chọn một từ để đánh vần!";

  currentWordList.forEach((word) => {
    const btn = document.createElement("button");
    btn.className = "pick-word-btn";
    btn.innerHTML = isHard() ? `🔈 ${meaningOf(word)}` : `${word}<small>${meaningOf(word)}</small>`;
    btn.addEventListener("click", () => {
      currentWord = word;
      currentLetters = shuffleArray(word.split(""));
      selectedIndex = null;
      wordPicker.innerHTML = "";
      clearMessage();
      checkContainer.classList.remove("hidden");
      speakBtn.classList.remove("hidden");
      speak(word);
      if (isHard()) {
        subtitle.textContent = `🎧 Nghe và gõ từ tiếng Anh có nghĩa "${meaningOf(word)}"`;
        renderTypingBox();
      } else {
        subtitle.textContent = `🔤 Xếp chữ cái thành từ có nghĩa "${meaningOf(word)}"`;
        renderLetters();
      }
    });
    wordPicker.appendChild(btn);
  });
}

// Chế độ Khó: ô nhập để tự gõ từ
function renderTypingBox() {
  container.innerHTML = "";
  container.classList.remove("letters");
  const input = document.createElement("input");
  input.id = "spell-input";
  input.type = "text";
  input.autocomplete = "off";
  input.autocapitalize = "off";
  input.spellcheck = false;
  input.placeholder = `${currentWord.length} chữ cái...`;
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") $("check-btn").click();
  });
  container.appendChild(input);
  input.focus();
}

function getSpellAnswer() {
  const input = $("spell-input");
  return input ? input.value.trim() : currentLetters.join("");
}

function renderLetters() {
  renderTiles(currentLetters, { isLetters: true, onChange: renderLetters });
}

// ===== Gợi ý =====
hintBtn.addEventListener("click", () => {
  if (level === 1) {
    const correct = englishOf(currentGame);
    const i = currentOrder.findIndex((w, idx) => w !== correct[idx]);
    if (i === -1) return;
    const j = currentOrder.indexOf(correct[i]);
    [currentOrder[i], currentOrder[j]] = [currentOrder[j], currentOrder[i]];
    renderWords();
    showMessage("success", `💡 Vị trí số ${i + 1} là "${correct[i]}"`);
  } else if (isHard()) {
    const input = $("spell-input");
    const typed = input.value.trim().toLowerCase();
    const word = currentWord.toLowerCase();
    let n = 0;
    while (n < typed.length && typed[n] === word[n]) n++;
    if (n >= word.length) return;
    input.value = currentWord.slice(0, n + 1);
    input.focus();
    showMessage("success", `💡 Chữ thứ ${n + 1} là "${currentWord[n].toUpperCase()}"`);
  } else {
    const correct = currentWord.split("");
    const i = currentLetters.findIndex((c, idx) => c !== correct[idx]);
    if (i === -1) return;
    const j = currentLetters.indexOf(correct[i], i);
    [currentLetters[i], currentLetters[j]] = [currentLetters[j], currentLetters[i]];
    renderLetters();
    showMessage("success", `💡 Chữ thứ ${i + 1} là "${correct[i].toUpperCase()}"`);
  }
  addScore(-MODES[mode].hintCost);
});

speakBtn.addEventListener("click", () => speak(currentWord));

// ===== Kiểm tra =====
$("check-btn").addEventListener("click", () => {
  startBackgroundMusic();
  if (level === 1) {
    if (currentOrder.join() === englishOf(currentGame).join()) {
      showMessage("success", "⭐ Giỏi quá các con ơi! Giờ chọn một từ để đánh vần nhé!");
      launchConfetti();
      play("success");
      addScore(MODES[mode].arrangePts);
      level = 2;
      showWordPicker(englishOf(currentGame));
    } else {
      showMessage("error", "😊 Gần đúng rồi! Thử lại nhé!");
      play("error");
    }
    return;
  }

  if (getSpellAnswer().toLowerCase() === currentWord.toLowerCase()) {
    showMessage("success", `⭐ Đúng rồi! ${currentWord} = ${meaningOf(currentWord)}`);
    launchConfetti();
    play("success");
    speak(currentWord);
    addScore(MODES[mode].wordPts);
    currentWordList = currentWordList.filter((w) => w !== currentWord);

    if (currentWordList.length > 0) {
      speakBtn.classList.add("hidden");
      showWordPicker(currentWordList);
    } else {
      showMessage("success", `🏆 Mây An và Hồng Thiên giỏi quá! Xong hết các từ rồi! +${MODES[mode].bonus} điểm`);
      play("win");
      launchConfetti();
      addScore(MODES[mode].bonus);
      container.innerHTML = "";
      checkContainer.classList.add("hidden");
      setTimeout(() => startCategory(currentGame), 4000);
    }
  } else {
    showMessage("error", "🥴 Ôi chưa đúng! ❌ Thử lại nhé!");
    play("error");
  }
});

// ===== Bắt đầu / chơi lại / làm mới =====
$("start-btn").addEventListener("click", () => {
  startScreen.classList.add("hidden");
  gameArea.classList.remove("hidden");
  subtitle.textContent = "🎮 Chọn một chủ đề để bắt đầu!";
  startBackgroundMusic();
});

$("play-again-btn").addEventListener("click", () => {
  if (currentGame) startCategory(currentGame);
});

$("reset-btn").addEventListener("click", () => {
  if (!confirm("Bạn có chắc muốn làm mới trò chơi? Điểm hiện tại sẽ về 0.")) return;
  level = 1;
  currentGame = "";
  currentWordList = [];
  selectedIndex = null;
  score = 0;
  updateScoreBoard();
  container.innerHTML = "";
  wordPicker.innerHTML = "";
  clearMessage();
  setTheme();
  updateActiveButton();
  checkContainer.classList.add("hidden");
  startScreen.classList.remove("hidden");
  gameArea.classList.add("hidden");
  subtitle.textContent = "Sắp xếp các từ theo đúng thứ tự.";
});

updateScoreBoard();
setMode(mode);
