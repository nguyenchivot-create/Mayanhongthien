// ===== Biểu tượng minh họa cho từ vựng (chỉ hiện ở cấp Easy) =====
// Từ không có hình minh họa rõ ràng (như các ngày trong tuần) thì để trống.
const ICONS = {
  sWild: { Bear: "🐻", Elephant: "🐘", Frog: "🐸", Giraffe: "🦒", Monkey: "🐒", Snake: "🐍", Spider: "🕷️", Tiger: "🐯" },
  sTransport: { Bike: "🚲", Boat: "⛵", Bus: "🚌", Car: "🚗", Helicopter: "🚁", Plane: "✈️", Train: "🚂", Truck: "🚚" },
  sWeather: { Cloud: "☁️", Cold: "🥶", Hot: "🥵", Rain: "🌧️", Rainbow: "🌈", Snow: "❄️", Sun: "☀️", Wind: "💨" },
  sSports: { Baseball: "⚾", Basketball: "🏀", Cycling: "🚴", Football: "⚽", Running: "🏃", Skating: "⛸️", Swimming: "🏊", Tennis: "🎾" },
  sDescribe: { Big: "🐘", Happy: "😀", Long: "📏", New: "✨", Old: "👴", Sad: "😢", Short: "🤏", Small: "🐜", Tall: "🦒", Young: "👶" },
  sActions: { Dance: "💃", Draw: "🎨", Eat: "🍽️", Jump: "🤸", Read: "📖", Run: "🏃", Sing: "🎤", Swim: "🏊" },
  sPlaces: { Beach: "🏖️", Farm: "🐄", Garden: "🌷", Park: "🌳", Playground: "🎠", Shop: "🛍️", Street: "🛣️", Zoo: "🦁" },
  sFruit: { Apple: "🍎", Banana: "🍌", Carrot: "🥕", Grape: "🍇", Lemon: "🍋", Orange: "🍊", Potato: "🥔", Tomato: "🍅" },
  sAnimals: { Bird: "🐦", Chicken: "🐔", Cow: "🐮", Duck: "🦆", Fish: "🐟", Goat: "🐐", Horse: "🐴", Sheep: "🐑" },
  sToys: { Ball: "⚽", Bike: "🚲", Car: "🚗", Doll: "🪆", Kite: "🪁", Robot: "🤖", Teddy: "🧸", Train: "🚂" },
  sSchool: { Bag: "🎒", Book: "📕", Crayon: "🖍️", Eraser: "🧽", Pen: "🖊️", Pencil: "✏️", Ruler: "📏" },
  sFood: { Bread: "🍞", Burger: "🍔", Cake: "🍰", Egg: "🥚", Juice: "🧃", Milk: "🥛", Rice: "🍚", Water: "💧" },
  sBody: { Arm: "💪", Ear: "👂", Eye: "👁️", Face: "🙂", Hand: "✋", Head: "🧑", Leg: "🦵", Mouth: "👄" },
  sClothes: { Dress: "👗", Hat: "👒", Jacket: "🧥", Shirt: "👔", Shoes: "👟", Socks: "🧦", Trousers: "👖" },
  sFamily: { Baby: "👶", Brother: "👦", Dad: "👨", Grandma: "👵", Grandpa: "👴", Mum: "👩", Sister: "👧" },
  sHome: { Bath: "🛁", Bed: "🛏️", Chair: "🪑", Door: "🚪", Lamp: "💡", Sofa: "🛋️", Table: "🍽️", Window: "🪟" },
  sColours: { Black: "⚫", Blue: "🔵", Brown: "🟤", Green: "🟢", Orange: "🟠", Pink: "🩷", Purple: "🟣", Red: "🔴", White: "⚪", Yellow: "🟡" },
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
  if ((mode !== "easy" && mode !== "starters") || !key || !ICONS[key]) return "";
  return ICONS[key][word] || "";
}

// Gắn biểu tượng phía trước chữ, nếu có
function withIcon(word, text = word, key = currentGame) {
  const icon = iconOf(word, key);
  return icon ? `<span class="word-icon">${icon}</span> ${text}` : text;
}
