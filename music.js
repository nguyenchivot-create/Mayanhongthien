// ===== Nhạc nền vui tươi, tạo trực tiếp bằng Web Audio (không cần file nhạc) =====
// Giai điệu kiểu marimba trên vòng hợp âm C - G - Am - F, nhịp nhanh vừa phải.
const Music = (() => {
  const VOLUME = 0.35;      // âm lượng tổng của nhạc nền (0 đến 1)
  const DUCK_VOLUME = 0.08; // khi đang đọc từ
  const BPM = 116;
  const STEP = 60 / BPM / 2; // mỗi bước là một nốt móc đơn

  // Vòng hợp âm: mỗi hợp âm kéo dài 8 bước (1 ô nhịp)
  const CHORDS = [
    [60, 64, 67], // C
    [55, 59, 62], // G
    [57, 60, 64], // Am
    [53, 57, 60]  // F
  ];

  // Hai câu nhạc xen kẽ, mỗi câu 32 bước (null = nghỉ)
  const MELODIES = [
    [72, null, 76, 79, 76, null, 74, 72,  71, null, 74, 79, 74, null, 72, 71,
     72, null, 76, 72, 69, null, 72, 76,  77, null, 76, 74, 72, null, null, null],
    [79, null, 77, 76, 74, null, 76, 72,  74, null, 71, 74, 79, null, 74, 71,
     76, null, 72, 76, 81, null, 79, 76,  77, 76, 74, 72, 74, null, 72, null]
  ];

  let ctx = null;
  let master = null;
  let noise = null;
  let timer = null;
  let nextTime = 0;
  let step = 0;

  const freq = (midi) => 440 * Math.pow(2, (midi - 69) / 12);

  function init() {
    if (ctx) return true;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = VOLUME;
    master.connect(ctx.destination);
    // Tiếng "xào xạc" nhẹ cho nhịp
    noise = ctx.createBuffer(1, ctx.sampleRate * 0.05, ctx.sampleRate);
    const data = noise.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    return true;
  }

  function tone(f, time, dur, type, level) {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.value = f;
    g.gain.setValueAtTime(0.0001, time);
    g.gain.exponentialRampToValueAtTime(level, time + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, time + dur);
    osc.connect(g).connect(master);
    osc.start(time);
    osc.stop(time + dur + 0.05);
  }

  // Tiếng marimba: âm cơ bản + bồi âm cao tắt nhanh
  function marimba(midi, time) {
    tone(freq(midi), time, 0.45, "sine", 0.22);
    tone(freq(midi) * 4, time, 0.08, "sine", 0.04);
  }

  function shaker(time, level) {
    const src = ctx.createBufferSource();
    const filter = ctx.createBiquadFilter();
    const g = ctx.createGain();
    src.buffer = noise;
    filter.type = "highpass";
    filter.frequency.value = 7000;
    g.gain.value = level;
    src.connect(filter).connect(g).connect(master);
    src.start(time);
  }

  function scheduleStep(s, time) {
    const pos = s % 32;
    const chord = CHORDS[Math.floor(pos / 8)];
    const melody = MELODIES[Math.floor(s / 32) % MELODIES.length];

    // Bè trầm vào phách 1 và 3
    if (pos % 8 === 0) tone(freq(chord[0] - 12), time, 0.5, "triangle", 0.2);
    if (pos % 8 === 4) tone(freq(chord[0] - 12 + 7), time, 0.4, "triangle", 0.14);
    // Hợp âm nảy nhẹ vào phách 2 và 4
    if (pos % 4 === 2) chord.forEach((m) => tone(freq(m), time, 0.18, "triangle", 0.035));
    // Giai điệu
    if (melody[pos] !== null) marimba(melody[pos], time);
    // Nhịp xào xạc
    shaker(time, pos % 2 ? 0.05 : 0.025);
  }

  function tick() {
    while (nextTime < ctx.currentTime + 0.12) {
      scheduleStep(step, nextTime);
      nextTime += STEP;
      step++;
    }
  }

  return {
    start() {
      if (!init()) return;
      if (ctx.state === "suspended") ctx.resume();
      if (timer) return;
      step = 0;
      nextTime = ctx.currentTime + 0.05;
      timer = setInterval(tick, 25);
    },
    stop() {
      clearInterval(timer);
      timer = null;
    },
    duck(on) {
      if (!ctx) return;
      master.gain.setTargetAtTime(on ? DUCK_VOLUME : VOLUME, ctx.currentTime, 0.08);
    }
  };
})();
