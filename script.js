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

  // ----- Chủ đề Cambridge Pre A1 Starters (chỉ hiện ở chế độ Starters) -----
  sAnimals: {
    starters: true,
    label: "🐮 Farm Animals",
    color: "#fff4d6",
    btnColor: "rgb(200,140,20)",
    arrange: "🐮 Arrange the animals in alphabetical order (A to Z)!",
    words: [["Bird", "Con chim"], ["Chicken", "Con gà"], ["Cow", "Con bò"], ["Duck", "Con vịt"], ["Fish", "Con cá"], ["Goat", "Con dê"], ["Horse", "Con ngựa"], ["Sheep", "Con cừu"]]
  },
  sToys: {
    starters: true,
    label: "🧸 Toys",
    color: "#ffe6f2",
    btnColor: "rgb(220,80,150)",
    arrange: "🧸 Arrange the toys in alphabetical order (A to Z)!",
    words: [["Ball", "Quả bóng"], ["Bike", "Xe đạp"], ["Car", "Ô tô"], ["Doll", "Búp bê"], ["Kite", "Con diều"], ["Robot", "Người máy"], ["Teddy", "Gấu bông"], ["Train", "Tàu hỏa"]]
  },
  sSchool: {
    starters: true,
    label: "🎒 School",
    color: "#e3f0ff",
    btnColor: "rgb(40,110,200)",
    arrange: "🎒 Arrange the school things in alphabetical order (A to Z)!",
    words: [["Book", "Quyển sách"], ["Crayon", "Bút sáp màu"], ["Desk", "Bàn học"], ["Eraser", "Cục tẩy"], ["Pen", "Bút mực"], ["Pencil", "Bút chì"], ["Ruler", "Thước kẻ"], ["Schoolbag", "Cặp sách"]]
  },
  sFood: {
    starters: true,
    label: "🍞 Food",
    color: "#fff0e0",
    btnColor: "rgb(210,110,40)",
    arrange: "🍞 Arrange the food words in alphabetical order (A to Z)!",
    words: [["Bread", "Bánh mì"], ["Burger", "Bánh hamburger"], ["Cake", "Bánh ngọt"], ["Chicken", "Thịt gà"], ["Egg", "Quả trứng"], ["Juice", "Nước ép"], ["Milk", "Sữa"], ["Rice", "Cơm"], ["Water", "Nước"]]
  },
  sBody: {
    starters: true,
    label: "✋ My Body",
    color: "#ffe9e0",
    btnColor: "rgb(220,100,70)",
    arrange: "✋ Arrange the body words in alphabetical order (A to Z)!",
    words: [["Arm", "Cánh tay"], ["Ear", "Tai"], ["Eye", "Mắt"], ["Face", "Khuôn mặt"], ["Foot", "Bàn chân"], ["Hair", "Tóc"], ["Hand", "Bàn tay"], ["Head", "Cái đầu"], ["Leg", "Chân"], ["Mouth", "Miệng"], ["Nose", "Mũi"]]
  },
  sClothes: {
    starters: true,
    label: "👗 Clothes",
    color: "#efe6ff",
    btnColor: "rgb(130,80,200)",
    arrange: "👗 Arrange the clothes in alphabetical order (A to Z)!",
    words: [["Dress", "Váy liền"], ["Hat", "Cái mũ"], ["Jacket", "Áo khoác"], ["Shirt", "Áo sơ mi"], ["Shoes", "Đôi giày"], ["Skirt", "Chân váy"], ["Socks", "Đôi tất"], ["Trousers", "Quần dài"]]
  },
  sFamily: {
    starters: true,
    label: "👪 Family",
    color: "#ffe3ea",
    btnColor: "rgb(210,60,100)",
    arrange: "👪 Arrange the family words in alphabetical order (A to Z)!",
    words: [["Baby", "Em bé"], ["Brother", "Anh / em trai"], ["Dad", "Bố"], ["Father", "Bố (cách nói trang trọng)"], ["Friend", "Bạn bè"], ["Grandma", "Bà"], ["Grandpa", "Ông"], ["Mother", "Mẹ (cách nói trang trọng)"], ["Mum", "Mẹ"], ["Sister", "Chị / em gái"]]
  },
  sHome: {
    starters: true,
    label: "🏡 My House",
    color: "#e4f7e9",
    btnColor: "rgb(50,150,90)",
    arrange: "🏡 Arrange the home words in alphabetical order (A to Z)!",
    words: [["Bath", "Bồn tắm"], ["Bed", "Cái giường"], ["Chair", "Cái ghế"], ["Door", "Cửa ra vào"], ["Lamp", "Cái đèn"], ["Sofa", "Ghế sô pha"], ["Table", "Cái bàn"], ["Window", "Cửa sổ"]]
  },
  sColours: {
    starters: true,
    label: "🎨 Colours",
    color: "#f5f5f5",
    btnColor: "rgb(110,110,130)",
    arrange: "🎨 Arrange the colours in alphabetical order (A to Z)!",
    words: [["Black", "Màu đen"], ["Blue", "Xanh dương"], ["Brown", "Màu nâu"], ["Green", "Xanh lá"], ["Orange", "Màu cam"], ["Pink", "Màu hồng"], ["Purple", "Màu tím"], ["Red", "Màu đỏ"], ["White", "Màu trắng"], ["Yellow", "Màu vàng"]]
  },

  sNumbers10: {
    starters: true,
    label: "🔟 Numbers 1-10",
    color: "#e6f0ff",
    btnColor: "rgb(50,110,205)",
    arrange: "🔟 Arrange the numbers from 1 to 10!",
    words: [["One", "Một"], ["Two", "Hai"], ["Three", "Ba"], ["Four", "Bốn"], ["Five", "Năm"], ["Six", "Sáu"], ["Seven", "Bảy"], ["Eight", "Tám"], ["Nine", "Chín"], ["Ten", "Mười"]]
  },
  sNumbers: {
    starters: true,
    label: "🔢 Numbers 11-20",
    color: "#e8f1ff",
    btnColor: "rgb(40,100,200)",
    arrange: "🔢 Arrange the numbers from 11 to 20!",
    words: [["Eleven", "Mười một"], ["Twelve", "Mười hai"], ["Thirteen", "Mười ba"], ["Fourteen", "Mười bốn"], ["Fifteen", "Mười lăm"], ["Sixteen", "Mười sáu"], ["Seventeen", "Mười bảy"], ["Eighteen", "Mười tám"], ["Nineteen", "Mười chín"], ["Twenty", "Hai mươi"]]
  },
  sWild: {
    starters: true,
    label: "🦒 Wild Animals",
    color: "#fff3d6",
    btnColor: "rgb(190,130,20)",
    arrange: "🦒 Arrange the animals in alphabetical order (A to Z)!",
    words: [["Bear", "Con gấu"], ["Elephant", "Con voi"], ["Frog", "Con ếch"], ["Giraffe", "Hươu cao cổ"], ["Monkey", "Con khỉ"], ["Snake", "Con rắn"], ["Spider", "Con nhện"], ["Tiger", "Con hổ"]]
  },
  sTransport: {
    starters: true,
    label: "🚌 Transport",
    color: "#e0f0ff",
    btnColor: "rgb(30,120,190)",
    arrange: "🚌 Arrange the vehicles in alphabetical order (A to Z)!",
    words: [["Bike", "Xe đạp"], ["Boat", "Con thuyền"], ["Bus", "Xe buýt"], ["Car", "Ô tô"], ["Helicopter", "Máy bay trực thăng"], ["Plane", "Máy bay"], ["Train", "Tàu hỏa"], ["Truck", "Xe tải"]]
  },
  sWeather: {
    starters: true,
    label: "⛅ Weather",
    color: "#e6f4ff",
    btnColor: "rgb(60,140,210)",
    arrange: "⛅ Arrange the weather words in alphabetical order (A to Z)!",
    words: [["Cloud", "Đám mây"], ["Cold", "Lạnh"], ["Hot", "Nóng"], ["Rain", "Mưa"], ["Rainbow", "Cầu vồng"], ["Snow", "Tuyết"], ["Sun", "Mặt trời"], ["Wind", "Gió"]]
  },
  sSports: {
    starters: true,
    label: "⚽ Sports",
    color: "#e3f8e6",
    btnColor: "rgb(40,150,70)",
    arrange: "⚽ Arrange the sports in alphabetical order (A to Z)!",
    words: [["Baseball", "Bóng chày"], ["Basketball", "Bóng rổ"], ["Cycling", "Đạp xe"], ["Football", "Bóng đá"], ["Running", "Chạy bộ"], ["Skating", "Trượt băng"], ["Swimming", "Bơi lội"], ["Tennis", "Quần vợt"]]
  },
  sDescribe: {
    starters: true,
    label: "😀 Describing",
    color: "#fff0f5",
    btnColor: "rgb(215,70,130)",
    arrange: "😀 Arrange the describing words in alphabetical order (A to Z)!",
    words: [["Big", "To"], ["Happy", "Vui vẻ"], ["Long", "Dài"], ["New", "Mới"], ["Old", "Cũ / già"], ["Sad", "Buồn"], ["Short", "Ngắn / thấp"], ["Small", "Nhỏ"], ["Tall", "Cao"], ["Young", "Trẻ"]]
  },
  sActions: {
    starters: true,
    label: "🏃 Actions",
    color: "#fff1e0",
    btnColor: "rgb(215,110,30)",
    arrange: "🏃 Arrange the action words in alphabetical order (A to Z)!",
    words: [["Dance", "Nhảy múa"], ["Draw", "Vẽ"], ["Eat", "Ăn"], ["Jump", "Nhảy"], ["Read", "Đọc"], ["Run", "Chạy"], ["Sing", "Hát"], ["Swim", "Bơi"]]
  },
  sPlaces: {
    starters: true,
    label: "🏖️ Places",
    color: "#e8f7ee",
    btnColor: "rgb(40,150,100)",
    arrange: "🏖️ Arrange the places in alphabetical order (A to Z)!",
    words: [["Beach", "Bãi biển"], ["Farm", "Nông trại"], ["Garden", "Khu vườn"], ["Park", "Công viên"], ["Playground", "Sân chơi"], ["Shop", "Cửa hàng"], ["Street", "Đường phố"], ["Zoo", "Sở thú"]]
  },
  sFruit: {
    starters: true,
    label: "🍓 Fruit & Veg",
    color: "#ffe6e6",
    btnColor: "rgb(210,60,70)",
    arrange: "🍓 Arrange the fruits and vegetables in alphabetical order (A to Z)!",
    words: [["Apple", "Quả táo"], ["Banana", "Quả chuối"], ["Carrot", "Cà rốt"], ["Grape", "Quả nho"], ["Lemon", "Quả chanh"], ["Orange", "Quả cam"], ["Potato", "Khoai tây"], ["Tomato", "Cà chua"]]
  },

  sPets: {
    starters: true,
    label: "🐱 Pets",
    color: "#fff0e3",
    btnColor: "rgb(215,120,50)",
    arrange: "🐱 Arrange the pets in alphabetical order (A to Z)!",
    words: [["Bird", "Con chim"], ["Cat", "Con mèo"], ["Dog", "Con chó"], ["Fish", "Con cá"], ["Mouse", "Con chuột"], ["Rabbit", "Con thỏ"]]
  },
  sTime: {
    starters: true,
    label: "⏰ Time",
    color: "#fff4de",
    btnColor: "rgb(205,125,30)",
    arrange: "⏰ Arrange the times of day in alphabetical order (A to Z)!",
    words: [["Afternoon", "Buổi chiều"], ["Birthday", "Sinh nhật"], ["Day", "Ngày"], ["Evening", "Buổi tối"], ["Morning", "Buổi sáng"], ["Night", "Ban đêm"]]
  },
  sWorld: {
    starters: true,
    label: "🌳 World Around Us",
    color: "#e6f7e2",
    btnColor: "rgb(55,150,60)",
    arrange: "🌳 Arrange the things around us in alphabetical order (A to Z)!",
    words: [["Flower", "Bông hoa"], ["Grass", "Cỏ"], ["Moon", "Mặt trăng"], ["Sea", "Biển"], ["Sky", "Bầu trời"], ["Star", "Ngôi sao"], ["Sun", "Mặt trời"], ["Tree", "Cái cây"]]
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
    words: [["Cold", "Cảm lạnh"], ["Cough", "Ho"], ["Dentist", "Nha sĩ"], ["Doctor", "Bác sĩ"], ["Earache", "Đau tai"], ["Headache", "Đau đầu"], ["Hospital", "Bệnh viện"], ["Medicine", "Thuốc"], ["Temperature", "Sốt"], ["Toothache", "Đau răng"]]
  },
  mWeather: {
    movers: true,
    label: "🌦️ Weather",
    color: "#e3f1ff",
    btnColor: "rgb(50, 110, 200)",
    arrange: "🌦️ Arrange the weather words in alphabetical order (A to Z)!",
    words: [["Cloudy", "Nhiều mây"], ["Rain", "Mưa"], ["Rainbow", "Cầu vồng"], ["Rainy", "Có mưa"], ["Snow", "Tuyết"], ["Snowy", "Có tuyết"], ["Sunny", "Có nắng"], ["Weather", "Thời tiết"], ["Wind", "Gió"], ["Windy", "Có gió"]]
  },
  mTown: {
    movers: true,
    label: "🏙️ Places",
    color: "#f1f1f1",
    btnColor: "rgb(90, 100, 120)",
    arrange: "🏙️ Arrange the places in alphabetical order (A to Z)!",
    words: [["Bank", "Ngân hàng"], ["Cinema", "Rạp chiếu phim"], ["Countryside", "Vùng quê"], ["Library", "Thư viện"], ["Market", "Chợ"], ["Park", "Công viên"], ["Station", "Nhà ga"], ["Supermarket", "Siêu thị"], ["Zoo", "Sở thú"]]
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

  mTransport: {
    movers: true,
    label: "🚀 Transport",
    color: "#e4ecff",
    btnColor: "rgb(70,90,200)",
    arrange: "🚀 Arrange the vehicles in alphabetical order (A to Z)!",
    words: [["Helicopter", "Máy bay trực thăng"], ["Lorry", "Xe tải"], ["Motorbike", "Xe máy"], ["Rocket", "Tên lửa"], ["Ship", "Tàu thủy"], ["Taxi", "Xe taxi"], ["Tractor", "Máy kéo"], ["Van", "Xe tải nhỏ"]]
  },
  mSports: {
    movers: true,
    label: "🏸 Sports & Hobbies",
    color: "#e3f8e6",
    btnColor: "rgb(40,150,70)",
    arrange: "🏸 Arrange the sports and hobbies in alphabetical order (A to Z)!",
    words: [["Badminton", "Cầu lông"], ["Basketball", "Bóng rổ"], ["Camping", "Cắm trại"], ["Cycling", "Đạp xe"], ["Dancing", "Nhảy múa"], ["Fishing", "Câu cá"], ["Riding", "Cưỡi / đi xe"], ["Skateboard", "Ván trượt"], ["Skating", "Trượt băng"], ["Swimming", "Bơi lội"]]
  },
  mJobs: {
    movers: true,
    label: "👩‍🚀 Jobs",
    color: "#f1e6ff",
    btnColor: "rgb(130,70,190)",
    arrange: "👩‍🚀 Arrange the jobs in alphabetical order (A to Z)!",
    words: [["Astronaut", "Phi hành gia"], ["Builder", "Thợ xây"], ["Cook", "Đầu bếp"], ["Doctor", "Bác sĩ"], ["Driver", "Tài xế"], ["Farmer", "Nông dân"], ["Pilot", "Phi công"], ["Singer", "Ca sĩ"]]
  },
  mSchool: {
    movers: true,
    label: "📚 School Subjects",
    color: "#fff4d6",
    btnColor: "rgb(200,140,20)",
    arrange: "📚 Arrange the school subjects in alphabetical order (A to Z)!",
    words: [["Art", "Mỹ thuật"], ["English", "Tiếng Anh"], ["Geography", "Địa lý"], ["History", "Lịch sử"], ["Maths", "Toán"], ["Music", "Âm nhạc"], ["Science", "Khoa học"], ["Sport", "Thể thao"]]
  },
  mTime: {
    movers: true,
    label: "⏰ Time",
    color: "#ffeede",
    btnColor: "rgb(215,115,40)",
    arrange: "⏰ Arrange the time words in alphabetical order (A to Z)!",
    words: [["Birthday", "Sinh nhật"], ["Month", "Tháng"], ["Today", "Hôm nay"], ["Tomorrow", "Ngày mai"], ["Week", "Tuần"], ["Weekend", "Cuối tuần"], ["Year", "Năm"], ["Yesterday", "Hôm qua"]]
  },
  mBody: {
    movers: true,
    label: "🦴 Body",
    color: "#ffe9e9",
    btnColor: "rgb(205,70,70)",
    arrange: "🦴 Arrange the body parts in alphabetical order (A to Z)!",
    words: [["Ankle", "Mắt cá chân"], ["Back", "Cái lưng"], ["Elbow", "Khuỷu tay"], ["Finger", "Ngón tay"], ["Knee", "Đầu gối"], ["Throat", "Cổ họng"], ["Thumb", "Ngón cái"], ["Toe", "Ngón chân"]]
  },
  mDescribe: {
    movers: true,
    label: "😮 Describing",
    color: "#fff0f5",
    btnColor: "rgb(215,70,130)",
    arrange: "😮 Arrange the describing words in alphabetical order (A to Z)!",
    words: [["Angry", "Tức giận"], ["Bored", "Chán"], ["Dangerous", "Nguy hiểm"], ["Delicious", "Ngon"], ["Difficult", "Khó"], ["Famous", "Nổi tiếng"], ["Noisy", "Ồn ào"], ["Tired", "Mệt"]]
  },
  mActions: {
    movers: true,
    label: "🧗 Actions",
    color: "#e5f8f2",
    btnColor: "rgb(30,150,125)",
    arrange: "🧗 Arrange the action words in alphabetical order (A to Z)!",
    words: [["Catch", "Bắt"], ["Climb", "Leo"], ["Hop", "Nhảy lò cò"], ["Pull", "Kéo"], ["Push", "Đẩy"], ["Shout", "La hét"], ["Throw", "Ném"], ["Wave", "Vẫy tay"]]
  },
  mMaterials: {
    movers: true,
    label: "🧱 Materials",
    color: "#efeae3",
    btnColor: "rgb(130,100,70)",
    arrange: "🧱 Arrange the materials in alphabetical order (A to Z)!",
    words: [["Cotton", "Bông"], ["Glass", "Thủy tinh"], ["Gold", "Vàng"], ["Metal", "Kim loại"], ["Paper", "Giấy"], ["Plastic", "Nhựa"], ["Silver", "Bạc"], ["Wood", "Gỗ"]]
  },

  mColours: {
    movers: true,
    label: "🎨 Colours",
    color: "#f5f0ff",
    btnColor: "rgb(140,80,200)",
    arrange: "🎨 Arrange the colours in alphabetical order (A to Z)!",
    words: [["Black", "Màu đen"], ["Brown", "Màu nâu"], ["Gold", "Màu vàng kim"], ["Green", "Xanh lá"], ["Grey", "Màu xám"], ["Orange", "Màu cam"], ["Pink", "Màu hồng"], ["Purple", "Màu tím"], ["Silver", "Màu bạc"], ["White", "Màu trắng"]]
  },
  mNumbers: {
    movers: true,
    label: "🔢 Numbers 20-100",
    color: "#e6f0ff",
    btnColor: "rgb(50,110,205)",
    arrange: "🔢 Arrange the numbers from 20 to 100!",
    words: [["Twenty", "Hai mươi"], ["Thirty", "Ba mươi"], ["Forty", "Bốn mươi"], ["Fifty", "Năm mươi"], ["Sixty", "Sáu mươi"], ["Seventy", "Bảy mươi"], ["Eighty", "Tám mươi"], ["Ninety", "Chín mươi"], ["Hundred", "Một trăm"]]
  },
  mOrdinals: {
    movers: true,
    label: "🥇 Ordinals",
    color: "#fff3d6",
    btnColor: "rgb(205,140,25)",
    arrange: "🥇 Arrange the ordinal numbers from first to tenth!",
    words: [["First", "Thứ nhất"], ["Second", "Thứ hai"], ["Third", "Thứ ba"], ["Fourth", "Thứ tư"], ["Fifth", "Thứ năm"], ["Sixth", "Thứ sáu"], ["Seventh", "Thứ bảy"], ["Eighth", "Thứ tám"], ["Ninth", "Thứ chín"], ["Tenth", "Thứ mười"]]
  },
  mDirections: {
    movers: true,
    label: "🧭 Directions",
    color: "#e5f6f3",
    btnColor: "rgb(30,150,130)",
    arrange: "🧭 Arrange the direction words in alphabetical order (A to Z)!",
    words: [["Behind", "Phía sau"], ["Between", "Ở giữa"], ["Corner", "Góc phố"], ["Left", "Bên trái"], ["Opposite", "Đối diện"], ["Right", "Bên phải"], ["Straight", "Đi thẳng"], ["Turn", "Rẽ"]]
  },
  mParty: {
    movers: true,
    label: "🎈 Party & Music",
    color: "#ffe9f2",
    btnColor: "rgb(215,70,120)",
    arrange: "🎈 Arrange the party and music words in alphabetical order (A to Z)!",
    words: [["Balloon", "Bóng bay"], ["Camera", "Máy ảnh"], ["Drum", "Cái trống"], ["Guitar", "Đàn ghi-ta"], ["Party", "Bữa tiệc"], ["Piano", "Đàn piano"], ["Present", "Món quà"], ["Violin", "Đàn vi-ô-lông"]]
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
  easy: { label: "🐣 Easy", desc: "Little learners", arrangePts: 10, wordPts: 5, bonus: 20, hintCost: 2 },
  starters: { label: "⭐ Starters", desc: "For Hồng Thiên", arrangePts: 10, wordPts: 5, bonus: 20, hintCost: 2 },
  movers: { label: "📘 Movers", desc: "For Mây An", arrangePts: 15, wordPts: 8, bonus: 30, hintCost: 3 },
  hard: { label: "🦁 Hard", desc: "Big challenge", arrangePts: 20, wordPts: 10, bonus: 50, hintCost: 5 }
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
  if (mode === "starters") return !!cat.starters;
  if (isMovers()) return !!cat.movers;
  if (cat.movers || cat.starters) return false;
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
  scoreBoard.innerHTML = `<span class="ri">⭐</span><span class="rl">${score}</span>`;
  bestBoard.innerHTML = `<span class="ri">🏆</span><span class="rl">${best}</span>`;
  scoreBoard.title = "Score";
  bestBoard.title = "Best";
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

// Giọng do người chơi tự chọn trong Sound check (được lưu lại)
function savedVoiceName() {
  try { return localStorage.getItem("wa-voice") || ""; } catch { return ""; }
}

function pickVoice() {
  if (!hasTTS) return;
  const all = speechSynthesis.getVoices();
  const chosen = savedVoiceName() && all.find((v) => v.name === savedVoiceName());
  if (chosen) { bestVoice = chosen; return; }
  const voices = all.filter((v) => voiceScore(v) > -100);
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

// Tải sẵn chính file thu âm về máy (dạng blob) để lúc nghe phát ngay, không phải chờ mạng
const clipCache = {};
const keepAlive = [];
function preloadClip(url) {
  if (!url || url in clipCache) return;
  clipCache[url] = ""; // "" = chưa sẵn sàng
  const type = /\.wav$/i.test(url) ? "audio/wav" : "audio/mpeg";
  fetch(url)
    .then((r) => (r.ok ? r.blob() : Promise.reject(new Error("http " + r.status))))
    .then((b) => {
      // Gắn lại loại file để iPhone chịu phát
      clipCache[url] = URL.createObjectURL(new Blob([b], { type }));
    })
    .catch((e) => {
      // Không tải được dạng blob (thường do chặn CORS): thử cho thẻ audio tự tải
      soundLog("clip download blocked (" + (e && e.message ? e.message : "?") + "), trying direct");
      const a = new Audio();
      a.preload = "auto";
      a.addEventListener("canplaythrough", () => { clipCache[url] = url; }, { once: true });
      a.src = url;
      keepAlive.push(a);
    });
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
      preloadClip(url);
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

// ---- Mở khóa giọng đọc trên iPhone/iPad: chỉ thao tác NHẢ TAY (touchend/click) mới được tính ----
registerAudio(speechAudio);
Object.values(sounds).forEach(registerAudio);
let ttsUnlocked = false;
function unlockTTS() {
  if (ttsUnlocked || !hasTTS) return;
  ttsUnlocked = true;
  try {
    const u = new SpeechSynthesisUtterance(" ");
    u.volume = 0;
    speechSynthesis.speak(u);
  } catch {}
}
["touchend", "click"].forEach((ev) => document.addEventListener(ev, unlockTTS, true));

function stopSpeaking() {
  speechAudio.pause();
  if (hasTTS && (speechSynthesis.speaking || speechSynthesis.pending)) speechSynthesis.cancel();
}

// Số lần giọng thu âm hỏng liên tiếp trên máy này; hỏng 2 lần thì bỏ qua để đọc bằng giọng máy ngay
let clipFailures = 0;

// Phát một file âm thanh bằng speechAudio; không phát được thì gọi onFail
function playClip(url, onFail, onOk, waitMs = 1500) {
  stopSpeaking();
  duckMusic(true);
  let started = false;
  let failed = false;
  const src = clipCache[url] || url;
  const kind = src.startsWith("blob:") ? "recorded voice (downloaded)" : "recorded voice (direct)";
  const fail = (why) => {
    if (failed || started) return;
    failed = true;
    clipFailures++;
    speechAudio.pause();
    duckMusic(false);
    soundLog(kind + ": FAILED - " + why);
    onFail();
  };
  speechAudio.onplaying = () => { started = true; clipFailures = 0; soundLog(kind + ": playing"); if (onOk) onOk(); };
  speechAudio.onended = () => duckMusic(false);
  speechAudio.onerror = () => {
    const er = speechAudio.error;
    fail("error " + (er ? er.code + (er.message ? " " + er.message : "") : "?"));
  };
  speechAudio.src = src;
  const p = speechAudio.play();
  if (p && p.catch) p.catch((e) => fail("play() " + (e && e.name ? e.name : "?")));
  setTimeout(() => fail("timeout (ready " + speechAudio.readyState + ", net " + speechAudio.networkState + ")"), waitMs);
}

function speakWithVoice(word, retry = true, onResult) {
  if (!hasTTS) {
    duckMusic(false);
    showMessage("error", "🔇 This device cannot read words aloud.");
    return;
  }
  if (!bestVoice) pickVoice();
  if (speechSynthesis.speaking || speechSynthesis.pending) speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(word);
  try { if (bestVoice) u.voice = bestVoice; } catch {}
  u.lang = bestVoice ? bestVoice.lang : "en-US";
  u.rate = 0.85;
  u.volume = 1;
  let started = false;
  u.onstart = () => { started = true; duckMusic(true); soundLog("device voice: playing (" + (bestVoice ? bestVoice.name : "default") + ")"); if (onResult) onResult(true); };
  u.onend = () => duckMusic(false);
  u.onerror = (e) => { duckMusic(false); soundLog("device voice error: " + (e.error || "?")); };
  speechSynthesis.resume();
  speechSynthesis.speak(u);
  setTimeout(() => {
    if (started) return;
    speechSynthesis.cancel();
    soundLog("device voice: not started" + (retry ? ", retrying" : ""));
    if (retry) setTimeout(() => speakWithVoice(word, false, onResult), 100);
    else if (onResult) onResult(false);
    if (!retry) showMessage("error", "🔇 No sound? Turn up the volume and turn off silent mode.");
  }, 1000);
}

// Chỉ dùng giọng thu âm khi file đã tải xong sẵn; nếu chưa thì đọc ngay bằng giọng máy (không chờ)
function speak(word) {
  if (!word) return;
  if (isMuted) {
    showMessage("error", "🔇 Sound is off. Tap 🔇 Sound to turn it on.");
    return;
  }
  const url = recordings[word.toLowerCase()];
  const ready = typeof url === "string" && url && clipCache[url];
  if (ready && clipFailures < 2) {
    playClip(url, () => speakWithVoice(word));
    return;
  }
  speakWithVoice(word);
  if (url === undefined) fetchRecording(word); // tải sẵn cho lần sau
}

muteBtn.addEventListener("click", () => {
  isMuted = !isMuted;
  if (isMuted) {
    Music.stop();
    muteBtn.innerHTML = '<span class="ri">🔇</span><span class="rl">Sound</span>';
    muteBtn.classList.add("off");
  } else {
    muteBtn.classList.remove("off");
    startBackgroundMusic();
    SFX.play("select");
    muteBtn.innerHTML = '<span class="ri">🔊</span><span class="rl">Sound</span>';
  }
});
// Nút nhạc nền riêng: tắt nhạc mà vẫn nghe đọc từ và hiệu ứng
const musicBtn = $("music-btn");
function updateMusicButton() {
  musicBtn.innerHTML = '<span class="ri">🎵</span><span class="rl">Music</span>';
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
  const [cIcon, ...cName] = cat.label.split(" ");
  btn.innerHTML = `<span class="ci">${cIcon}</span><span class="cn">${cName.join(" ")}</span>`;
  btn.dataset.cat = key;
  btn.style.background = cat.btnColor;
  btn.addEventListener("click", () => startCategory(key));
  categoryButtons.appendChild(btn);
});

// Bản đồ "bạn đang ở đâu": Trò chơi 🐾 Cấp độ 🐾 Chủ đề.
// Mỗi ô là một nút, bấm vào sẽ xổ ra danh sách để chọn.
const bcPanel = $("bc-panel");
let openMenuKind = "";

function updateBreadcrumb() {
  const bc = $("breadcrumb");
  if (!bc) return;
  const game = typeof GAMES !== "undefined" && GAMES[gameType];
  const cat = currentGame && CATEGORIES[currentGame];
  // 3 bước nối nhau bằng mũi tên: 1 Game  ->  2 Level  ->  3 Topic
  const steps = [
    { kind: "game", num: 1, title: "Game", cls: "bc-game", text: game ? `${game.icon} ${game.name}` : "Choose", done: !!game },
    { kind: "mode", num: 2, title: "Level", cls: `bc-mode mode-${mode}`, text: MODES[mode].label, done: true },
    { kind: "cat", num: 3, title: "Topic", cls: "bc-cat", text: cat ? cat.label : "Choose", done: !!cat }
  ];
  const next = steps.find((st) => !st.done);
  bc.innerHTML = steps.map((st, i) => {
    const btn = `<button class="bc-step ${st.cls} ${st.done ? "done" : "todo"} ${next === st ? "next" : ""} ${openMenuKind === st.kind ? "open" : ""}" data-menu="${st.kind}">
      <span class="bc-cap"><span class="bc-num">${st.num}</span>${st.title}</span>
      <span class="bc-val">${st.text}</span>
      <span class="bc-caret">▾</span>
    </button>`;
    return i < steps.length - 1 ? btn + '<span class="bc-arrow" aria-hidden="true">➜</span>' : btn;
  }).join("");
}

function openMenu(kind) {
  SFX.play("open");
  document.querySelectorAll("#bc-games .bc-item").forEach((b) => b.classList.toggle("active", b.dataset.game === gameType));
  openMenuKind = kind;
  bcPanel.dataset.show = kind;
  bcPanel.classList.remove("hidden");
  updateBreadcrumb();
  if (kind === "cat") {
    // cuộn danh sách chủ đề tới chủ đề đang chọn (chưa chọn thì về đầu)
    const list = $("category-buttons");
    const active = list.querySelector("button.active:not(.hidden)");
    list.scrollTop = active ? Math.max(0, active.offsetTop - list.clientHeight / 2 + active.clientHeight / 2) : 0;
  }
}

function closeMenu() {
  openMenuKind = "";
  bcPanel.classList.add("hidden");
  updateBreadcrumb();
}

$("breadcrumb").addEventListener("click", (e) => {
  const b = e.target.closest(".bc-step");
  if (!b) return;
  if (openMenuKind === b.dataset.menu) closeMenu();
  else openMenu(b.dataset.menu);
});

// Chọn xong một mục trong danh sách thì thu lại
bcPanel.addEventListener("click", (e) => {
  if (!e.target.closest("button")) return;
  SFX.play("select");
  setTimeout(() => {
    // Đổi cấp độ mà chưa có chủ đề thì mở luôn danh sách chủ đề
    if (!currentGame) openMenu("cat");
    else closeMenu();
  }, 0);
});

function updateActiveButton() {
  updateBreadcrumb();
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
  const [mIcon, ...mName] = m.label.split(" ");
  btn.innerHTML = `<span class="ri">${mIcon}</span><span class="rl">${mName.join(" ")}</span><small class="md">${m.desc}</small>`;
  btn.dataset.mode = key;
  btn.classList.add(`mode-${key}`);
  btn.addEventListener("click", () => setMode(key));
  modeButtons.appendChild(btn);
});

// Câu hướng dẫn thay đổi theo từng bước chơi
const TIPS = {
  choose: {
    starters: "⭐ Cambridge Starters topics for Hồng Thiên. Pick a topic above!",
    movers: "📘 Cambridge Movers topics for Mây An. Pick a topic above!",
    easy: "👆 Pick a topic above to start!", hard: "👆 Hard mode has 9 extra topics. Pick one above!" },
  arrange: {
    easy: "✋ Hold ⠿ and drag the tile to its place. Then press Check Answer.",
    hard: "🦁 English words only! Hold ⠿ and drag the tile to its place."
  },
  pick: {
    easy: "👆 Pick a word to spell.",
    hard: "👆 Pick a meaning, then type the English word for it."
  },
  spell: {
    easy: "✋ Hold a letter and drag it to its place.",
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
  hintBtn.innerHTML = `<span class="ri">💡</span><span>Hint -${MODES[mode].hintCost}</span>`;
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
    div.className = "word sortable";
    div.dataset.index = index;

    if (isLetters) {
      const up = item.toUpperCase();
      div.textContent = up;
      div.classList.add("AEIOU".includes(up) ? "vowel" : "consonant");
    } else {
      div.innerHTML = `<span class="grip">⠿</span>${getLabel(item)}`;
      div.style.backgroundColor = CATEGORIES[currentGame].color;
    }

    enableSort(div, items, isLetters, onChange);
    container.appendChild(div);
  });
}

// Giữ và kéo một ô tới vị trí mới, các ô khác tự dạt ra nhường chỗ.
// Dùng Pointer Events nên chạy được bằng chuột lẫn ngón tay.
function enableSort(el, items, horizontal, onChange) {
  el.addEventListener("pointerdown", (e) => {
    if (e.button !== undefined && e.button > 0) return;
    // Trên điện thoại, danh sách dọc chỉ kéo bằng tay cầm ⠿ để vẫn vuốt cuộn trang được
    if (!horizontal && e.pointerType !== "mouse" && !e.target.closest(".grip")) return;
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const rect = el.getBoundingClientRect();
    const offX = startX - rect.left;
    const offY = startY - rect.top;
    let ghost = null;
    let lastX = startX;
    let lastY = startY;
    let scrollTimer = null;

    const moveTo = (x, y) => {
      ghost.style.left = `${x - offX}px`;
      ghost.style.top = `${y - offY}px`;
      const under = document.elementFromPoint(x, y);
      const target = under && under.closest(".sortable");
      if (!target || target === el || !container.contains(target)) return;
      const r = target.getBoundingClientRect();
      const after = horizontal ? x > r.left + r.width / 2 : y > r.top + r.height / 2;
      container.insertBefore(el, after ? target.nextSibling : target);
    };

    // Tự cuộn trang khi kéo tới gần mép trên hoặc mép dưới màn hình
    const autoScroll = () => {
      if (lastY < 90) window.scrollBy(0, -10);
      else if (lastY > window.innerHeight - 150) window.scrollBy(0, 10);
      moveTo(lastX, lastY);
    };

    const onMove = (ev) => {
      lastX = ev.clientX;
      lastY = ev.clientY;
      if (!ghost) {
        if (Math.hypot(lastX - startX, lastY - startY) < 6) return;
        ghost = el.cloneNode(true);
        ghost.classList.add("sort-ghost");
        ghost.style.width = `${rect.width}px`;
        ghost.style.height = `${rect.height}px`;
        document.body.appendChild(ghost);
        el.classList.add("sort-placeholder");
        SFX.play("pick");
        scrollTimer = setInterval(autoScroll, 16);
      }
      moveTo(lastX, lastY);
    };

    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      clearInterval(scrollTimer);
      if (!ghost) return;
      ghost.remove();
      el.classList.remove("sort-placeholder");
      const order = [...container.querySelectorAll(".sortable")].map((d) => items[Number(d.dataset.index)]);
      items.splice(0, items.length, ...order);
      SFX.play("drop");
      onChange();
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
  });
}

// ===== Thẻ kết quả sau mỗi câu đúng và bảng tổng kết cuối vòng =====
let roundStats = { startScore: 0, correct: 0, hints: 0 };

function resetRoundStats() {
  roundStats = { startScore: score, correct: 0, hints: 0 };
}

function showResultCard(word, onNext) {
  checkContainer.classList.add("hidden");
  wordPicker.innerHTML = "";
  container.className = "";
  subtitle.textContent = "🎉 Well done!";
  tip.textContent = "👉 Press Next to continue.";
  container.innerHTML = `<div class="result-card">
      <div class="result-title">✅ Correct!</div>
      <div class="result-word">${withIcon(word)}</div>
      <div class="result-mean">${meaningOf(word)}</div>
      <div class="result-actions">
        <button class="result-listen">🔈 Listen</button>
        <button class="result-next">Next ➡️</button>
      </div>
    </div>`;
  container.querySelector(".result-listen").addEventListener("click", () => speak(word));
  container.querySelector(".result-next").addEventListener("click", () => { SFX.play("whoosh"); onNext(); });
}

function showFinishCard(key) {
  checkContainer.classList.add("hidden");
  wordPicker.innerHTML = "";
  container.className = "";
  const earned = score - roundStats.startScore;
  subtitle.textContent = "🏆 Well done, Mây An & Hồng Thiên!";
  tip.textContent = "";
  container.innerHTML = `<div class="result-card finish">
      <div class="result-trophy">🏆</div>
      <div class="result-title">Round complete!</div>
      <div class="result-stats">
        <div><b>${roundStats.correct}</b><span>Correct</span></div>
        <div><b>${earned >= 0 ? "+" : ""}${earned}</b><span>Points</span></div>
        <div><b>${roundStats.hints}</b><span>Hints</span></div>
      </div>
      <div class="result-actions">
        <button class="result-again">🔁 Play Again</button>
        <button class="result-menu">🎲 Other Games</button>
      </div>
    </div>`;
  container.querySelector(".result-again").addEventListener("click", () => { SFX.play("whoosh"); startCategory(key); });
  container.querySelector(".result-menu").addEventListener("click", showMenu);
}

// ===== Level 1: sắp xếp từ =====
function startCategory(key) {
  clearTimeout(nextRoundTimer);
  resetRoundStats();
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
  wordPicker.after(checkContainer);
  checkContainer.classList.remove("as-tools");
  speakBtn.classList.add("hidden");
  $("check-btn").classList.remove("hidden");
  subtitle.textContent = CATEGORIES[key].arrange;
  checkContainer.classList.remove("hidden");
  setStage("arrange");
  renderWords();
}

function renderWords() {
  renderTiles(currentOrder, {
    isLetters: false,
    getLabel: (w) => (isHard() ? w : `<span class="w-main">${withIcon(w)}</span><small>${meaningOf(w)}</small>`),
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
    btn.innerHTML = isHard() ? meaningOf(word) : `${withIcon(word)}<small>${meaningOf(word)}</small>`;
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
        subtitle.textContent = `🔤 Arrange the letters to spell the word for "${meaningOf(word)}" ${iconOf(word)}`.trim();
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
  if (gameType !== "order") {
    if (miniHint()) {
      SFX.play("sparkle");
      roundStats.hints++;
      addScore(-MODES[mode].hintCost);
    }
    else showMessage("error", "💡 No more hints here!");
    return;
  }
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
  roundStats.hints++;
  SFX.play("sparkle");
  addScore(-MODES[mode].hintCost);
});

// Listen: trong Word Order đọc từ đang đánh vần, trong trò khác đọc từ của câu hỏi
let speakTarget = "";
speakBtn.addEventListener("click", () => speak(gameType === "order" ? currentWord : speakTarget));

// ===== Kiểm tra =====
$("check-btn").addEventListener("click", () => {
  startBackgroundMusic();
  if (level === 1) {
    if (currentOrder.join() === englishOf(currentGame).join()) {
      showMessage("success", "⭐ Great job, girls! Now choose a word to spell!");
      launchConfetti();
      play("success");
      addScore(MODES[mode].arrangePts);
      roundStats.correct++;
      level = 2;
      showWordPicker(englishOf(currentGame));
    } else {
      showMessage("error", "😊 Almost there! Try again!");
      play("error");
    }
    return;
  }

  if (getSpellAnswer().toLowerCase() === currentWord.toLowerCase()) {
    launchConfetti();
    play("success");
    speak(currentWord);
    addScore(MODES[mode].wordPts);
    roundStats.correct++;
    currentWordList = currentWordList.filter((w) => w !== currentWord);
    speakBtn.classList.add("hidden");

    showResultCard(currentWord, () => {
      if (currentWordList.length > 0) {
        showWordPicker(currentWordList);
      } else {
        play("win");
        launchConfetti();
        addScore(MODES[mode].bonus);
        showFinishCard(currentGame);
      }
    });
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
