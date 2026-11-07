// ===== Màn "Sound check": tự kiểm tra từng lớp âm thanh ngay trên thiết bị =====
(() => {
  const panel = document.createElement("div");
  panel.id = "sc-panel";
  panel.className = "hidden";
  panel.innerHTML = `
    <div class="sc-card">
      <div class="sc-head"><b>🔧 Sound check</b><button id="sc-close">✕</button></div>
      <div class="sc-tests"></div>
      <div class="sc-info" id="sc-info"></div>
      <div class="sc-log" id="sc-log"></div>
    </div>`;
  document.body.appendChild(panel);

  const tests = [
    ["1. Effect (ting)", (done) => { SFX.play("select"); done("sent. Did you hear a bell?"); }],
    ["2. Music", (done) => {
      Music.start();
      setTimeout(() => { const d = Music.debug(); done(d && !d.paused && d.t > 0 ? `playing (${d.t}s)` : "NOT playing", d && !d.paused && d.t > 0); }, 1500);
    }],
    ["3. Recorded voice", (done) => {
      fetchRecording("apple").then((url) => {
        if (!url) return done("no recording found (no internet?)", false);
        playClip(url, () => done("FAILED to play", false), () => done("playing"));
      });
    }],
    ["4. Online voice", (done) => playClip(googleTtsUrl("apple"), () => done("FAILED to play", false), () => done("playing"))],
    ["5. Device voice", (done) => speakWithVoice("apple", true, (ok) => done(ok ? "playing" : "NOT started", ok))]
  ];

  const list = panel.querySelector(".sc-tests");
  tests.forEach(([label, run]) => {
    const row = document.createElement("div");
    row.className = "sc-row";
    row.innerHTML = `<button>${label}</button><span class="sc-res">tap to test</span>`;
    const res = row.querySelector(".sc-res");
    row.querySelector("button").addEventListener("click", () => {
      res.className = "sc-res";
      res.textContent = "testing...";
      run((text, ok = true) => {
        res.textContent = (ok ? "✅ " : "❌ ") + text;
        res.classList.add(ok ? "good" : "bad");
        refresh();
      });
    });
    list.appendChild(row);
  });

  function refresh() {
    const un = typeof unlockables !== "undefined" ? unlockables : [];
    const voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
    const rows = [
      ["Sound button", isMuted ? "OFF 🔇" : "ON 🔊"],
      ["Music setting", musicOn ? "ON" : "OFF"],
      ["audioSession", navigator.audioSession ? navigator.audioSession.type : "not supported"],
      ["Unlocked audio", `${un.filter((e) => e._ok).length} / ${un.length}`],
      ["Speech voices", `${voices.length}${bestVoice ? " (using " + bestVoice.name + ")" : " (none chosen)"}`]
    ];
    $("sc-info").innerHTML = rows.map(([a, b]) => `<div><span>${a}</span><b>${b}</b></div>`).join("");
    $("sc-log").textContent = soundLogLines.slice(-8).join("\n") || "(log is empty)";
  }

  function open() { panel.classList.remove("hidden"); refresh(); }
  function close() { panel.classList.add("hidden"); }
  $("sc-close").addEventListener("click", close);
  panel.addEventListener("click", (e) => { if (e.target === panel) close(); });
  const link = document.getElementById("sc-open");
  if (link) link.addEventListener("click", open);
})();
