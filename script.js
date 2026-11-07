// ===== Dữ liệu các chủ đề =====
// Mỗi từ: [tiếng Anh, nghĩa tiếng Việt]. Thứ tự trong mảng là thứ tự đúng.
const CATEGORIES = {
  days: {
    label: "📅 Days",
    color: "#cfe8f9",
    btnColor: "rgb(35, 146, 214)",
    arrange: "📅 Arrange the days of the week!",
    words: [
      ["Sunday", "Chủ nhật"], ["Monday", "Thứ hai"], ["Tuesday", "Thứ ba"],
      ["Wednesday", "Thứ tư"], ["Thursday", "Thứ năm"], ["Friday", "Thứ sáu"],
      ["Saturday", "Thứ bảy"]
    ]
  },
  months: {
    label: "🗓️ Months",
    color: "#d0eddc",
    btnColor: "rgb(48, 104, 5)",
    arrange: "🗓️ Arrange the months of the year!",
    words: [
      ["January", "Tháng 1"], ["February", "Tháng 2"], ["March", "Tháng 3"],
      ["April", "Tháng 4"], ["May", "Tháng 5"], ["June", "Tháng 6"],
      ["July", "Tháng 7"], ["August", "Tháng 8"], ["September", "Tháng 9"],
      ["October", "Tháng 10"], ["November", "Tháng 11"], ["December", "Tháng 12"]
    ]
  },
  planets: {
    label: "🪐 Planets",
    color: "#efd9ec",
    btnColor: "rgb(108, 57, 111)",
    arrange: "🪐 Arrange the planets from nearest to farthest from the Sun!",
    words: [
      ["Mercury", "Sao Thủy"], ["Venus", "Sao Kim"], ["Earth", "Trái Đất"],
      ["Mars", "Sao Hỏa"], ["Jupiter", "Sao Mộc"], ["Saturn", "Sao Thổ"],
      ["Uranus", "Sao Thiên Vương"], ["Neptune", "Sao Hải Vương"]
    ]
  },
  colors: {
    label: "🌈 Rainbow",
    color: "#fff3c4",
    btnColor: "rgb(214, 120, 20)",
    arrange: "🌈 Arrange the rainbow colors from top to bottom!",
    words: [
      ["Red", "Đỏ"], ["Orange", "Cam"], ["Yellow", "Vàng"], ["Green", "Xanh lá"],
      ["Blue", "Xanh dương"], ["Indigo", "Chàm"], ["Violet", "Tím"]
    ]
  },
  numbers: {
    label: "🔢 Numbers",
    color: "#ffd9d9",
    btnColor: "rgb(190, 40, 70)",
    arrange: "🔢 Arrange the numbers from 1 to 10!",
    words: [
      ["One", "Một"], ["Two", "Hai"], ["Three", "Ba"], ["Four", "Bốn"],
      ["Five", "Năm"], ["Six", "Sáu"], ["Seven", "Bảy"], ["Eight", "Tám"],
      ["Nine", "Chín"], ["Ten", "Mười"]
    ]
  },

  seasons: {
    label: "🍂 Seasons",
    color: "#e3f7d4",
    btnColor: "rgb(70, 150, 60)",
    arrange: "🍂 Arrange the seasons, starting with spring!",
    words: [["Spring", "Mùa xuân"], ["Summer", "Mùa hè"], ["Autumn", "Mùa thu"], ["Winter", "Mùa đông"]]
  },
  dayTime: {
    label: "🌅 Times of Day",
    color: "#fde2c8",
    btnColor: "rgb(230, 110, 60)",
    arrange: "🌅 Arrange the times of day from morning to night!",
    words: [["Morning", "Buổi sáng"], ["Noon", "Buổi trưa"], ["Afternoon", "Buổi chiều"], ["Evening", "Buổi tối"], ["Night", "Ban đêm"]]
  },
  body: {
    label: "🧍 Body",
    color: "#fbd6e3",
    btnColor: "rgb(200, 70, 120)",
    arrange: "🧍 Arrange the body parts from top to bottom!",
    words: [["Hair", "Tóc"], ["Eyes", "Mắt"], ["Nose", "Mũi"], ["Teeth", "Răng"], ["Neck", "Cổ"], ["Shoulders", "Vai"], ["Stomach", "Bụng"], ["Feet", "Bàn chân"]]
  },
  animals: {
    label: "🐘 Animals",
    color: "#e8e1d4",
    btnColor: "rgb(120, 90, 60)",
    arrange: "🐘 Arrange the animals from smallest to biggest!",
    words: [["Ant", "Con kiến"], ["Mouse", "Con chuột"], ["Cat", "Con mèo"], ["Dog", "Con chó"], ["Horse", "Con ngựa"], ["Elephant", "Con voi"], ["Whale", "Cá voi"]]
  },
  fruits: {
    label: "🍎 Fruits A-Z",
    color: "#ffe0e0",
    btnColor: "rgb(220, 60, 60)",
    arrange: "🍎 Arrange the fruits in alphabetical order (A to Z)!",
    words: [["Apple", "Quả táo"], ["Banana", "Quả chuối"], ["Cherry", "Quả anh đào"], ["Grape", "Quả nho"], ["Lemon", "Quả chanh vàng"], ["Mango", "Quả xoài"], ["Orange", "Quả cam"], ["Peach", "Quả đào"]]
  },

  // ----- Chủ đề Cambridge A1 Movers (chỉ hiện ở chế độ Movers, xếp theo A-Z) -----
  mAnimals: {
    movers: true,
    label: "🐧 Wild Animals",
    color: "#dff3ff",
    btnColor: "rgb(30, 120, 170)",
    arrange: "🐧 Arrange the animals in alphabetical order (A to Z)!",
    words: [
      ["Bat", "Con dơi"],
      ["Dolphin", "Cá heo"],
      ["Kangaroo", "Chuột túi"],
      ["Lion", "Sư tử"],
      ["Panda", "Gấu trúc"],
      ["Parrot", "Con vẹt"],
      ["Penguin", "Chim cánh cụt"],
      ["Shark", "Cá mập"]
    ]
  },
  mFamily: {
    movers: true,
    label: "👨‍👩‍👧 Family",
    color: "#ffe3ec",
    btnColor: "rgb(200, 60, 110)",
    arrange: "👨‍👩‍👧 Arrange the family words in alphabetical order (A to Z)!",
    words: [
      ["Aunt", "Cô / dì"],
      ["Cousin", "Anh chị em họ"],
      ["Daughter", "Con gái"],
      ["Granddaughter", "Cháu gái"],
      ["Grandson", "Cháu trai"],
      ["Parent", "Bố hoặc mẹ"],
      ["Son", "Con trai"],
      ["Uncle", "Chú / bác"]
    ]
  },
  mClothes: {
    movers: true,
    label: "🧥 Clothes",
    color: "#e8e4ff",
    btnColor: "rgb(100, 80, 190)",
    arrange: "🧥 Arrange the clothes in alphabetical order (A to Z)!",
    words: [
      ["Coat", "Áo khoác dài"],
      ["Glasses", "Kính"],
      ["Helmet", "Mũ bảo hiểm"],
      ["Jacket", "Áo khoác"],
      ["Scarf", "Khăn quàng cổ"],
      ["Shorts", "Quần đùi"],
      ["Sweater", "Áo len"],
      ["Trousers", "Quần dài"]
    ]
  },
  mFood: {
    movers: true,
    label: "🍜 Food & Drink",
    color: "#fff0d6",
    btnColor: "rgb(210, 120, 30)",
    arrange: "🍜 Arrange the food words in alphabetical order (A to Z)!",
    words: [
      ["Cheese", "Phô mai"],
      ["Milkshake", "Sữa lắc"],
      ["Noodles", "Mì sợi"],
      ["Pancake", "Bánh kếp"],
      ["Pasta", "Mì Ý"],
      ["Salad", "Rau trộn"],
      ["Sandwich", "Bánh mì kẹp"],
      ["Soup", "Súp"]
    ]
  },
  mHome: {
    movers: true,
    label: "🏠 Home",
    color: "#e6f7ee",
    btnColor: "rgb(40, 140, 90)",
    arrange: "🏠 Arrange the home words in alphabetical order (A to Z)!",
    words: [
      ["Balcony", "Ban công"],
      ["Basement", "Tầng hầm"],
      ["Blanket", "Cái chăn"],
      ["Roof", "Mái nhà"],
      ["Shower", "Vòi hoa sen"],
      ["Stairs", "Cầu thang"],
      ["Toothbrush", "Bàn chải đánh răng"],
      ["Towel", "Khăn tắm"]
    ]
  },
  mHealth: {
    movers: true,
    label: "🤒 Health",
    color: "#ffe6e6",
    btnColor: "rgb(200, 50, 50)",
    arrange: "🤒 Arrange the health words in alphabetical order (A to Z)!",
    words: [
      ["Cough", "Ho"],
      ["Dentist", "Nha sĩ"],
      ["Earache", "Đau tai"],
      ["Headache", "Đau đầu"],
      ["Hospital", "Bệnh viện"],
      ["Medicine", "Thuốc"],
      ["Temperature", "Sốt"],
      ["Toothache", "Đau răng"]
    ]
  },
  mWeather: {
    movers: true,
    label: "🌦️ Weather",
    color: "#e3f1ff",
    btnColor: "rgb(50, 110, 200)",
    arrange: "🌦️ Arrange the weather words in alphabetical order (A to Z)!",
    words: [
      ["Cloud", "Đám mây"],
      ["Cloudy", "Nhiều mây"],
      ["Rain", "Mưa"],
      ["Rainbow", "Cầu vồng"],
      ["Snow", "Tuyết"],
      ["Sunny", "Có nắng"],
      ["Wind", "Gió"],
      ["Windy", "Có gió"]
    ]
  },
  mTown: {
    movers: true,
    label: "🏙️ Places",
    color: "#f1f1f1",
    btnColor: "rgb(90, 100, 120)",
    arrange: "🏙️ Arrange the places in alphabetical order (A to Z)!",
    words: [
      ["Bank", "Ngân hàng"],
      ["Cinema", "Rạp chiếu phim"],
      ["Library", "Thư viện"],
      ["Market", "Chợ"],
      ["Park", "Công viên"],
      ["Station", "Nhà ga"],
      ["Supermarket", "Siêu thị"],
      ["Zoo", "Sở thú"]
    ]
  },
  mNature: {
    movers: true,
    label: "🏞️ World Around Us",
    color: "#e4f7da",
    btnColor: "rgb(60, 140, 50)",
    arrange: "🏞️ Arrange the nature words in alphabetical order (A to Z)!",
    words: [
      ["Field", "Cánh đồng"],
      ["Forest", "Khu rừng"],
      ["Island", "Hòn đảo"],
      ["Lake", "Hồ nước"],
      ["Mountain", "Núi"],
      ["River", "Dòng sông"],
      ["Village", "Ngôi làng"],
      ["Waterfall", "Thác nước"]
    ]
  },

  // ----- Chủ đề khó (chỉ hiện ở chế độ Khó) -----
  ordinals: {
    hard: true,
    label: "🥇 Ordinals",
    color: "#e0d7ff",
    btnColor: "rgb(90, 60, 200)",
    arrange: "🥇 Arrange the ordinal numbers from first to twelfth!",
    words: [
      ["First", "Thứ nhất"], ["Second", "Thứ hai"], ["Third", "Thứ ba"],
      ["Fourth", "Thứ tư"], ["Fifth", "Thứ năm"], ["Sixth", "Thứ sáu"],
      ["Seventh", "Thứ bảy"], ["Eighth", "Thứ tám"], ["Ninth", "Thứ chín"],
      ["Tenth", "Thứ mười"], ["Eleventh", "Thứ mười một"], ["Twelfth", "Thứ mười hai"]
    ]
  },
  tens: {
    hard: true,
    label: "💯 Tens",
    color: "#d4f5f0",
    btnColor: "rgb(0, 130, 120)",
    arrange: "💯 Arrange the tens from smallest to largest!",
    words: [
      ["Ten", "Mười"], ["Twenty", "Hai mươi"], ["Thirty", "Ba mươi"],
      ["Forty", "Bốn mươi"], ["Fifty", "Năm mươi"], ["Sixty", "Sáu mươi"],
      ["Seventy", "Bảy mươi"], ["Eighty", "Tám mươi"], ["Ninety", "Chín mươi"],
      ["Hundred", "Một trăm"]
    ]
  },
  time: {
    hard: true,
    label: "⏳ Time",
    color: "#ffe6cc",
    btnColor: "rgb(160, 80, 20)",
    arrange: "⏳ Arrange the units of time from shortest to longest!",
    words: [
      ["Second", "Giây"], ["Minute", "Phút"], ["Hour", "Giờ"], ["Day", "Ngày"],
      ["Week", "Tuần"], ["Month", "Tháng"], ["Year", "Năm"],
      ["Decade", "Thập kỷ"], ["Century", "Thế kỷ"]
    ]
  },
  butterfly: {
    hard: true,
    label: "🦋 Life Cycle",
    color: "#e6f0ff",
    btnColor: "rgb(60, 110, 200)",
    arrange: "🦋 Arrange the life cycle of a butterfly!",
    words: [["Egg", "Trứng"], ["Caterpillar", "Sâu bướm"], ["Chrysalis", "Nhộng"], ["Butterfly", "Con bướm"]]
  },
  growing: {
    hard: true,
    label: "👶 Growing Up",
    color: "#fff0d9",
    btnColor: "rgb(200, 130, 30)",
    arrange: "👶 Arrange the stages of life from youngest to oldest!",
    words: [["Baby", "Em bé"], ["Toddler", "Trẻ mới biết đi"], ["Child", "Trẻ em"], ["Teenager", "Thiếu niên"], ["Adult", "Người lớn"], ["Elderly", "Người già"]]
  },
  bigNumbers: {
    hard: true,
    label: "🔟 Big Numbers",
    color: "#dff7e8",
    btnColor: "rgb(30, 140, 90)",
    arrange: "🔟 Arrange the numbers from smallest to biggest!",
    words: [["Hundred", "Một trăm"], ["Thousand", "Một nghìn"], ["Million", "Một triệu"], ["Billion", "Một tỷ"]]
  },
  length: {
    hard: true,
    label: "📏 Length",
    color: "#ececec",
    btnColor: "rgb(90, 90, 110)",
    arrange: "📏 Arrange the units of length from shortest to longest!",
    words: [["Millimeter", "Mi-li-mét"], ["Centimeter", "Xen-ti-mét"], ["Meter", "Mét"], ["Kilometer", "Ki-lô-mét"]]
  },
  waterCycle: {
    hard: true,
    label: "💧 Water Cycle",
    color: "#d6efff",
    btnColor: "rgb(20, 120, 190)",
    arrange: "💧 Arrange the steps of the water cycle!",
    words: [["Evaporation", "Bốc hơi"], ["Condensation", "Ngưng tụ"], ["Precipitation", "Mưa rơi"], ["Collection", "Tích tụ"]]
  },
  jobs: {
    hard: true,
    label: "👩‍⚕️ Jobs A-Z",
    color: "#f3e3ff",
    btnColor: "rgb(140, 60, 180)",
    arrange: "👩‍⚕️ Arrange the jobs in alphabetical order (A to Z)!",
    words: [["Artist", "Họa sĩ"], ["Baker", "Thợ làm bánh"], ["Chef", "Đầu bếp"], ["Dentist", "Nha sĩ"], ["Engineer", "Kỹ sư"], ["Farmer", "Nông dân"], ["Nurse", "Y tá"], ["Pilot", "Phi công"], ["Teacher", "Giáo viên"]]
  }
};

// Thiết lập theo cấp độ: Dễ (bé nhỏ) và Khó (bé 10 tuổi)
const MODES = {
  easy: { label: "🐣 Easy", arrangePts: 10, wordPts: 5, bonus: 20, hintCost: 2 },
  movers: { label: "📘 Movers", arrangePts: 15, wordPts: 8, bonus: 30, hintCost: 3 },
  hard: { label: "🦁 Hard", arrangePts: 20, wordPts: 10, bonus: 50, hintCost: 5 }
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
  win: $("win-sound")
};
sounds.success.volume = 0.6;
sounds.error.volume = 0.5;
sounds.win.volume = 0.7;

// ===== Trạng thái =====
let isMuted = false;
let musicOn = loadMusicSetting();
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
let selectedIndex = null;
let nextRoundTimer = null; // hẹn giờ chơi lại sau khi thắng // dùng cho chế độ chạm để đổi chỗ

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

function loadMusicSetting() {
  try { return localStorage.getItem("wa-music") !== "off"; } catch { return true; }
}

function loadMode() {
  try {
    const saved = localStorage.getItem("wa-mode");
    return MODES[saved] ? saved : "easy";
  } catch { return "easy"; }
}

function isMovers() {
  return mode === "movers";
}

// Chủ đề nào hiện ở cấp độ nào: Easy = cơ bản, Movers = chủ đề Movers, Hard = cơ bản + khó
function categoryVisible(cat) {
  if (isMovers()) return !!cat.movers;
  if (cat.movers) return false;
  return isHard() || !cat.hard;
}

function isHard() {
  return mode === "hard";
}

function saveBest() {
  try { localStorage.setItem("wa-best", String(best)); } catch {}
}

// ===== Điểm =====
function updateScoreBoard() {
  scoreBoard.textContent = `⭐ Score: ${score}`;
  bestBoard.textContent = `🏆 Best: ${best}`;
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
  if (!isMuted && musicOn) Music.start();
}

// ===== Phát âm =====
// Ưu tiên 1: giọng người thật thu âm sẵn (từ điển trực tuyến), tải trước theo chủ đề.
// Ưu tiên 2: giọng đọc chất lượng tốt nhất có trên máy.
const hasTTS = "speechSynthesis" in window;
const speechAudio = new Audio();
speechAudio.preload = "auto";
const recordings = {}; // từ -> đường dẫn file ("" = không có), hoặc Promise khi đang tải
let bestVoice = null;

// Chấm điểm giọng đọc: giọng "Natural/Neural/Enhanced" và giọng nổi tiếng tốt được ưu tiên,
// giọng máy móc (eSpeak, giọng vui nhộn của macOS...) bị loại.
function voiceScore(v) {
  if (!/^en[-_]/i.test(v.lang)) return -1000;
  const name = v.name.toLowerCase();
  let score = 0;
  if (/natural|neural|enhanced|premium|online/.test(name)) score += 50;
  if (/google us english|google uk english|samantha|\bava\b|allison|\baria\b|jenny|\bguy\b|serena|daniel|karen|moira/.test(name)) score += 30;
  if (/en[-_]us/i.test(v.lang)) score += 10;
  else if (/en[-_](gb|au)/i.test(v.lang)) score += 6;
  if (!v.localService) score += 5;
  if (/espeak|compact|novelty|bad news|bells|bubbles|cellos|jester|organ|trinoids|whisper|zarvox|albert|fred|junior|ralph|kathy|boing|bahh|superstar|wobble/.test(name)) score -= 200;
  return score;
}

function pickVoice() {
  if (!hasTTS) return;
  const voices = speechSynthesis.getVoices().filter((v) => voiceScore(v) > -100);
  voices.sort((a, b) => voiceScore(b) - voiceScore(a));
  bestVoice = voices[0] || null;
}
if (hasTTS) {
  pickVoice();
  speechSynthesis.addEventListener?.("voiceschanged", pickVoice);
}

function duckMusic(on) {
  Music.duck(on);
}

// Tải đường dẫn file thu âm của một từ (ưu tiên giọng Mỹ, rồi giọng Anh)
function fetchRecording(word) {
  const key = word.toLowerCase();
  if (key in recordings) return Promise.resolve(recordings[key]);
  const job = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(key)}`)
    .then((res) => (res.ok ? res.json() : []))
    .then((data) => {
      const all = (Array.isArray(data) ? data : [])
        .flatMap((e) => e.phonetics || [])
        .map((ph) => ph.audio)
        .filter(Boolean);
      const url = all.find((a) => /-us\.mp3/.test(a)) || all.find((a) => /-uk\.mp3/.test(a)) || all[0] || "";
      recordings[key] = url;
      return url;
    })
    .catch(() => {
      recordings[key] = "";
      return "";
    });
  recordings[key] = job;
  return job;
}

// Gọi khi bắt đầu một chủ đề để lúc bấm nghe là phát ngay
function preloadRecordings(words) {
  words.forEach((w) => fetchRecording(w));
}

// iPhone/iPad chỉ cho phát âm khi lệnh chạy ngay lúc người chơi bấm,
// nên "mở khóa" giọng đọc và âm thanh ở lần bấm đầu tiên.
let speechUnlocked = false;
function unlockSpeech() {
  if (speechUnlocked) return;
  speechUnlocked = true;
  try {
    speechAudio.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=";
    speechAudio.play().catch(() => {});
  } catch {}
  if (hasTTS) {
    const u = new SpeechSynthesisUtterance(" ");
    u.volume = 0;
    speechSynthesis.speak(u);
  }
}
document.addEventListener("pointerdown", unlockSpeech, { once: true });

function stopSpeaking() {
  speechAudio.pause();
  if (hasTTS && (speechSynthesis.speaking || speechSynthesis.pending)) speechSynthesis.cancel();
}

function playRecording(url, word) {
  stopSpeaking();
  duckMusic(true);
  speechAudio.src = url;
  speechAudio.onended = () => duckMusic(false);
  speechAudio.play().catch(() => {
    duckMusic(false);
    speakWithVoice(word);
  });
}

function speakWithVoice(word) {
  if (!hasTTS) return;
  if (!bestVoice) pickVoice();
  stopSpeaking();
  const u = new SpeechSynthesisUtterance(word);
  if (bestVoice) u.voice = bestVoice;
  u.lang = bestVoice ? bestVoice.lang : "en-US";
  u.rate = 0.85;
  u.volume = 1;
  u.onstart = () => duckMusic(true);
  u.onend = () => duckMusic(false);
  u.onerror = () => duckMusic(false);
  speechSynthesis.resume();
  speechSynthesis.speak(u);
}

function speak(word) {
  if (isMuted || !word) return;
  const known = recordings[word.toLowerCase()];
  if (typeof known === "string") {
    // Đã biết: có bản thu thì phát, không có thì dùng giọng máy
    if (known) playRecording(known, word);
    else speakWithVoice(word);
    return;
  }
  // Chưa biết: chờ tải tối đa 1,2 giây, quá thời gian thì dùng giọng máy
  let handled = false;
  const fallback = setTimeout(() => {
    handled = true;
    speakWithVoice(word);
  }, 1200);
  fetchRecording(word).then((url) => {
    if (handled) return;
    handled = true;
    clearTimeout(fallback);
    if (url) playRecording(url, word);
    else speakWithVoice(word);
  });
}

muteBtn.addEventListener("click", () => {
  isMuted = !isMuted;
  if (isMuted) {
    Music.stop();
    muteBtn.textContent = "🔇 Sound";
    muteBtn.classList.add("off");
  } else {
    muteBtn.classList.remove("off");
    startBackgroundMusic();
    muteBtn.textContent = "🔊 Sound";
  }
});
// Nút nhạc nền riêng: tắt nhạc mà vẫn nghe đọc từ và hiệu ứng
const musicBtn = $("music-btn");
function updateMusicButton() {
  musicBtn.textContent = musicOn ? "🎵 Music" : "🎵 Music";
  musicBtn.classList.toggle("off", !musicOn);
}
musicBtn.addEventListener("click", () => {
  musicOn = !musicOn;
  try { localStorage.setItem("wa-music", musicOn ? "on" : "off"); } catch {}
  if (musicOn) startBackgroundMusic();
  else Music.stop();
  updateMusicButton();
});
updateMusicButton();


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

let msgTimer = null;
function showMessage(type, text) {
  msgBox.textContent = text;
  msgBox.className = `show ${type}`;
  clearTimeout(msgTimer);
  msgTimer = setTimeout(clearMessage, text.startsWith("🏆") ? 4000 : 2800);
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
    b.classList.toggle("hidden", !categoryVisible(CATEGORIES[b.dataset.cat]));
  });
  // Cuộn hàng chủ đề để thấy chủ đề đang chọn
  const active = categoryButtons.querySelector("button.active");
  if (active) {
    categoryButtons.scrollTo({
      left: active.offsetLeft - categoryButtons.clientWidth / 2 + active.clientWidth / 2,
      behavior: "smooth"
    });
  }
}

// ===== Chọn cấp độ =====
Object.entries(MODES).forEach(([key, m]) => {
  const btn = document.createElement("button");
  btn.textContent = m.label;
  btn.dataset.mode = key;
  btn.addEventListener("click", () => setMode(key));
  modeButtons.appendChild(btn);
});

// Câu hướng dẫn thay đổi theo từng bước chơi
const TIPS = {
  choose: {
    movers: "📘 Cambridge Movers topics for Mây An. Choose one above!",
    easy: "👆 Choose a category above to start!", hard: "👆 Hard mode has 9 extra categories. Choose one above!" },
  arrange: {
    easy: "💡 Drag and drop, or tap 2 tiles to swap them. Then press Check Answer.",
    hard: "🦁 English words only! Drag and drop, or tap 2 tiles to swap them."
  },
  pick: {
    easy: "👆 Pick a word to spell.",
    hard: "👆 Pick a meaning, then type the English word for it."
  },
  spell: {
    easy: "🔤 Drag and drop, or tap 2 letters to swap them.",
    hard: "⌨️ Type the English word. Press Listen to hear it, or Hint if you get stuck."
  }
};
let stage = "choose";

function setStage(next) {
  stage = next;
  tip.textContent = TIPS[stage][mode] || TIPS[stage].easy;
}

function setMode(key) {
  mode = key;
  try { localStorage.setItem("wa-mode", key); } catch {}
  modeButtons.querySelectorAll("button").forEach((b) => {
    b.classList.toggle("active", b.dataset.mode === mode);
  });
  hintBtn.textContent = `💡 Hint (-${MODES[mode].hintCost})`;
  if (currentGame && !categoryVisible(CATEGORIES[currentGame])) {
    currentGame = "";
    container.innerHTML = "";
    wordPicker.innerHTML = "";
    checkContainer.classList.add("hidden");
    clearMessage();
    setTheme();
    subtitle.textContent = "🎮 Choose a category to begin!";
    setStage("choose");
  } else if (currentGame) {
    startCategory(currentGame);
  } else {
    setStage("choose");
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
  clearTimeout(nextRoundTimer);
  startBackgroundMusic();
  currentGame = key;
  preloadRecordings(englishOf(key));
  level = 1;
  currentOrder = shuffleArray(englishOf(key));
  selectedIndex = null;
  wordPicker.innerHTML = "";
  speakBtn.classList.add("hidden");
  hintBtn.classList.remove("hidden");
  clearMessage();
  setTheme();
  updateActiveButton();
  if (gameType !== "order") {
    checkContainer.classList.add("hidden");
    startMiniGame(key);
    return;
  }
  container.className = "";
  subtitle.textContent = CATEGORIES[key].arrange;
  checkContainer.classList.remove("hidden");
  setStage("arrange");
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
  subtitle.textContent = "📝 Choose a word to spell!";
  setStage("pick");

  currentWordList.forEach((word) => {
    const btn = document.createElement("button");
    btn.className = "pick-word-btn";
    btn.innerHTML = isHard() ? meaningOf(word) : `${word}<small>${meaningOf(word)}</small>`;
    btn.addEventListener("click", () => {
      currentWord = word;
      currentLetters = shuffleArray(word.split(""));
      selectedIndex = null;
      wordPicker.innerHTML = "";
      clearMessage();
      checkContainer.classList.remove("hidden");
      speakBtn.classList.remove("hidden");
      speak(word);
      setStage("spell");
      if (isHard()) {
        subtitle.textContent = `⌨️ Type the English word for "${meaningOf(word)}"`;
        renderTypingBox();
      } else {
        subtitle.textContent = `🔤 Arrange the letters to spell the word for "${meaningOf(word)}"`;
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
  input.placeholder = `${currentWord.length} letters...`;
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
    showMessage("success", `💡 Position ${i + 1} is "${correct[i]}"`);
  } else if (isHard()) {
    const input = $("spell-input");
    const typed = input.value.trim().toLowerCase();
    const word = currentWord.toLowerCase();
    let n = 0;
    while (n < typed.length && typed[n] === word[n]) n++;
    if (n >= word.length) return;
    input.value = currentWord.slice(0, n + 1);
    input.focus();
    showMessage("success", `💡 Letter ${n + 1} is "${currentWord[n].toUpperCase()}"`);
  } else {
    const correct = currentWord.split("");
    const i = currentLetters.findIndex((c, idx) => c !== correct[idx]);
    if (i === -1) return;
    const j = currentLetters.indexOf(correct[i], i);
    [currentLetters[i], currentLetters[j]] = [currentLetters[j], currentLetters[i]];
    renderLetters();
    showMessage("success", `💡 Letter ${i + 1} is "${correct[i].toUpperCase()}"`);
  }
  addScore(-MODES[mode].hintCost);
});

speakBtn.addEventListener("click", () => speak(currentWord));

// ===== Kiểm tra =====
$("check-btn").addEventListener("click", () => {
  startBackgroundMusic();
  if (level === 1) {
    if (currentOrder.join() === englishOf(currentGame).join()) {
      showMessage("success", "⭐ Great job, girls! Now choose a word to spell!");
      launchConfetti();
      play("success");
      addScore(MODES[mode].arrangePts);
      level = 2;
      showWordPicker(englishOf(currentGame));
    } else {
      showMessage("error", "😊 Almost there! Try again!");
      play("error");
    }
    return;
  }

  if (getSpellAnswer().toLowerCase() === currentWord.toLowerCase()) {
    showMessage("success", `⭐ Correct! ${currentWord} = ${meaningOf(currentWord)}`);
    launchConfetti();
    play("success");
    speak(currentWord);
    addScore(MODES[mode].wordPts);
    currentWordList = currentWordList.filter((w) => w !== currentWord);

    if (currentWordList.length > 0) {
      speakBtn.classList.add("hidden");
      showWordPicker(currentWordList);
    } else {
      showMessage("success", `🏆 Well done, Mây An & Hồng Thiên! You finished all the words! +${MODES[mode].bonus} points`);
      play("win");
      launchConfetti();
      addScore(MODES[mode].bonus);
      container.innerHTML = "";
      checkContainer.classList.add("hidden");
      nextRoundTimer = setTimeout(() => startCategory(currentGame), 4000);
    }
  } else {
    showMessage("error", "🥴 Oops, not quite! ❌ Try again!");
    play("error");
  }
});

// ===== Bắt đầu / chơi lại / làm mới =====
$("start-btn").addEventListener("click", () => {
  startBackgroundMusic();
  showMenu();
});

$("play-again-btn").addEventListener("click", () => {
  if (currentGame) startCategory(currentGame);
});

$("reset-btn").addEventListener("click", () => {
  if (!confirm("Are you sure you want to reset the game? Your score will go back to 0.")) return;
  clearTimeout(nextRoundTimer);
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
  menuScreen.classList.add("hidden");
  subtitle.textContent = "Put the words in the right order.";
  setStage("choose");
});

updateScoreBoard();
setMode(mode);
