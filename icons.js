// ===== Biểu tượng minh họa cho từ vựng (chỉ hiện ở cấp Easy) =====
// Từ không có hình minh họa rõ ràng (như các ngày trong tuần) thì để trống.
const ICONS = {
  months: {
    January: "❄️", February: "💝", March: "🌱", April: "🌷", May: "🌸", June: "☀️",
    July: "🏖️", August: "🍉", September: "🎒", October: "🎃", November: "🍂", December: "🎄"
  },
  planets: {
    Mercury: "🌑", Venus: "🟡", Earth: "🌍", Mars: "🔴",
    Jupiter: "🟠", Saturn: "🪐", Uranus: "🟢", Neptune: "🔵"
  },
  colors: {
    Red: "🔴", Orange: "🟠", Yellow: "🟡", Green: "🟢", Blue: "🔵", Indigo: "🟦", Violet: "🟣"
  },
  numbers: {
    One: "1️⃣", Two: "2️⃣", Three: "3️⃣", Four: "4️⃣", Five: "5️⃣",
    Six: "6️⃣", Seven: "7️⃣", Eight: "8️⃣", Nine: "9️⃣", Ten: "🔟"
  },
  seasons: { Spring: "🌸", Summer: "☀️", Autumn: "🍂", Winter: "⛄" },
  dayTime: { Morning: "🌅", Noon: "🕛", Afternoon: "🌤️", Evening: "🌇", Night: "🌙" },
  body: { Hair: "💇", Eyes: "👀", Nose: "👃", Teeth: "🦷", Shoulders: "🤷", Feet: "🦶" },
  animals: { Ant: "🐜", Mouse: "🐭", Cat: "🐱", Dog: "🐶", Horse: "🐴", Elephant: "🐘", Whale: "🐳" },
  fruits: {
    Apple: "🍎", Banana: "🍌", Cherry: "🍒", Grape: "🍇",
    Lemon: "🍋", Mango: "🥭", Orange: "🍊", Peach: "🍑"
  }
};

// Trả về biểu tượng của từ trong chủ đề đang chơi (chỉ ở cấp Easy)
function iconOf(word, key = currentGame) {
  if (mode !== "easy" || !key || !ICONS[key]) return "";
  return ICONS[key][word] || "";
}

// Gắn biểu tượng phía trước chữ, nếu có
function withIcon(word, text = word, key = currentGame) {
  const icon = iconOf(word, key);
  return icon ? `<span class="word-icon">${icon}</span> ${text}` : text;
}
