// ===== Giữ âm thanh luôn hoạt động trên iPhone/iPad =====
// - audioSession "playback": âm thanh của trang không bị công tắc im lặng tắt (iOS 17+)
// - Phát một đoạn âm thanh im lặng chạy nền để giữ kênh âm thanh mở
// - Mỗi lần chạm màn hình thì "đánh thức" lại các bộ phát âm thanh
try { if (navigator.audioSession) navigator.audioSession.type = "playback"; } catch {}
const audioKeeper = new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAESsAABErAAABAAgAZGF0YQQAAACAgICA");
audioKeeper.loop = true;
audioKeeper.volume = 0.01;
const audioContexts = [];
function wakeAudio() {
  if (typeof isMuted === "undefined" || !isMuted) audioKeeper.play().catch(() => {});
  audioContexts.forEach((c) => { if (c.state !== "running") c.resume().catch(() => {}); });
  try { if (window.speechSynthesis && speechSynthesis.paused) speechSynthesis.resume(); } catch {}
}
["pointerdown", "touchend", "keydown"].forEach((ev) => document.addEventListener(ev, wakeAudio, true));
document.addEventListener("visibilitychange", () => { if (!document.hidden) wakeAudio(); });

// ===== Hiệu ứng âm thanh vui tai, tạo bằng Web Audio (không cần file) =====
// Tắt cùng nút Sound (biến isMuted trong script.js).
const SFX = (() => {
  let ctx = null;
  let out = null;

  function ready() {
    if (typeof isMuted !== "undefined" && isMuted) return false;
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return false;
      ctx = new AC();
      audioContexts.push(ctx);
      out = ctx.createGain();
      out.gain.value = 0.5;
      out.connect(ctx.destination);
    }
    if (ctx.state === "suspended") ctx.resume();
    return true;
  }

  // Một nốt ngắn, tần số có thể trượt từ f1 sang f2
  function blip(f1, f2, dur, type = "sine", level = 0.3, delay = 0) {
    const t = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(f1, t);
    osc.frequency.exponentialRampToValueAtTime(f2, t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(level, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(g).connect(out);
    osc.start(t);
    osc.stop(t + dur + 0.02);
  }

  function noise(dur, from, to, level = 0.2) {
    const t = ctx.currentTime;
    const buf = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    const f = ctx.createBiquadFilter();
    const g = ctx.createGain();
    src.buffer = buf;
    f.type = "bandpass";
    f.frequency.setValueAtTime(from, t);
    f.frequency.exponentialRampToValueAtTime(to, t + dur);
    g.gain.setValueAtTime(level, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f).connect(g).connect(out);
    src.start(t);
  }

  const sounds = {
    tap: () => blip(620, 900, 0.07, "sine", 0.18),               // pốp
    open: () => { blip(400, 800, 0.12, "sine", 0.2); blip(600, 1200, 0.12, "sine", 0.12, 0.06); }, // bong bóng
    select: () => { blip(880, 880, 0.18, "triangle", 0.22); blip(1320, 1320, 0.25, "triangle", 0.16, 0.08); }, // ting
    pick: () => blip(500, 760, 0.08, "square", 0.06),            // nhấc lên
    drop: () => { blip(300, 140, 0.09, "triangle", 0.3); noise(0.05, 2000, 800, 0.08); }, // cạch
    flip: () => noise(0.16, 600, 3000, 0.18),                     // vút
    sparkle: () => [1568, 2093, 2637, 3136].forEach((f, i) => blip(f, f, 0.14, "sine", 0.12, i * 0.06)), // lấp lánh
    whoosh: () => { noise(0.25, 300, 2500, 0.15); blip(300, 700, 0.2, "sine", 0.08); } // vèo
  };

  function play(name) {
    try {
      if (ready() && sounds[name]) sounds[name]();
    } catch {}
  }

  return { play };
})();

// Mọi nút bấm đều có tiếng "pốp" nhẹ, trừ các nút đã có âm thanh riêng
document.addEventListener("pointerdown", (e) => {
  const b = e.target.closest("button");
  if (!b || b.disabled) return;
  if (b.closest("#bc-panel") || b.matches(".bc-step, .mem-card, #hint-btn, .result-next, .result-again")) return;
  SFX.play("tap");
}, true);
