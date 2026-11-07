// ===== Toàn bộ âm thanh của game (hiệu ứng + nhạc nền) =====
// Không dùng Web Audio (hay bị iPhone/iPad chặn). Các tiếng được tạo thành file WAV
// ngay trong trình duyệt rồi phát bằng thẻ audio thường, được "mở khóa" ở lần chạm đầu.

// Báo cho iPhone (iOS 17+) biết đây là âm thanh phát chủ động
try { if (navigator.audioSession) navigator.audioSession.type = "playback"; } catch {}

const RATE = 22050;

// Nhật ký âm thanh để màn "Sound check" hiển thị
const soundLogLines = [];
function soundLog(msg) {
  soundLogLines.push(new Date().toTimeString().slice(0, 8) + "  " + msg);
  if (soundLogLines.length > 14) soundLogLines.shift();
}

// ---------- Tạo file WAV từ dãy mẫu ----------
function wavUrl(samples, rate = RATE) {
  const n = samples.length;
  const buf = new ArrayBuffer(44 + n * 2);
  const v = new DataView(buf);
  const tag = (o, s) => { for (let i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)); };
  tag(0, "RIFF"); v.setUint32(4, 36 + n * 2, true); tag(8, "WAVE"); tag(12, "fmt ");
  v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
  v.setUint32(24, rate, true); v.setUint32(28, rate * 2, true); v.setUint16(32, 2, true);
  v.setUint16(34, 16, true); tag(36, "data"); v.setUint32(40, n * 2, true);
  for (let i = 0; i < n; i++) v.setInt16(44 + i * 2, Math.max(-1, Math.min(1, samples[i])) * 32767, true);
  return URL.createObjectURL(new Blob([buf], { type: "audio/wav" }));
}

// ---------- Bộ tổng hợp âm thanh đơn giản ----------
function addTone(buf, start, dur, f1, f2, type, level, wrap = false) {
  const s0 = Math.floor(start * RATE);
  const n = Math.floor(dur * RATE);
  const k = Math.log(level / 0.0001) / Math.max(dur - 0.01, 0.001);
  let phase = 0;
  for (let i = 0; i < n; i++) {
    const t = i / RATE;
    phase += (2 * Math.PI * f1 * Math.pow(f2 / f1, t / dur)) / RATE;
    const o = type === "sine" ? Math.sin(phase)
      : type === "triangle" ? (2 / Math.PI) * Math.asin(Math.sin(phase))
      : Math.sin(phase) >= 0 ? 1 : -1;
    const env = t < 0.01 ? level * (t / 0.01) : level * Math.exp(-k * (t - 0.01));
    let idx = s0 + i;
    if (wrap) idx %= buf.length; else if (idx >= buf.length) break;
    buf[idx] += o * env;
  }
}

// Tiếng xì lọc băng tần (bộ lọc trạng thái-biến)
function addNoise(buf, start, dur, fFrom, fTo, level) {
  const s0 = Math.floor(start * RATE);
  const n = Math.floor(dur * RATE);
  let low = 0, band = 0;
  for (let i = 0; i < n && s0 + i < buf.length; i++) {
    const t = i / RATE;
    const fc = fFrom * Math.pow(fTo / fFrom, t / dur);
    const f = 2 * Math.sin((Math.PI * fc) / RATE);
    low += f * band;
    const high = (Math.random() * 2 - 1) - low - 0.5 * band;
    band += f * high;
    buf[s0 + i] += band * level * Math.exp((-5 * t) / dur);
  }
}

// ---------- Registry: các thẻ audio cần "mở khóa" bằng thao tác chạm ----------
const SILENT_URL = wavUrl(new Float32Array(Math.floor(RATE * 0.2)));
const unlockables = [];
function registerAudio(el) {
  if (el && !unlockables.includes(el)) unlockables.push(el);
}

function unlockAudio() {
  unlockables.forEach((el) => {
    if (!el.paused) { el._ok = true; return; } // đang phát được nghĩa là đã mở khóa
    if (el._ok || el._u) return;
    const saved = el.src;
    el._u = true;
    el.src = SILENT_URL;
    const p = el.play();
    const restore = (ok) => {
      el.pause();
      el.src = saved;
      el._u = false;
      if (ok) el._ok = true;
      try { el.load(); } catch {}
      if (ok && el._after) el._after();
    };
    if (p && p.then) p.then(() => restore(true)).catch(() => restore(false));
    else restore(true);
  });
}
// Chỉ các sự kiện "nhả tay" mới được iPhone tính là thao tác của người dùng
["touchend", "click", "pointerup", "keydown"].forEach((ev) => document.addEventListener(ev, unlockAudio, true));
document.addEventListener("visibilitychange", () => {
  if (document.hidden) return;
  unlockables.forEach((el) => { el._ok = false; });
});

// ---------- Hiệu ứng âm thanh ----------
const SFX = (() => {
  const GAIN = 0.6;
  const defs = {
    tap: [0.1, (b) => addTone(b, 0, 0.07, 620, 900, "sine", 0.18)],
    open: [0.25, (b) => { addTone(b, 0, 0.12, 400, 800, "sine", 0.2); addTone(b, 0.06, 0.12, 600, 1200, "sine", 0.12); }],
    select: [0.4, (b) => { addTone(b, 0, 0.18, 880, 880, "triangle", 0.22); addTone(b, 0.08, 0.25, 1320, 1320, "triangle", 0.16); }],
    pick: [0.12, (b) => addTone(b, 0, 0.08, 500, 760, "square", 0.06)],
    drop: [0.15, (b) => { addTone(b, 0, 0.09, 300, 140, "triangle", 0.3); addNoise(b, 0, 0.05, 2000, 800, 0.08); }],
    flip: [0.2, (b) => addNoise(b, 0, 0.16, 600, 3000, 0.18)],
    sparkle: [0.6, (b) => [1568, 2093, 2637, 3136].forEach((f, i) => addTone(b, i * 0.06, 0.14, f, f, "sine", 0.12))],
    whoosh: [0.35, (b) => { addNoise(b, 0, 0.25, 300, 2500, 0.15); addTone(b, 0, 0.2, 300, 700, "sine", 0.08); }]
  };
  const els = {};
  Object.entries(defs).forEach(([name, [dur, fn]]) => {
    const buf = new Float32Array(Math.floor(RATE * dur));
    fn(buf);
    for (let i = 0; i < buf.length; i++) buf[i] *= GAIN;
    const el = new Audio();
    el.preload = "auto";
    el.src = wavUrl(buf);
    registerAudio(el);
    els[name] = el;
  });

  return {
    play(name) {
      const el = els[name];
      if (!el || el._u || (typeof isMuted !== "undefined" && isMuted)) return;
      try { el.currentTime = 0; } catch {}
      const p = el.play();
      if (p && p.catch) p.catch(() => {});
    },
    debug() {
      return Object.fromEntries(Object.entries(els).map(([n, e]) => [n, { dur: +e.duration.toFixed(2), err: !!e.error, ok: !!e._ok }]));
    }
  };
})();

// Mọi nút bấm đều có tiếng "pốp" nhẹ, trừ các nút đã có âm thanh riêng
document.addEventListener("pointerdown", (e) => {
  const b = e.target.closest("button");
  if (!b || b.disabled) return;
  if (b.closest("#bc-panel") || b.matches(".bc-step, .mem-card, #hint-btn, .result-next, .result-again")) return;
  SFX.play("tap");
}, true);

// ---------- Nhạc nền vui tươi (giai điệu kiểu marimba, vòng hợp âm C - G - Am - F) ----------
const Music = (() => {
  const PEAK = 0.15;      // độ to của nhạc (iPhone không chỉnh được volume nên đã cài sẵn vào file)
  const BPM = 116;
  const STEP = 60 / BPM / 2;
  const CHORDS = [[60, 64, 67], [55, 59, 62], [57, 60, 64], [53, 57, 60]];
  const MELODIES = [
    [72, null, 76, 79, 76, null, 74, 72, 71, null, 74, 79, 74, null, 72, 71,
     72, null, 76, 72, 69, null, 72, 76, 77, null, 76, 74, 72, null, null, null],
    [79, null, 77, 76, 74, null, 76, 72, 74, null, 71, 74, 79, null, 74, 71,
     76, null, 72, 76, 81, null, 79, 76, 77, 76, 74, 72, 74, null, 72, null]
  ];
  const freq = (m) => 440 * Math.pow(2, (m - 69) / 12);

  let el = null;
  let wanted = false;
  let duckTimer = null;
  const volumeWorks = (() => { const a = new Audio(); a.volume = 0.5; return a.volume === 0.5; })();

  function render() {
    const buf = new Float32Array(Math.round(64 * STEP * RATE));
    for (let s = 0; s < 64; s++) {
      const t = s * STEP;
      const pos = s % 32;
      const chord = CHORDS[Math.floor(pos / 8)];
      const melody = MELODIES[Math.floor(s / 32) % 2];
      if (pos % 8 === 0) addTone(buf, t, 0.5, freq(chord[0] - 12), freq(chord[0] - 12), "triangle", 0.2, true);
      if (pos % 8 === 4) addTone(buf, t, 0.4, freq(chord[0] - 5), freq(chord[0] - 5), "triangle", 0.14, true);
      if (pos % 4 === 2) chord.forEach((m) => addTone(buf, t, 0.18, freq(m), freq(m), "triangle", 0.035, true));
      if (melody[pos] !== null) {
        addTone(buf, t, 0.45, freq(melody[pos]), freq(melody[pos]), "sine", 0.22, true);
        addTone(buf, t, 0.08, freq(melody[pos]) * 4, freq(melody[pos]) * 4, "sine", 0.04, true);
      }
      // nhịp xào xạc
      const lvl = pos % 2 ? 0.05 : 0.025;
      let prev = 0;
      const n = Math.floor(0.05 * RATE);
      const s0 = Math.floor(t * RATE);
      for (let i = 0; i < n; i++) {
        const x = Math.random() * 2 - 1;
        buf[(s0 + i) % buf.length] += (x - prev) * lvl * 0.5 * Math.exp((-6 * i) / n);
        prev = x;
      }
    }
    let peak = 0;
    for (let i = 0; i < buf.length; i++) peak = Math.max(peak, Math.abs(buf[i]));
    const k = peak ? PEAK / peak : 1;
    for (let i = 0; i < buf.length; i++) buf[i] *= k;
    return buf;
  }

  function init() {
    if (el) return;
    el = new Audio();
    el.loop = true;
    el.preload = "auto";
    el.src = wavUrl(render());
    registerAudio(el);
    // Mở khóa xong mà game đang cần nhạc thì phát luôn
    el._after = () => { if (wanted) el.play().catch(() => {}); };
  }

  // Tạo sẵn file nhạc lúc trình duyệt rảnh để lúc bấm Start là phát ngay
  (window.requestIdleCallback || ((f) => setTimeout(f, 400)))(init);

  // Nếu lệnh phát bị chặn (chưa có thao tác chạm), thử lại ở lần chạm sau
  ["touchend", "click"].forEach((ev) => document.addEventListener(ev, () => {
    if (wanted && el && el.paused && !el._u) el.play().catch(() => {});
  }, true));

  return {
    start() {
      wanted = true;
      init();
      if (el._u) return;
      el.play().catch(() => {});
    },
    stop() {
      wanted = false;
      if (el) el.pause();
    },
    // Hạ nhỏ (hoặc tạm dừng trên iPhone) khi game đang đọc từ
    duck(on) {
      clearTimeout(duckTimer);
      if (!el) return;
      if (volumeWorks) el.volume = on ? 0.25 : 1;
      else if (on) el.pause();
      else if (wanted && !el._u) el.play().catch(() => {});
      if (on) duckTimer = setTimeout(() => Music.duck(false), 6000);
    },
    debug() {
      return el ? { paused: el.paused, t: +el.currentTime.toFixed(2), dur: +el.duration.toFixed(1), err: !!el.error, wanted } : null;
    }
  };
})();
