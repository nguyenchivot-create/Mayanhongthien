# Mây An & Hồng Thiên - Word Adventure 🎮

Trò chơi học từ vựng tiếng Anh cho Mây An và Hồng Thiên, giao diện hoàn toàn bằng tiếng Anh. Chạy trực tiếp trên trình duyệt, dùng được cả trên máy tính và điện thoại.

## 👉 [Chơi ngay](https://nguyenchivot-create.github.io/Mayanhongthien/)

Quét mã QR bằng camera điện thoại để mở game:

<p align="center">
  <img src="images/qr-code.png" alt="Mã QR mở game Word Adventure" width="220" />
</p>

## Trò chơi

Bấm **Start Game**, chọn một trò trong mục **Games**, chọn cấp độ và chủ đề.

| Trò | Cách chơi |
|---|---|
| 🔀 Word Order | Giữ và kéo các ô từ về đúng thứ tự, rồi đánh vần từng từ |
| 🧩 Word Builder | Kéo thả chữ cái vào ô trống để ghép thành từ |
| 🔤 Missing Letters | Tìm chữ cái còn thiếu trong từ |
| ❓ Word Quiz | Chọn từ tiếng Anh đúng với nghĩa (Hard: với định nghĩa tiếng Anh) |
| 🔗 Word Match | Ghép từ với nghĩa (Hard: với định nghĩa tiếng Anh) |
| 🃏 Memory Match | Lật thẻ, ghép cặp tiếng Anh với tiếng Việt |

## Cấp độ

- **🐣 Easy**: có nghĩa tiếng Việt và biểu tượng minh họa (🐶 Dog, 🍎 Apple...), xếp chữ cái để đánh vần. 10 chủ đề: Days, Months, Planets, Rainbow, Numbers, Seasons, Times of Day, Body, Animals, Fruits A-Z
- **⭐ Starters** (cho Hồng Thiên): 9 chủ đề Cambridge Pre A1 Starters: Farm Animals, Toys, School, Food, My Body, Clothes, Family, My House, Colours. Độ khó như Easy, có biểu tượng minh họa
- **📘 Movers** (cho Mây An): 9 chủ đề theo danh sách từ vựng Cambridge A1 Movers: Wild Animals, Family, Clothes, Food & Drink, Home, Health, Weather, Places, World Around Us. Độ khó ở giữa: có nghĩa tiếng Việt, Word Builder có 2 chữ cái gây nhiễu, Missing Letters thiếu 2 chữ, Word Order xếp theo bảng chữ cái
- **🦁 Hard** (cho bé 10 tuổi): không có nghĩa khi sắp xếp, tự gõ từ theo nghĩa, chữ cái gây nhiễu, định nghĩa tiếng Anh, điểm cao hơn. Thêm 9 chủ đề: Ordinals, Tens, Time, Life Cycle, Growing Up, Big Numbers, Length, Water Cycle, Jobs A-Z

## Tính năng

- Giao diện tiếng Anh, mỗi từ có nghĩa tiếng Việt nhỏ bên dưới
- Chơi được trên điện thoại: kéo thả bằng ngón tay, trang tự cuộn khi kéo tới mép màn hình
- Trả lời đúng hiện thẻ kết quả (từ, hình, nghĩa) và nút Next; hết vòng có bảng tổng kết số câu đúng, điểm và số lần dùng gợi ý
- Phát âm từ tiếng Anh (nút 🔈 Listen): ưu tiên giọng người thật thu âm sẵn từ từ điển trực tuyến, nếu không có thì dùng giọng đọc tốt nhất trên máy
- Nút 💡 Hint ở mọi trò (Easy trừ 2 điểm, Movers trừ 3, Hard trừ 5)
- Lưu kỷ lục điểm trên máy
- Hiệu ứng pháo giấy, âm thanh hiệu ứng
- Nhạc nền vui tươi do trình duyệt tự tạo, có nút 🎵 Music riêng để tắt nhạc mà vẫn nghe đọc từ

## Kiểm tra âm thanh

Kéo xuống cuối trang, bấm **🔧 Sound check** để thử từng lớp âm thanh (hiệu ứng, nhạc nền, giọng thu âm, giọng trực tuyến, giọng của máy) và xem nhật ký lỗi.

## Chạy trên máy

Mở file `index.html` bằng trình duyệt.

## Thêm chủ đề mới

Mở `script.js`, thêm một mục vào `CATEGORIES` theo mẫu có sẵn: mỗi từ là `["English", "Tiếng Việt"]`, xếp theo thứ tự đúng. Sau đó thêm định nghĩa tiếng Anh cho từng từ vào `definitions.js`.

## Nguồn gốc

Tùy biến từ dự án [Word Adventure](https://github.com/dpkalimbu-dev/word-adventure-game) của dpkalimbu-dev.
