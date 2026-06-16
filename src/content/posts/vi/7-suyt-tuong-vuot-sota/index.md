---
author: Phạm Nhật Khoa
pubDatetime: 2026-06-08T20:00:00+07:00
title: "Tôi suýt tưởng mình vượt DreamerV3: bốn cái bẫy khi đọc một con số"
slug: suyt-tuong-vuot-sota
featured: true
draft: false
tags:
  - world-models
  - reinforcement-learning
  - dreamer
  - research
  - evaluation
description: >-
  Tôi dựng lại DreamerV3 bằng PyTorch, chạy trên cheetah, và nhận về 860 điểm — trong khi
  bảng điểm chính thức của DreamerV3 chỉ ghi 596. Trong khoảng ba mươi giây tôi đã tin mình
  vừa vượt một trong những thuật toán mạnh nhất ngành. Bài này kể lại tôi đã tháo cái cảm
  giác đó ra như thế nào: bốn confound nối nhau, mỗi cái nuốt một phần khoảng cách, cho tới
  khi 860-so-với-596 chẳng còn nghĩa là gì. Một bài học về việc một con số trần trụi gần như
  luôn nói dối.
---

## Table of contents

## 1. Ba mươi giây nguy hiểm

Tôi vừa dựng lại DreamerV3 từ đầu bằng PyTorch — không copy, gõ lại từng mảnh để hiểu nó
sống ra sao. Chạy trên `cheetah-run`, để 200 nghìn bước, rồi nhìn dòng cuối:

```
final = 860.8 ± 13.1 | BEST = 880.9 @ 180000
```

Tôi mở bảng điểm chính thức của DreamerV3 (danijar công bố kèm repo, đúng cùng cỡ mô hình
tôi dùng). Cheetah-run, trung bình 5 seed, ở mức bão hòa: **596**.

Tôi 860, họ 596.

Trong khoảng ba mươi giây, một ý nghĩ rất ngọt chạy qua đầu: *mình vừa vượt DreamerV3?*

Đây là khoảnh khắc nguy hiểm nhất với một người làm nghiên cứu một mình, không có ai ngồi
cạnh để hỏi "khoan, cậu so cái gì với cái gì vậy?". Không advisor, không reviewer, không
đồng nghiệp liếc qua màn hình. Chỉ có tôi và một con số đang thì thầm điều tôi *muốn* nghe.

> Một con số trần trụi không phải là sự thật. Nó là kết quả của một quy trình đo. Hai quy
> trình đo khác nhau cho ra hai con số không được phép đặt cạnh nhau — dù chúng trông giống
> hệt nhau và cùng đơn vị.

Nên thay vì ăn mừng, tôi làm cái việc mà lẽ ra một advisor sẽ bắt tôi làm: coi "tôi vượt
DreamerV3" là một **nghi phạm**, và đi tìm mọi cách nó có thể sai. Hóa ra có bốn cách. Tôi
loại từng cái một.

## 2. Nghi can thứ nhất: chúng tôi không đếm "bước" giống nhau

Cái bẫy đầu tiên rẻ tiền nhất, và tôi suýt bỏ qua: **"bước" của tôi và "bước" của họ không
phải cùng một thứ.**

Trong cấu hình của tôi có một chi tiết tên `action_repeat = 2`: mỗi khi agent ra một quyết
định, quyết định đó được lặp lại trên **hai** khung hình của môi trường. Nghĩa là "200
nghìn bước agent" của tôi tương ứng với **400 nghìn khung hình** kinh nghiệm thật.

Còn bảng điểm chính thức? Cấu hình DMC của họ dùng `repeat = 1` — một quyết định một khung
hình. Trục hoành của họ đếm khung hình.

Vậy phép so công bằng không phải "tôi ở 200k" với "họ ở 200k", mà là **tôi ở 200k-bước =
400k-khung-hình** với **họ ở 400k-khung-hình**. Tôi bóc lại bảng điểm của họ đúng mốc đó:

| Khung hình | DreamerV3 (chính thức, 5 seed) |
|---|---|
| 200k | 424.8 |
| 400k | 482.5 |
| 500k (bão hòa) | 596.3 |

Tôi đặt cạnh: tôi **860** ở 400k khung hình, họ **482** ở 400k khung hình.

Cái bẫy thứ nhất *có* nuốt một phần — nhưng không đủ. Quy về cùng đơn vị rồi, tôi vẫn cao
gần gấp đôi. Tệ hơn: tôi còn cao hơn cả mức **bão hòa** của họ (596) — tức kể cả cho họ
chạy thêm tới khi không lên nữa, tôi vẫn ở trên. Đơn vị step không cứu được "tôi vượt
DreamerV3". Nghi can một bị loại vì không đủ sức.

Bài học nhỏ mà tôi suýt vấp: **trước khi sướng vì một con số, hãy hỏi trục hoành của nó đếm
bằng gì.** `action_repeat`, frame-skip, số môi trường song song — mỗi thứ bẻ cong "bước"
theo một kiểu.

## 3. Nghi can thứ hai: tôi đo lúc agent diễn, họ đo lúc agent tập

Nghi can này tinh hơn nhiều, và nó là cái lớn nhất.

Khi tôi báo cáo 860, đó là điểm **eval**: tôi cho agent diễn ở chế độ *tất định* — không
thăm dò, không nhiễu, mỗi bước chọn hành động *tốt nhất nó biết* (lấy kỳ vọng của phân phối
hành động, lấy mode của biến tiềm ẩn). Như một diễn viên đã thuộc bài, diễn bản hoàn hảo.

Bảng điểm chính thức gần như chắc chắn ghi **train return**: điểm mà agent kiếm được *trong
lúc đang tập* — tức policy vẫn còn nhiễu thăm dò, vẫn cố tình làm điều ngẫu nhiên để học.
Như một diễn viên vừa diễn vừa thử các cách khác nhau, cố tình vấp để xem vấp thì sao.

Diễn viên thuộc bài luôn ghi điểm cao hơn diễn viên đang-thử. Cùng một agent, hai cách đo,
hai con số khác nhau — và khác *một cách có hệ thống*, luôn nghiêng về phía eval.

Làm sao tôi biết đây không phải lại một câu chuyện kể-sau? Vì tôi có **cây cầu**: log của
tôi cũng ghi train return (điểm lúc agent đang tập, có nhiễu). Cuối run, nó dao động quanh
**~700**. Vậy ba con số xếp thành một chuỗi gọn gàng:

```
482   →   ~700   →   860
(họ, lúc tập)   (tôi, lúc tập)   (tôi, lúc diễn)
   cùng 400k khung hình            eval tất định
```

Cú nhảy từ ~700 lên 860 — khoảng 23% — chính là khoảng cách "diễn viên thuộc bài" so với
"diễn viên đang thử". Nó không nói gì về chuyện thuật toán của tôi giỏi hơn. Nó chỉ nói tôi
đang đo agent ở một trạng thái dễ ăn điểm hơn so với cách họ đo.

> Khi bạn thấy mình hơn một baseline, câu hỏi đầu tiên không phải "vì sao tôi giỏi hơn?" mà
> là "chúng tôi có đang đo cùng một thứ ở cùng một khoảnh khắc không?". Eval-tất-định so với
> train-có-nhiễu là cái bẫy so-táo-với-cam kinh điển, và nó luôn nghiêng về phía bạn.

## 4. Nghi can thứ ba: tôi chơi ở mức dễ hơn

Còn lại khoảng cách ~700 (tôi, lúc tập) so với 482 (họ, lúc tập) ở cùng số khung hình. Dư
ra ~45%. Cái này từ đâu?

Quay lại `action_repeat = 2`. Nó không chỉ bẻ cong trục đếm bước (mục 2) — nó còn **làm bài
toán dễ đi**. Khi mỗi quyết định kéo dài hai khung hình, agent ra ít quyết định hơn cho cùng
một quãng thời gian (500 thay vì 1000 trên mỗi tập), tín dụng (cái gì dẫn tới phần thưởng)
lan ngược nhanh hơn, và việc thăm dò "đi được xa" hơn cho mỗi lần thử. Trên `cheetah`, lặp
hành động 2–4 lần là một mẹo *được biết là giúp ích*. Cấu hình chính thức không dùng mẹo đó.

Vậy phần dư ~45% phần lớn không phải "recipe tôi thông minh hơn", mà là **tôi đang chơi
phiên bản dễ hơn của cùng trò chơi** — cộng thêm vài khác biệt nhỏ trong công thức (tôi có
một thành phần phụ tên repval neo giá trị vào trạng thái thật) mà tôi không tách bạch được
nếu không chạy thí nghiệm đối chứng riêng.

Cộng cả ba nghi can lại, chuỗi khép kín hoàn toàn:

**482 (họ, lúc tập, 400k khung) → ~700 (tôi, lúc tập: do lặp hành động dễ hơn + recipe phụ)
→ 860 (tôi, lúc diễn: do đo tất định).**

Không còn một xu nào của khoảng cách cần tới giả thuyết "tôi vượt DreamerV3". Mọi đồng đều
giải thích được bằng *cách tôi đo* và *mức tôi chơi*. Nghi phạm gốc — "tôi beat SOTA" —
sụp đổ hoàn toàn.

## 5. Hai bài học phụ mà cùng tuần đó dạy tôi

Trong lúc đối chứng, hai môi trường khác dạy tôi thêm hai cái bẫy nhỏ.

**Cartpole: "dễ" không có nghĩa là "nhanh".** Tôi từng nghĩ cartpole-balance là trò trẻ
con, đáng lẽ đạt gần điểm tối đa ngay tức thì. Khi nó mới 671 ở 30k bước, tôi suýt kết luận
"có gì đó hỏng". Nhưng bảng điểm chính thức cho thấy chính DreamerV3 ở 30k cũng chỉ ~371 —
thậm chí có một cú *tụt* ở giữa — và phải tới ~100k mới leo lên ~840, tới 200k mới ~941.
Cartpole có **trần cao** (dễ theo nghĩa cuối cùng đạt điểm cao), nhưng **leo chậm** (vì
world model phải học mô hình trước đã). Tôi đã lẫn "trần cao" với "lên nhanh". 671 của tôi
ở 30k thực ra đang *trên* đường của họ — không hề hỏng.

**Acrobot: một seed thì không nói được gì.** Acrobot-swingup của tôi chỉ đạt ~25 và đứng
im. Lỗi của tôi? Tôi bóc bảng điểm: DreamerV3 ở acrobot, sau gần 500k khung hình, cũng chỉ
~132 — và năm seed của họ rải ra `[199, 134, 139, 10, 176]`. Có một seed chỉ được 10. Ở mốc
30k, năm seed của họ là `[75, 44, 2, 37, 0]` — có seed *bằng không*. Con số 25 của tôi (một
seed) nằm gọn trong đám hỗn loạn đó. Acrobot vốn là môi trường khó nhất của cả bộ, và phương
sai giữa các seed lớn tới mức **một lần chạy đơn lẻ không phải là dữ liệu** — nó chỉ là một
mẫu rút ra từ một phân phối rất rộng. Họ phải chạy năm seed là có lý do.

Và cái bẫy ngược, cũng đáng ghi: **thất bại *đúng kiểu* baseline thất bại lại là tín hiệu
tốt.** Nếu bản dựng lại của tôi bỗng đạt acrobot 500 điểm trong khi bản gốc không làm được,
*đó* mới là lúc tôi phải nghi có bug — rò rỉ phần thưởng, đo sai, gì đó. Việc tôi fail
acrobot theo đúng thang và đúng độ-hỗn-loạn của bản gốc là bằng chứng tôi dựng lại *trung
thực*.

## 6. Phép thử cuối: nếu câu chuyện đúng, ba môi trường kia phải im lặng

Tới đây tôi đã trừ xong mọi confound cho *một* môi trường — cheetah. Nhưng một lời giải
thích chỉ thành kiến thức khi nó **dự đoán được điều mình chưa nhìn**. Câu chuyện ở trên —
"con số cao của tôi là do giao thức đo (lặp hành động + eval tất định), và cheetah chỉ tình
cờ là chỗ nó lộ ra" — vậy nó dự đoán gì về ba môi trường còn lại?

Tôi viết dự đoán ra trước khi chạy: nếu khoảng cách của tôi *chủ yếu* là giao thức chứ
không phải năng lực, thì ở những môi trường mà cả tôi lẫn bản gốc **đều đụng trần** (gần
1000 điểm), khoảng cách phải **biến mất** — vì không ai vượt được trần, lợi thế giao thức
bị nén phẳng. Ở môi trường *khó tới mức cả hai đều bò dưới sàn* (acrobot), cũng phải khớp,
nhưng khớp ở mức thấp. Chỉ những môi trường còn *khoảng trống* ở giữa mới để lộ chênh lệch.

Nếu trái lại — nếu tôi vượt bản gốc *ở mọi môi trường* một cách đồng đều — thì câu chuyện
"chỉ là giao thức" của tôi sai, và tôi phải nghĩ lại nghiêm túc.

Tôi chạy cả bốn tới 200k bước (= 400k khung hình), cùng một bộ tham số, không chỉnh gì giữa
các môi trường. Đây là bảng, đã quy về cùng đơn vị khung hình:

| Môi trường | Tôi (eval tất định) | DreamerV3 @400k khung | Trần thực tế |
|---|---|---|---|
| cheetah-run | 828.9 | 482.5 | còn khoảng trống |
| walker-walk | 963.8 | 931.8 | gần 1000 |
| cartpole-balance | 997.0 | 986.5 | gần 1000 |
| acrobot-swingup | 153.2 | 155.3 | rất thấp (khó) |

Dự đoán trúng. **Ba trong bốn môi trường, tôi khớp bản gốc gần như chính xác** — walker
964 so với 932, cartpole 997 so với 987, acrobot 153 so với 155. Cú vượt gần gấp đôi *chỉ*
xảy ra ở cheetah. Và cheetah đúng là môi trường duy nhất còn khoảng trống: walker với
cartpole bị trần ~1000 nén cả hai về sát nhau, acrobot bị cái khó của nó dìm cả hai xuống
đáy. Lợi thế giao thức của tôi không biến mất ở những chỗ đó — nó chỉ *không có chỗ để
hiện ra*.

> Đây là lúc câu chuyện confound của tôi đi từ "nghe hợp lý" thành "đã được kiểm". Nếu cú
> vượt của tôi là năng lực thật, nó phải xuất hiện ở mọi môi trường. Nó chỉ xuất hiện đúng
> ở môi trường cho phép giao thức lộ mặt. Đó là chữ ký của một artifact, không phải một
> phát hiện.

Một chi tiết nhỏ mà tôi thấy đáng giữ lại cho thành thật: cheetah trong lần chạy gộp này ra
**829**, còn lần chạy riêng ở đầu bài là **860** — cùng tham số, cùng seed, lệch 31 điểm.
Bản thân chênh lệch giữa hai lần chạy của *chính tôi* đã đủ nhắc rằng một con số lẻ luôn
đeo một vầng nhiễu quanh nó. Huống chi là đem so với con số của người khác, đo bằng giao
thức khác.

## 7. Vậy rốt cuộc tôi đã làm được gì?

Không phải "vượt DreamerV3". Câu đó chết ngay khi tôi tháo nó ra.

Cái tôi *được phép* nói, sau khi mọi confound đã được trừ đi, khiêm tốn hơn nhiều nhưng là
thật: **công thức DreamerV3 mà tôi tự gõ lại bằng PyTorch học một cách khỏe mạnh** — đường
học leo mượt, hội tụ về một mức cao hợp lý cho cheetah ở thiết lập của tôi, và *ổn định* ở
cuối (độ lệch chuẩn giữa các lần eval chỉ còn 3–13 điểm, không sụp đổ, không dao động dại).
Đó là một bản tái dựng **thành công về mặt hành vi học**. Không phải một kỷ lục.

Sự khác biệt giữa hai câu đó — "tôi vượt SOTA" và "bản dựng lại của tôi học đúng cách" — là
toàn bộ khoảng cách giữa tự lừa mình và làm khoa học.

> Tái dựng thành công không đo bằng con số cuối to bằng hay hơn bản gốc. Nó đo bằng *hình
> dạng* của quá trình học: có leo không, có ổn định không, có thất bại ở đúng những chỗ bản
> gốc thất bại không. Con số tuyệt đối là thứ dễ bị protocol bẻ cong nhất, nên là thứ đáng
> tin cậy ít nhất.

Nếu sau này tôi muốn một phép so đầu-đối-đầu *thật sự* công bằng để đưa vào một bài viết
nghiêm túc, chỉ có một cách: chạy lại đúng cùng giao thức của họ — `action_repeat = 1`, báo
cáo cùng loại return, cùng số seed. Trước khi làm điều đó, mọi câu "tôi hơn X" đều là lời
nói dối dễ chịu.

Tôi viết bài này một phần để tự nhắc, một phần vì tôi ngờ rằng cái bẫy "ba mươi giây ngọt
ngào" kia không chừa ai đang học một mình. Nếu bạn cũng đang dựng lại một thuật toán và thấy
mình bỗng hơn bản gốc — xin chúc mừng, bạn vừa tìm thấy một confound, chưa phải một phát
hiện. Hãy đi tìm nó. Gần như luôn có.

---

*Bài này nối tiếp loạt ghi chép dựng lại world model của tôi —
[bài trước](/world-models-blog/posts/6-giac-mo-nao-thi-troi/giac-mo-nao-thi-troi/) là về
việc để dữ liệu sửa lời giải thích của chính mình. Nếu bạn thấy tôi sai ở đâu trong cách
trừ confound trên, tôi rất muốn nghe — đó đúng là thứ một người làm việc một mình thiếu
nhất.*
