---
author: Phạm Nhật Khoa
pubDatetime: 2026-06-09T20:00:00+07:00
title: "Đói chứ không sụp: khi reward cạn, và làm sao tôi biết cái thước của mình không mù"
slug: doi-chu-khong-sup
featured: true
draft: false
tags:
  - world-models
  - reinforcement-learning
  - dreamer
  - research
  - representation
description: >-
  Khi một agent học kém dưới reward thưa, có hai cách đổ lỗi rất khác nhau: biểu diễn bên
  trong nó sụp đổ (collapse), hay chỉ là policy đói tín hiệu (starvation). Tôi đo trên bản
  Dreamer tự dựng và thấy biểu diễn vẫn khỏe nguyên dù policy chết hẳn — starvation, không
  collapse. Nhưng câu chuyện thật của bài này là một bẫy phương pháp: một con số "không đổi"
  chẳng chứng minh được gì cho tới khi tôi chứng minh được cái thước đo nó *có thể* đổi.
---

## Table of contents

## 0. Hai cách đổ lỗi cho cùng một thất bại

Cho một agent một môi trường reward thưa — phần thưởng hiếm, hầu hết các bước là số không —
và nó thường học kém. Câu hỏi: *vì sao?* Có hai câu trả lời nghe đều hợp lý, nhưng chỉ vào
hai chỗ hoàn toàn khác nhau bên trong agent.

- **Representation collapse**: biểu diễn bên trong (cái latent agent dùng để "hiểu" trạng
  thái) **sụp chiều** — mọi trạng thái bị nén về gần một điểm, agent mất khả năng phân biệt
  tình huống. Trong RL model-free, có cả một dòng lý thuyết cho rằng học bằng bootstrap dưới
  reward thưa gây ra đúng chuyện này.
- **Policy starvation**: biểu diễn vẫn khỏe, vẫn phân biệt được mọi thứ — nhưng **policy
  không có đủ tín hiệu** để biết nên làm gì. Reward thưa tới mức gradient không có gì để leo.

Hai cái này đòi hai cách chữa trái ngược. Nếu là collapse, phải thêm ràng buộc giữ biểu diễn
(SSL, regularizer). Nếu là starvation, biểu diễn không hỏng — phải sửa phần thưởng hoặc khám
phá. Chữa nhầm thì vô ích. Vậy với **Dreamer** — một world model học bằng cách *tái tạo quan
sát* — khi nó gục dưới reward thưa, là cái nào?

Tôi đặt cược trước, viết ra giấy: **starvation, không collapse.** Lý do có cơ sở cơ học, tôi
sẽ nói ở §4. Rồi tôi đi đo.

## 1. Một cái thước cho "biểu diễn có sụp không": effective rank

Để đo "biểu diễn có còn dùng nhiều chiều hay đã nén về một điểm", có một con số gọn:
**effective rank** (tôi dùng định nghĩa srank của Kumar 2020).

Trực giác, bỏ hết công thức: lấy biểu diễn của một mớ trạng thái thật, xếp thành một bảng
(mỗi hàng một trạng thái, 640 cột là 640 chiều latent). Phân tích bảng đó thành các **trục
biến thiên**, xếp theo độ "quan trọng" — trục đầu hứng phần lớn sự khác nhau giữa các trạng
thái, trục sau ít dần. **srank = cần bao nhiêu trục đầu để gom 99% sự biến thiên.**

- Nếu mọi trạng thái bị nén về gần một điểm (collapse), gần như chỉ còn một-hai trục sống →
  srank tụt sát đáy.
- Nếu biểu diễn trải rộng, dùng nhiều chiều để phân biệt tình huống → srank cao.

Với latent 640 chiều của tôi, một biểu diễn khỏe cho srank cỡ vài trăm. Tôi log nó mỗi lần
đánh giá, song song với điểm số.

## 2. Kết quả đầu: policy chết, biểu diễn vẫn sống

Tôi lấy cartpole — một họ task tôi có cả bản reward dày lẫn reward thưa *cùng động lực*, nên
khác biệt duy nhất là độ thưa của phần thưởng. Chạy cả hai, đo điểm và srank.

Bản reward dày học ngon (gần điểm tối đa). Bản reward thưa thì **bập bênh theo seed**: có lần
chạm được phần thưởng sớm và học bình thường, có lần không chạm được gì và **điểm đứng im ở
số không suốt cả buổi tập**.

Đây là chỗ thú vị. Trong cái lần policy chết hẳn — điểm = 0 tuyệt đối, agent không kiếm nổi
một phần thưởng — tôi nhìn srank của nó: **vẫn cao y như bản học tốt.** Và phần lỗi tái tạo
quan sát của world model vẫn nhỏ y hệt. Tức là: world model vẫn *nhìn* và *hiểu* thế giới
hoàn hảo, vẫn dựng lại được quan sát, vẫn dùng đủ chiều — chỉ là cái policy ngồi trên nó
không biết phải làm gì vì chẳng có phần thưởng nào chỉ đường.

> Biểu diễn không sụp. Nó đói. Điểm số bằng không không phải vì agent *mù*, mà vì không ai
> nói cho nó biết đi đâu. Đó là starvation, đúng như tôi cược.

Cái tính bập bênh-theo-seed kia còn củng cố thêm: nếu là collapse thật, ta sẽ thấy biểu diễn
suy thoái *có hệ thống* khi reward thưa dần. Nhưng cái tôi thấy là "hoặc may mà chạm được
phần thưởng rồi học ngon, hoặc không chạm được và đứng im với biểu diễn vẫn nguyên vẹn" —
đó là chữ ký của một vấn đề *tìm đường*, không phải vấn đề *biểu diễn*.

## 3. Cái bẫy: một con số phẳng chứng minh được gì?

Đến đây tôi suýt viết kết luận. Nhưng có một câu hỏi tự dội lại, và nó là toàn bộ lý do bài
này đáng viết:

**srank "không tụt" — nhưng làm sao tôi biết nó *có thể* tụt?**

Nếu cái thước của tôi đơn giản là không nhạy — nếu nó cho ra ~vài trăm bất kể chuyện gì xảy
ra, kể cả khi biểu diễn thật sự sụp — thì "srank giữ nguyên" chẳng nói lên điều gì về biểu
diễn cả. Nó chỉ nói cái thước bị kẹt. Một nhiệt kế luôn chỉ 37°C thì không chứng minh được
bệnh nhân khỏe; nó chứng minh nhiệt kế hỏng.

> Một đại lượng *không đổi* chỉ là bằng chứng khi bạn đã cho thấy nó *biết đổi*. Trước khi
> tin "biểu diễn không sụp vì srank không tụt", tôi phải tự tạo ra một ca biểu diễn **chắc
> chắn** sụp, và kiểm xem srank của tôi có bắt được nó không.

Đây là bước mà tôi nghĩ phân biệt đo-cho-có với đo-để-biết. Không có nó, cả §2 chỉ là một
biểu đồ phẳng đẹp mắt mà vô nghĩa.

## 4. Hiệu chuẩn cái thước bằng một ablation

Làm sao tạo một ca collapse *chắc chắn*? Quay lại lý do tôi cược starvation ngay từ đầu.

Trong RL model-free, biểu diễn bị nặn **hoàn toàn** bởi tín hiệu giá trị (suy ra từ reward).
Reward cạn thì tín hiệu nặn biểu diễn cũng cạn → biểu diễn không có gì giữ nó, sụp. Nhưng
Dreamer thì khác: biểu diễn của nó bị nặn chủ yếu bởi **việc tái tạo quan sát** (recon) và
một ràng buộc nhất quán (KL) — cả hai *không liên quan gì tới reward*. Dù reward bằng không,
world model vẫn có một việc làm: dựng lại thế giới. Việc đó giữ cho biểu diễn giàu.

Nếu giả thuyết này đúng, thì khi tôi **tắt recon và KL** — bắt biểu diễn chỉ được nặn bởi
reward, đúng kiểu model-free — biểu diễn phải sụp. Đó chính là ca collapse tôi cần để hiệu
chuẩn cái thước. Tôi tắt chúng và chạy lại trên đúng task mà bản đầy đủ học tới gần điểm tối
đa.

Kết quả sạch:
- **Điểm kẹt cứng ở mức thấp** (so với gần tối đa của bản đầy đủ) — world model gãy, policy
  không học được gì tử tế.
- **Lỗi tái tạo không hề giảm**, ràng buộc nhất quán nổ tung — đúng là world model không còn
  *hiểu* thế giới nữa.
- Và quan trọng nhất: **srank tụt rõ rệt** — xuống còn khoảng một nửa so với bản đầy đủ ở
  cùng thời điểm, rõ nhất ở giai đoạn đầu.

Vậy là cái thước **nhạy**. srank *biết* tụt khi biểu diễn thật sự sụp. Điều đó cứu toàn bộ
§2: srank giữ cao ở các run reward-thưa-thất-bại bây giờ *có nghĩa* — biểu diễn thật sự khỏe,
không phải cái thước bị kẹt. Và như một phần thưởng kèm theo, cùng cái ablation này trả lời
luôn *cơ chế*: **chính recon+KL là thứ giữ cho biểu diễn của Dreamer không sụp** — bỏ nó đi,
Dreamer cũng collapse y như model-free, ngay cả trên task reward dày.

*(Một vết xước trung thực: srank của bản ablate có nhích lên dần chứ không nằm bẹp ở đáy —
vì task này reward khá dày, riêng tín hiệu reward vẫn nặn được phần nào. "Collapse" ở đây
nghĩa là "rank thấp hơn rõ", không phải về-không tuyệt đối. Và tôi suýt đọc sai cả thí
nghiệm này vì lỡ chạy nó ở một cỡ latent khác — số srank tuyệt đối lệch hẳn, không so được,
phải chạy lại cho khớp. Lại một lần nữa: con số chỉ có nghĩa khi mọi thứ quanh nó được giữ
giống nhau.)*

## 5. Một quan sát thì chưa thành quy luật: thử ở hai sân khác

Mọi thứ trên đều ở cartpole. Trước khi tin, tôi mang câu hỏi sang hai họ task khác hẳn: một
con **tay máy hai khớp với tới đích**, và một trò **hất bóng vào cốc** (phần thưởng nhị phân
0/1 — thưa thật sự).

Cùng một câu hỏi: có run nào srank tụt về vùng collapse không? Câu trả lời, qua cả ba sân:
**không một run nào.** Đáng giá nhất là con tay máy ở mức khó — nó *đói* thật, điểm mới được
một phần ba quãng đường, chưa học xong — mà srank vẫn nằm gọn trong vùng khỏe. Đúng cái vùng
giữa mà nếu collapse có thật thì dễ lộ nhất, nó vẫn không lộ.

## 6. Tôi kết luận được gì — và không được gì

Được: trên bản Dreamer tôi tự dựng, **reward thưa gây policy starvation chứ không
representation collapse**, và lý do cơ học là biểu diễn được nặn bởi recon+KL độc lập với
reward. Cái collapse mà lý thuyết model-free mô tả *không* tự động chuyển sang world model
kiểu này.

Không được: đây là **một bản tái dựng, vài họ task, ít seed**. Tôi không chứng minh một định
luật cho mọi world model. Đây là một *research note* — một quan sát nhỏ, sạch, có hiệu chuẩn
— không phải một tuyên bố tổng quát. Tôi nói rõ vì cái ranh giới đó chính là thứ phân biệt
đáng tin với phóng đại.

Nhưng nếu có một thứ tôi muốn mang ra khỏi bài này, nó không phải kết luận về Dreamer. Nó là
cái khung ở §3–§4:

> Đừng tin một đường phẳng cho tới khi bạn đã làm nó cong. Trước khi kết luận "X không đổi
> nên hệ khỏe", hãy tự tay tạo một ca mà X *phải* đổi, và kiểm cái thước có bắt được không.
> Phần lớn giá trị của một thí nghiệm cẩn thận nằm ở bước hiệu chuẩn mà ai cũng muốn bỏ qua
> đó.

Bài trước tôi học rằng [một con số trần trụi gần như luôn nói
dối](/world-models-blog/posts/7-suyt-tuong-vuot-sota/suyt-tuong-vuot-sota/). Bài này là vế
sau của cùng bài học: một con số *không đổi* cũng nói dối, theo một kiểu lặng lẽ hơn — cho
tới khi bạn chứng minh được nó biết nói thật.

---

*Đây là ghi chép từ một thí nghiệm nhỏ trên world model tôi tự dựng lại — toàn bộ thiết kế
được viết ra (giả thuyết, tiêu chí sai) trước khi chạy. Nếu bạn thấy một lỗ hổng trong cách
tôi hiệu chuẩn hay diễn giải, tôi rất muốn nghe — đó đúng là thứ một người làm việc một mình
khó tự thấy nhất.*
