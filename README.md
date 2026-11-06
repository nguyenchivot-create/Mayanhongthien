# Mây An & Hồng Thiên - Word Adventure 🎮

Trò chơi học từ vựng tiếng Anh cho Mây An và Hồng Thiên, giao diện hoàn toàn bằng tiếng Anh. Chạy trực tiếp trên trình duyệt, dùng được cả trên máy tính và điện thoại.

## 👉 [Chơi ngay](https://nguyenchivot-create.github.io/Mayanhongthien/)

## Trò chơi

Bấm **Start Game**, chọn một trò trong mục **Games**, chọn cấp độ và chủ đề.

| Trò | Cách chơi |
|---|---|
| 🔀 Word Order | Sắp xếp từ theo thứ tự, rồi đánh vần từng từ |
| 🧩 Word Builder | Kéo thả chữ cái vào ô trống để ghép thành từ |
| 🔤 Missing Letters | Tìm chữ cái còn thiếu trong từ |
| ❓ Word Quiz | Chọn từ tiếng Anh đúng với nghĩa (Hard: với định nghĩa tiếng Anh) |
| 🔗 Word Match | Ghép từ với nghĩa (Hard: với định nghĩa tiếng Anh) |
| 🃏 Memory Match | Lật thẻ, ghép cặp tiếng Anh với tiếng Việt |

## Cấp độ

- **🐣 Easy**: có nghĩa tiếng Việt, xếp chữ cái để đánh vần. 10 chủ đề: Days, Months, Planets, Rainbow, Numbers, Seasons, Times of Day, Body, Animals, Fruits A-Z
- **🦁 Hard** (cho bé 10 tuổi): không có nghĩa khi sắp xếp, tự gõ từ theo nghĩa, chữ cái gây nhiễu, định nghĩa tiếng Anh, điểm cao hơn. Thêm 9 chủ đề: Ordinals, Tens, Time, Life Cycle, Growing Up, Big Numbers, Length, Water Cycle, Jobs A-Z

## Tính năng

- Giao diện tiếng Anh, mỗi từ có nghĩa tiếng Việt nhỏ bên dưới
- Chơi được trên điện thoại (chạm để đổi chỗ)
- Phát âm từ tiếng Anh (nút 🔈 Listen). Nếu máy không có giọng đọc tiếng Anh, game tự lấy phát âm từ từ điển trực tuyến
- Nút gợi ý (Easy trừ 2 điểm, Hard trừ 5 điểm)
- Lưu kỷ lục điểm trên máy
- Hiệu ứng pháo giấy, âm thanh hiệu ứng
- Nhạc nền vui tươi do trình duyệt tự tạo, có nút 🎵 Music riêng để tắt nhạc mà vẫn nghe đọc từ

## Chạy trên máy

Mở file `index.html` bằng trình duyệt.

## Thêm chủ đề mới

Mở `script.js`, thêm một mục vào `CATEGORIES` theo mẫu có sẵn: mỗi từ là `["English", "Tiếng Việt"]`, xếp theo thứ tự đúng. Sau đó thêm định nghĩa tiếng Anh cho từng từ vào `definitions.js`.

## Nguồn gốc

Tùy biến từ dự án [Word Adventure](https://github.com/dpkalimbu-dev/word-adventure-game) của dpkalimbu-dev.
