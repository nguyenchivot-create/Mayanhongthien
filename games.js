// ===== Mục lục trò chơi và các trò chơi nhỏ =====
// Dùng chung dữ liệu, điểm, âm thanh và chế độ Easy/Hard từ script.js.

const GAMES = {
  order: { icon: "🔀", name: "Word Order", desc: "Put words in order, then spell them" },
  builder: { icon: "🧩", name: "Word Builder", desc: "Drag letters to build the word" },
  missing: { icon: "🔤", name: "Missing Letters", desc: "Find the missing letters" },
  quiz: { icon: "❓", name: "Word Quiz", desc: "Choose the right English word" },
  match: { icon: "🔗", name: "Word Match", desc: "Match words with their definitions" },
  memory: { icon: "🃏", name: "Memory Match", desc: "Match English and Vietnamese cards" }
};

const MINI_TIPS = {
  builder: {
    easy: "🧩 Drag the letters into the boxes, or tap a letter. Tap a box to take a letter back.",
    movers: "🧩 Watch out, 2 letters are extra! Drag the right letters into the boxes.",
    hard: "🧩 Some letters are extra! Drag the right letters into the boxes."
  },
  missing: {
    easy: "🔤 Tap the right letter to fill the blank.",
    movers: "🔤 Two letters are missing. Tap them in order!",
    hard: "🔤 Tap the letters in order to fill all the blanks."
  },
  quiz: {
    easy: "❓ Read the Vietnamese word, then tap the English word.",
    hard: "📖 Read the English definition, then tap the right word."
  },
  match: {
    easy: "🔗 Tap a word, then tap its Vietnamese meaning.",
    hard: "🔗 Tap a word, then tap its English definition."
  },
  memory: {
    easy: "🃏 Flip 2 cards. Match each English word with its Vietnamese meaning.",
    hard: "🃏 Flip 2 cards. Find all 8 pairs with as few moves as possible!"
  }
};
Object.assign(TIPS, MINI_TIPS);

const ROUND_SIZE = 10;
const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
let gameType = "order";
let round = null;

const menuScreen = $("menu-screen");
const gameMenu = $("game-menu");

// ----- Tiện ích -----
function mix(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function decoyLetters(exclude, count) {
  const pool = mix(ALPHABET.split("").filter((c) => !exclude.includes(c)));
  return pool.slice(0, count);
}

function otherWords(word, count) {
  const same = englishOf(round.key).filter((w) => w.toLowerCase() !== word.toLowerCase());
  let picks = mix(same).slice(0, count);
  if (picks.length < count) {
    const all = Object.values(CATEGORIES).flatMap((c) => c.words.map((w) => w[0]));
    const extra = mix([...new Set(all)].filter((w) => w !== word && !picks.includes(w)));
    picks = picks.concat(extra.slice(0, count - picks.length));
  }
  return picks;
}

function shake(el) {
  el.classList.remove("wrong");
  void el.offsetWidth;
  el.classList.add("wrong");
  clearTimeout(el._shakeTimer);
  el._shakeTimer = setTimeout(() => el.classList.remove("wrong"), 700);
}

function progressHtml() {
  return `<div class="mg-progress">Question ${round.index + 1} / ${round.words.length}</div>`;
}

function listenButton(word) {
  const btn = document.createElement("button");
  btn.className = "mg-listen";
  btn.textContent = "🔈 Listen";
  btn.addEventListener("click", () => speak(word));
  return btn;
}

// ----- Mục lục -----
Object.entries(GAMES).forEach(([key, g]) => {
  const btn = document.createElement("button");
  btn.className = "game-tile";
  btn.dataset.game = key;
  btn.innerHTML = `<span class="game-icon">${g.icon}</span><strong>${g.name}</strong><small>${g.desc}</small>`;
  btn.addEventListener("click", () => openGame(key));
  gameMenu.appendChild(btn);
});

function clearBoard() {
  clearTimeout(nextRoundTimer);
  round = null;
  currentGame = "";
  level = 1;
  container.innerHTML = "";
  container.className = "";
  wordPicker.innerHTML = "";
  checkContainer.classList.add("hidden");
  clearMessage();
  setTheme();
  updateActiveButton();
}

function showMenu() {
  clearBoard();
  startScreen.classList.add("hidden");
  gameArea.classList.add("hidden");
  menuScreen.classList.remove("hidden");
  subtitle.textContent = "🎲 Choose a game to play!";
}

function openGame(key) {
  gameType = key;
  clearBoard();
  menuScreen.classList.add("hidden");
  gameArea.classList.remove("hidden");
  subtitle.textContent = `${GAMES[key].icon} ${GAMES[key].name}: choose a category!`;
  setStage("choose");
  startBackgroundMusic();
}

$("menu-btn").addEventListener("click", showMenu);

// ----- Bắt đầu một vòng chơi nhỏ (gọi từ startCategory) -----
function startMiniGame(key) {
  container.className = "";
  round = { key, words: mix(CATEGORIES[key].words).slice(0, ROUND_SIZE), index: 0 };
  setStage(gameType);
  if (gameType === "memory") startMemory();
  else if (gameType === "match") startMatch();
  else nextQuestion(true);
}

function nextQuestion(first = false) {
  if (!first) round.index++;
  if (round.index >= round.words.length) return finishRound();
  clearMessage();
  const [en, vi] = round.words[round.index];
  if (gameType === "builder") renderBuilder(en, vi);
  if (gameType === "missing") renderMissing(en, vi);
  if (gameType === "quiz") renderQuiz(en, vi);
}

function answerCorrect(en) {
  showMessage("success", `⭐ Correct! ${en} = ${meaningOf(en)}`);
  play("success");
  speak(en);
  addScore(MODES[mode].wordPts);
  nextRoundTimer = setTimeout(() => nextQuestion(), 1400);
}

function answerWrong(el) {
  if (el) shake(el);
  play("error");
  showMessage("error", "🥴 Oops, not quite! Try again!");
}

function finishRound() {
  const key = round.key;
  container.innerHTML = `<div class="mg-done">🏆</div>`;
  showMessage("success", `🏆 Well done, Mây An & Hồng Thiên! Round complete! +${MODES[mode].bonus} points`);
  play("win");
  launchConfetti();
  addScore(MODES[mode].bonus);
  nextRoundTimer = setTimeout(() => startCategory(key), 4000);
}

// ===== 🧩 Word Builder: kéo thả chữ cái vào ô trống =====
function renderBuilder(en, vi) {
  subtitle.textContent = `🧩 Build the English word for "${vi}"`;
  const target = en.toLowerCase().split("");
  const extra = decoyLetters(target, isHard() ? 3 : isMovers() ? 2 : 0);
  const bank = mix([...target, ...extra]).map((ch, id) => ({ id, ch }));
  const slots = target.map(() => null); // mỗi ô chứa id của chữ cái trong bank
  let done = false;

  container.innerHTML = `${progressHtml()}
    <div class="mg-slots ${en.length > 9 ? "long" : ""}"></div>
    <div class="mg-bank"></div>`;
  container.querySelector(".mg-bank").after(listenButton(en));
  const slotsEl = container.querySelector(".mg-slots");
  const bankEl = container.querySelector(".mg-bank");

  function placeLetter(letterId, slotIndex) {
    if (done) return;
    const from = slots.indexOf(letterId);
    if (from !== -1) slots[from] = null;
    if (slotIndex === undefined) slotIndex = slots.indexOf(null);
    if (slotIndex === -1) return;
    const prev = slots[slotIndex];
    slots[slotIndex] = letterId;
    if (prev !== null && from !== -1) slots[from] = prev; // đổi chỗ 2 ô
    draw();
    checkBuilt();
  }

  function removeLetter(slotIndex) {
    if (done) return;
    slots[slotIndex] = null;
    draw();
  }

  function checkBuilt() {
    if (slots.includes(null)) return;
    const word = slots.map((id) => bank[id].ch).join("");
    if (word === target.join("")) {
      done = true;
      slotsEl.classList.add("right");
      answerCorrect(en);
    } else {
      answerWrong(slotsEl);
    }
  }

  function draw() {
    slotsEl.innerHTML = "";
    slots.forEach((id, i) => {
      const slot = document.createElement("div");
      slot.className = "mg-slot";
      slot.dataset.slot = i;
      if (id !== null) {
        slot.textContent = bank[id].ch.toUpperCase();
        slot.classList.add("filled");
        enableDrag(slot, id, () => removeLetter(i));
      }
      slotsEl.appendChild(slot);
    });
    bankEl.innerHTML = "";
    bank.forEach(({ id, ch }) => {
      const tile = document.createElement("div");
      tile.className = "mg-letter";
      if (slots.includes(id)) {
        tile.classList.add("used");
      } else {
        tile.textContent = ch.toUpperCase();
        enableDrag(tile, id, () => placeLetter(id));
      }
      bankEl.appendChild(tile);
    });
  }

  // Kéo bằng chuột hoặc ngón tay (Pointer Events chạy được cả trên điện thoại)
  function enableDrag(el, letterId, onTap) {
    el.addEventListener("pointerdown", (e) => {
      if (done) return;
      e.preventDefault();
      const startX = e.clientX;
      const startY = e.clientY;
      let ghost = null;

      const onMove = (ev) => {
        if (!ghost && Math.hypot(ev.clientX - startX, ev.clientY - startY) > 8) {
          ghost = el.cloneNode(true);
          ghost.classList.add("mg-ghost");
          document.body.appendChild(ghost);
          el.classList.add("dragging-src");
        }
        if (ghost) {
          ghost.style.left = `${ev.clientX}px`;
          ghost.style.top = `${ev.clientY}px`;
        }
      };

      const onUp = (ev) => {
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
        window.removeEventListener("pointercancel", onUp);
        if (!ghost) {
          onTap();
          return;
        }
        ghost.remove();
        el.classList.remove("dragging-src");
        const under = document.elementFromPoint(ev.clientX, ev.clientY);
        const slot = under && under.closest(".mg-slot");
        if (slot && slotsEl.contains(slot)) {
          placeLetter(letterId, Number(slot.dataset.slot));
        } else if (under && under.closest(".mg-bank") && slots.includes(letterId)) {
          removeLetter(slots.indexOf(letterId));
        }
      };

      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
      window.addEventListener("pointercancel", onUp);
    });
  }

  draw();
}

// ===== 🔤 Missing Letters: tìm chữ cái còn thiếu =====
function renderMissing(en, vi) {
  subtitle.textContent = `🔤 Find the missing letters for "${vi}"`;
  const letters = en.split("");
  const lower = en.toLowerCase();
  const candidates = mix(letters.map((_, i) => i).filter((i) => i > 0));
  const count = isHard()
    ? Math.min(candidates.length, Math.max(2, Math.round(en.length * 0.4)))
    : isMovers() ? Math.min(candidates.length, 2) : 1;
  const blanks = candidates.slice(0, count).sort((a, b) => a - b);
  const missing = blanks.map((i) => lower[i]);
  const choices = mix([...missing, ...decoyLetters(missing, 3)]);
  let filled = 0;

  container.innerHTML = `${progressHtml()}
    <div class="mg-word ${en.length > 9 ? "long" : ""}">${letters
      .map((c, i) => `<span class="mg-cell ${blanks.includes(i) ? "blank" : ""}" data-i="${i}">${blanks.includes(i) ? "_" : c.toUpperCase()}</span>`)
      .join("")}</div>
    <div class="mg-choices"></div>`;
  container.querySelector(".mg-choices").after(listenButton(en));
  const choicesEl = container.querySelector(".mg-choices");

  choices.forEach((ch) => {
    const btn = document.createElement("button");
    btn.className = "mg-choice";
    btn.textContent = ch.toUpperCase();
    btn.addEventListener("click", () => {
      if (filled >= blanks.length) return;
      if (ch === missing[filled]) {
        const cell = container.querySelector(`.mg-cell[data-i="${blanks[filled]}"]`);
        cell.textContent = ch.toUpperCase();
        cell.classList.replace("blank", "found");
        btn.disabled = true;
        filled++;
        if (filled === blanks.length) answerCorrect(en);
      } else {
        answerWrong(btn);
      }
    });
    choicesEl.appendChild(btn);
  });
}

// ===== ❓ Word Quiz: chọn từ tiếng Anh đúng =====
function renderQuiz(en, vi) {
  const options = mix([en, ...otherWords(en, 3)]);
  let answered = false;

  if (isHard()) {
    subtitle.textContent = "📖 Which word matches this definition?";
    container.innerHTML = `${progressHtml()}<div class="mg-meaning mg-def">📖 ${DEFINITIONS[round.key][en]}</div>
      <div class="mg-meaning mg-hidden">💡 Hint: ?</div><div class="mg-row"></div><div class="mg-options"></div>`;
    const hint = document.createElement("button");
    hint.className = "mg-hint";
    hint.textContent = `💡 Hint (-${MODES[mode].hintCost})`;
    hint.addEventListener("click", () => {
      const m = container.querySelector(".mg-meaning.mg-hidden");
      if (!m) return;
      m.textContent = `💡 Hint: ${vi}`;
      m.classList.remove("mg-hidden");
      addScore(-MODES[mode].hintCost);
    });
    container.querySelector(".mg-row").appendChild(hint);
  } else {
    subtitle.textContent = "❓ Which English word is it?";
    container.innerHTML = `${progressHtml()}<div class="mg-meaning big">${vi}</div><div class="mg-options"></div>`;
  }

  const optionsEl = container.querySelector(".mg-options");
  options.forEach((word) => {
    const btn = document.createElement("button");
    btn.className = "mg-option";
    btn.textContent = word;
    btn.addEventListener("click", () => {
      if (answered) return;
      if (word === en) {
        answered = true;
        btn.classList.add("right");
        answerCorrect(en);
      } else {
        btn.disabled = true;
        answerWrong(btn);
      }
    });
    optionsEl.appendChild(btn);
  });
}

// ===== 🃏 Memory Match: lật thẻ ghép cặp =====
function startMemory() {
  const pairs = mix(CATEGORIES[round.key].words).slice(0, isHard() || isMovers() ? 8 : 6);
  const cards = mix(pairs.flatMap(([en, vi], id) => [
    { id, text: en, lang: "en" },
    { id, text: vi, lang: "vi" }
  ]));
  const state = { open: [], matched: 0, moves: 0, lock: false };
  subtitle.textContent = "🃏 Find the matching pairs!";

  container.innerHTML = `<div class="mg-progress">Moves: <span id="mem-moves">0</span> · Pairs: <span id="mem-pairs">0</span> / ${pairs.length}</div><div class="mem-grid"></div>`;
  const grid = container.querySelector(".mem-grid");
  grid.classList.toggle("wide", cards.length > 12);

  cards.forEach((card) => {
    const el = document.createElement("button");
    el.className = `mem-card ${card.lang}`;
    el.innerHTML = `<span class="back">❓</span><span class="front">${card.text}</span>`;
    el.addEventListener("click", () => {
      if (state.lock || el.classList.contains("open")) return;
      el.classList.add("open");
      if (card.lang === "en") speak(card.text);
      state.open.push({ el, card });
      if (state.open.length < 2) return;

      state.moves++;
      $("mem-moves").textContent = state.moves;
      const [a, b] = state.open;
      state.open = [];
      if (a.card.id === b.card.id) {
        a.el.classList.add("matched");
        b.el.classList.add("matched");
        state.matched++;
        $("mem-pairs").textContent = state.matched;
        play("success");
        addScore(MODES[mode].wordPts);
        if (state.matched === pairs.length) {
          nextRoundTimer = setTimeout(finishRound, 900);
        }
      } else {
        state.lock = true;
        setTimeout(() => {
          a.el.classList.remove("open");
          b.el.classList.remove("open");
          state.lock = false;
        }, 1000);
      }
    });
    grid.appendChild(el);
  });
}

// ===== 🔗 Word Match: ghép từ với định nghĩa =====
function definitionOf(key, en) {
  return isHard() ? (DEFINITIONS[key] && DEFINITIONS[key][en]) || meaningOf(en) : meaningOf(en);
}

function startMatch() {
  const items = mix(CATEGORIES[round.key].words).slice(0, isHard() || isMovers() ? 6 : 5).map(([en]) => en);
  const defs = mix(items);
  let selectedWord = null;
  let matched = 0;
  subtitle.textContent = isHard()
    ? "🔗 Match each word with its definition!"
    : "🔗 Match each word with its meaning!";

  container.innerHTML = `<div class="mg-progress">Matched: <span id="match-count">0</span> / ${items.length}</div>
    <div class="match-board"><div class="match-col words"></div><div class="match-col defs"></div></div>`;
  const wordsCol = container.querySelector(".match-col.words");
  const defsCol = container.querySelector(".match-col.defs");

  items.forEach((en) => {
    const btn = document.createElement("button");
    btn.className = "match-item word-item";
    btn.textContent = en;
    btn.addEventListener("click", () => {
      if (btn.classList.contains("done")) return;
      wordsCol.querySelectorAll(".selected").forEach((b) => b.classList.remove("selected"));
      selectedWord = { en, btn };
      btn.classList.add("selected");
      speak(en);
    });
    wordsCol.appendChild(btn);
  });

  defs.forEach((en) => {
    const btn = document.createElement("button");
    btn.className = "match-item def-item";
    btn.textContent = definitionOf(round.key, en);
    btn.addEventListener("click", () => {
      if (btn.classList.contains("done")) return;
      if (!selectedWord) {
        shake(btn);
        showMessage("error", "👈 Tap a word first!");
        return;
      }
      if (selectedWord.en === en) {
        const color = `hsl(${(matched * 67) % 360} 70% 85%)`;
        [btn, selectedWord.btn].forEach((b) => {
          b.classList.remove("selected");
          b.classList.add("done");
          b.style.background = color;
        });
        matched++;
        $("match-count").textContent = matched;
        selectedWord = null;
        play("success");
        addScore(MODES[mode].wordPts);
        showMessage("success", `⭐ Correct! ${en} = ${meaningOf(en)}`);
        if (matched === items.length) nextRoundTimer = setTimeout(finishRound, 900);
      } else {
        answerWrong(btn);
      }
    });
    defsCol.appendChild(btn);
  });
}
