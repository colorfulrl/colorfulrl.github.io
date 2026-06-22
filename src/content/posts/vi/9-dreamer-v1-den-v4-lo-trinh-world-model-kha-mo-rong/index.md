---
author: Phạm Nhật Khoa
pubDatetime: 2026-06-22T21:00:00+07:00
title: "Từ Dreamer V1 đến Dreamer V4: một lộ trình tới các world model khả mở rộng"
titleEn: "Dreamer V1 to Dreamer V4: A Path Toward Scalable World Models"
slug: dreamer-v1-den-v4-lo-trinh-world-model-kha-mo-rong
featured: true
draft: false
tags:
  - world-models
  - reinforcement-learning
  - dreamer
  - rssm
  - world-model
description: >-
  Một khảo sát kỹ thuật về bốn thế hệ Dreamer (Hafner và cộng sự, 2020–2025). Luận điểm trung
  tâm: V1, V2, V3 là ba lần tinh chỉnh liên tục trên cùng một kiến trúc lõi (RSSM + học hành vi
  trong tưởng tượng), trong khi V4 là một đứt gãy kiến trúc — thay RSSM bằng transformer và một
  mục tiêu khuếch tán, đánh đổi sự gọn nhẹ lấy khả năng mở rộng. Bài phân tích từng thay đổi
  theo hai trục: biểu diễn trạng thái và ngân sách tính toán.
descriptionEn: >-
  A technical survey of the four Dreamer generations (Hafner et al., 2020–2025). Central thesis:
  V1, V2, and V3 are three successive refinements of one core architecture (RSSM plus behavior
  learning in imagination), while V4 is an architectural break — replacing the RSSM with a
  transformer and a diffusion objective, trading compactness for scalability. The article
  analyzes each change along two axes: state representation and compute budget.
---

## Table of contents

## 1. Một dòng phương pháp, hai loại thay đổi

Dòng Dreamer gồm bốn công trình của Danijar Hafner và cộng sự, trải dài từ 2020 đến 2025:

| Phiên bản | Công bố | Định danh | Miền thắng tiêu biểu |
|---|---|---|---|
| Dreamer V1 | *Dream to Control* (ICLR 2020, arXiv 1912.01603) | RSSM + actor-critic trong tưởng tượng | DM Control, điều khiển liên tục từ pixel |
| Dreamer V2 | *Mastering Atari with Discrete World Models* (ICLR 2021, arXiv 2010.02193) | latent rời rạc | Atari, mức con người trên một GPU |
| Dreamer V3 | *Mastering Diverse Domains through World Models* (2023, arXiv 2301.04104) | một bộ siêu tham số cho mọi miền | hơn 150 tác vụ, kim cương Minecraft từ con số không |
| Dreamer V4 | *Training Agents Inside of Scalable World Models* (2025, arXiv 2509.24527) | transformer + shortcut forcing | kim cương Minecraft hoàn toàn từ dữ liệu ngoại tuyến |

Khi đặt cạnh nhau, bốn phiên bản này dễ bị đọc thành một danh sách bốn mô hình tách rời. Cách
đọc đó bỏ lỡ điểm quan trọng nhất. Lập luận của bài viết là: **dòng Dreamer chứa hai loại thay
đổi có bản chất khác nhau.**

- **V1 → V2 → V3 là ba lần *tinh chỉnh* trên cùng một kiến trúc lõi.** Lõi đó là RSSM
  (Recurrent State-Space Model) làm world model, cộng với một actor-critic được huấn luyện hoàn
  toàn bên trong các chuỗi do world model sinh ra. Mỗi phiên bản giữ nguyên xương sống này và
  thay một số bộ phận để vá một lớp thất bại cụ thể: V2 vá biểu diễn cho miền rời rạc, V3 vá độ
  bền (robustness) để một cấu hình chạy được mọi miền.
- **V3 → V4 là một *đứt gãy* kiến trúc.** V4 loại bỏ RSSM, thay bằng một transformer quy mô lớn
  và một mục tiêu sinh dựa trên khuếch tán (diffusion). Nó từ bỏ ngân sách "một GPU" đặc trưng
  của ba phiên bản trước để đổi lấy khả năng mở rộng theo dữ liệu và tham số. Cái tên "Dreamer"
  được giữ lại vì nguyên lý *huấn luyện hành vi trong tưởng tượng* vẫn còn; nhưng cỗ máy sinh ra
  giấc tưởng tượng đó đã được thay mới gần như toàn bộ.

Phần còn lại của bài đi theo trật tự đó. Mục 2 cô lập phần *bất biến* xuyên suốt bốn đời. Các
mục 3–6 phân tích từng phiên bản: nó thay gì, vì sao, và để lại hạn chế nào cho phiên bản sau.
Mục 7 tổng hợp toàn bộ theo hai trục — biểu diễn trạng thái và ngân sách tính toán. Mục 8 rút ra
hệ quả cho nghiên cứu trong điều kiện tính toán hạn chế.

## 2. Phần bất biến: học hành vi trong tưởng tượng

Trước khi xét các khác biệt, cần xác định cái không đổi. Cả bốn phiên bản đều là hiện thực của
một lược đồ Dyna mở rộng: học một mô hình của môi trường, rồi dùng mô hình đó để sinh dữ liệu
huấn luyện cho chính sách, thay vì tiêu tốn tương tác thật. Ba thành phần dưới đây có mặt ở mọi
phiên bản (với V4 thay đổi cách hiện thực, không thay vai trò).

### 2.1 World model trong không gian latent

World model không dự đoán quan sát kế tiếp trực tiếp trong không gian pixel ở mỗi bước. Nó nén
quan sát vào một trạng thái latent và dự đoán động lực trong không gian latent đó. Lợi ích kép:
một bước "tưởng tượng" trong latent rẻ hơn nhiều so với sinh một khung hình đầy đủ, và biểu diễn
nén loại bỏ phần lớn chi tiết không liên quan tới việc ra quyết định.

Ở V1–V3, world model là RSSM. Trạng thái mỗi bước tách thành hai phần:

- một thành phần **xác định** $h_t$, do một mạng hồi quy (GRU) mang qua thời gian, tích lũy lịch sử;
- một thành phần **ngẫu nhiên** $z_t$, mô hình hóa phần bất định của trạng thái.

RSSM định nghĩa hai phân phối trên $z_t$:

- **posterior** $q(z_t \mid h_t, o_t)$ — dùng khi có quan sát $o_t$;
- **prior** $p(z_t \mid h_t)$ — dùng khi không có quan sát, tức là khi tưởng tượng.

Huấn luyện ép hai phân phối này gần nhau qua một số hạng KL. Đây là điều kiện để việc tưởng tượng
(chỉ dùng prior) không trôi ra khỏi phân phối mà posterior từng quan sát. Tầm quan trọng của ràng
buộc này chính là chủ đề mà các phiên bản sau liên tục can thiệp.

### 2.2 Ba vòng lặp tách bạch

Quá trình huấn luyện gồm ba vòng lặp được tách rời có chủ đích:

1. **Thu thập dữ liệu.** Chạy chính sách hiện tại trong môi trường thật, lưu chuỗi
   $(o_t, a_t, r_t)$ vào bộ đệm phát lại (replay buffer). Đây là phần duy nhất tốn tương tác thật.
2. **Cập nhật world model.** Lấy chuỗi từ bộ đệm, tối ưu mục tiêu sinh (tái tạo quan sát, dự đoán
   phần thưởng, ràng buộc KL). Vòng này chỉ động vào các thành phần của world model.
3. **Cập nhật hành vi.** Sinh các chuỗi tưởng tượng từ world model, tính mục tiêu giá trị trên đó,
   cập nhật actor và critic. Vòng này không chạm môi trường thật.

Việc tách vòng 2 và vòng 3 là một lựa chọn về tính ổn định: world model được huấn luyện trên một
mục tiêu cố định (khớp dữ liệu), không phải đuổi theo một chính sách đang thay đổi. Phần thưởng
thật không được đưa thẳng vào cập nhật chính sách; nó chỉ là mục tiêu huấn luyện cho bộ dự đoán
phần thưởng, và chính bộ dự đoán này mới sinh tín hiệu phần thưởng cho actor-critic trong vòng 3.

### 2.3 λ-return và gradient pathwise

Trong vòng 3, mỗi chuỗi tưởng tượng dài $H$ bước được quy về một mục tiêu giá trị bằng **λ-return** —
trung bình có trọng số hình học của các ước lượng $n$-bước, mỗi ước lượng "chốt" phần đuôi bằng
critic:

$$
V_\lambda(s_\tau) = (1-\lambda)\sum_{n=1}^{H-1}\lambda^{n-1} V^n(s_\tau) + \lambda^{H-1} V^H(s_\tau),
\qquad
V^n(s_\tau) = \sum_{k=0}^{n-1}\gamma^k r_{\tau+k} + \gamma^n v(s_{\tau+n}).
$$

Tham số $\lambda$ điều chỉnh cân bằng giữa thiên lệch và phương sai: $\lambda \to 0$ quy về một
bước bootstrap, $\lambda \to 1$ quy về Monte Carlo trên toàn chuỗi tưởng tượng. Critic học để dự
đoán $V_\lambda$ (với mục tiêu được tách gradient), actor học để làm $V_\lambda$ tăng.

Điểm cốt lõi phân biệt Dreamer với học tăng cường model-free nằm ở *cách* actor lấy gradient. Vì
world model là một mạng neural khả vi, $V_\lambda$ khả vi theo trạng thái, trạng thái khả vi theo
hành động (qua tái tham số hóa), và hành động khả vi theo tham số actor. Gradient do đó chảy
thẳng xuyên qua $H$ bước tưởng tượng:

$$
\nabla_\psi \mathcal{L}_{\text{actor}}
= -\,\nabla_\psi \mathbb{E}\!\left[\sum_\tau V_\lambda(s_\tau)\right].
$$

Đây là gradient **pathwise** (còn gọi là reparameterization gradient), khác với ước lượng score
function (REINFORCE) của model-free. REINFORCE chỉ biết "hành động này dẫn tới giá trị cao, tăng
xác suất của nó"; gradient pathwise biết "dịch hành động theo hướng này thì giá trị tăng" — một
vector chỉ hướng, không chỉ một đại lượng vô hướng. Tín hiệu giàu hơn này là nguồn gốc của hiệu
quả mẫu. Nó cũng đặt ra một điều kiện cứng: mọi thành phần trên đường gradient phải khả vi —
ràng buộc sẽ định hình các lựa chọn thiết kế ở mọi phiên bản sau.

Ba yếu tố trên — world model latent, ba vòng lặp tách bạch, λ-return với cập nhật actor-critic —
là khung không đổi. Bốn phiên bản khác nhau ở chỗ *điền vào khung này như thế nào*.

## 3. Dreamer V1 (2020): thiết lập paradigm

V1 là phiên bản thiết lập toàn bộ khung ở Mục 2 và chứng minh nó hoạt động end-to-end trên quan
sát pixel.

### 3.1 Mục tiêu world model

Thành phần ngẫu nhiên $z_t$ ở V1 là một biến **Gaussian**: prior và posterior đều xuất ra trung
bình và độ lệch chuẩn. World model được huấn luyện bằng một cận dưới bằng chứng (ELBO) mở rộng
qua thời gian:

$$
\mathcal{L}_{\text{model}} = \mathbb{E}_q\!\left[\sum_t
\underbrace{\log p(o_t \mid s_t)}_{\text{tái tạo}}
+ \underbrace{\log p(r_t \mid s_t)}_{\text{phần thưởng}}
- \beta\, \underbrace{D_{\mathrm{KL}}\!\big(q(z_t\mid h_t,o_t)\,\|\,p(z_t\mid h_t)\big)}_{\text{khớp prior–posterior}}
\right].
$$

Số hạng tái tạo neo trạng thái latent vào quan sát thật. Số hạng phần thưởng là một bổ sung quan
trọng so với mô hình thị giác task-agnostic của thế hệ World Models trước đó (Ha và Schmidhuber,
2018): vì phần thưởng phải khả vi theo trạng thái để gradient pathwise chảy được, bộ dự đoán phần
thưởng buộc phải nằm *bên trong* world model. Hệ quả là biểu diễn của V1 mang tính task-aware —
nó học các đặc trưng quan trọng cho tác vụ, không chỉ để tái tạo thế giới.

### 3.2 Cấu hình và kết quả

V1 sử dụng chân trời tưởng tượng $H = 15$, $\gamma = 0.99$, $\lambda = 0.95$. Vì world model
Gaussian khả vi và actor Gaussian dùng tái tham số hóa, toàn bộ vòng 3 được tối ưu bằng lan
truyền ngược chuẩn. Trên bộ DM Control với quan sát pixel, V1 đạt hiệu quả mẫu vượt các phương
pháp model-free mạnh đương thời (ví dụ D4PG) trong khi chỉ dùng quan sát ảnh. Đóng góp được kiểm
chứng là: một actor-critic huấn luyện hoàn toàn trong tưởng tượng, với gradient pathwise chảy qua
một world model học được, là khả thi và hiệu quả mẫu trên điều khiển liên tục từ pixel.

### 3.3 Hạn chế dẫn tới V2

V1 để lại ba điểm yếu cụ thể, mỗi điểm là một mục tiêu cho phiên bản sau:

- **Latent Gaussian là đơn đỉnh.** Một Gaussian giả định trạng thái thật nằm quanh một điểm với
  nhiễu đối xứng. Giả định này hợp với động lực trơn của điều khiển liên tục, nhưng sai trên các
  miền có cấu trúc rời rạc hoặc đa đỉnh.
- **KL prior–posterior dễ mất cân bằng.** Phạt KL đối xứng kéo cả hai phân phối về nhau với lực
  bằng nhau, có thể bóp nghẹt thông tin trong posterior hoặc khiến prior học chậm.
- **Nhạy với thang đo.** Phần thưởng và quan sát ở các miền khác nhau có thang đo rất khác nhau,
  buộc phải tinh chỉnh siêu tham số lại cho mỗi miền.

V2 xử lý hai điểm đầu; V3 xử lý điểm thứ ba.

## 4. Dreamer V2 (2021): world model rời rạc

V2 giữ nguyên khung ba vòng lặp và mục tiêu trong tưởng tượng, nhưng thay đổi *biểu diễn trạng
thái* và *cách định tuyến gradient*. Kết quả là agent model-based đầu tiên đạt mức con người trên
bộ Atari 55 trò chơi, trên một GPU đơn — một miền mà trước đó thuộc về các phương pháp model-free.

### 4.1 Latent categorical thay cho Gaussian

V2 thay $z_t$ Gaussian bằng một tập **32 biến categorical, mỗi biến 32 lớp**. Mỗi biến là một
vector one-hot 32 chiều; ghép lại, $z_t$ là một vector thưa 1024 chiều. Prior và posterior giờ
xuất ra logit cho 32 phân phối categorical thay vì tham số Gaussian.

Lý do là tính đa đỉnh. Nhiều trạng thái trong trò chơi điện tử về bản chất là rời rạc hoặc đa
đỉnh: một vật thể có thể ở một trong nhiều vị trí tách biệt, hoặc xuất hiện và biến mất theo kiểu
nhị phân. Một Gaussian đơn đỉnh buộc phải bôi trung bình ra giữa các chế độ và mô tả sai tất cả.
Tập categorical biểu diễn các chế độ tách biệt một cách tự nhiên.

Lấy mẫu one-hot là phép không khả vi, nên V2 dùng ước lượng **straight-through**: ở chiều thuận
dùng mẫu one-hot cứng, ở chiều ngược cho gradient chảy qua xác suất softmax.

$$
z = \text{onehot}(\text{sample}) + p - \text{stopgrad}(p),
\qquad p = \text{softmax}(\text{logits}).
$$

Giá trị của $z$ bằng đúng mẫu one-hot (vì $p - \text{stopgrad}(p) = 0$ về giá trị), nhưng gradient
chảy qua $p$. KL giữa hai trạng thái categorical trở thành tổng KL của 32 phân phối thành phần,
mỗi phân phối tính theo công thức rời rạc $\sum_k q_k \log(q_k/p_k)$.

### 4.2 KL balancing

Số hạng KL gánh hai vai trò không đối xứng. Posterior (có quan sát) nên được tự do mã hóa thông
tin; prior (dùng khi tưởng tượng) nên học đuổi theo posterior. Phạt KL đối xứng dùng một nửa lực
để kéo posterior về prior — chiều không mong muốn. V2 tách KL thành hai số hạng với trọng số lệch:

$$
\mathcal{L}_{\text{KL}} = \alpha\, D_{\mathrm{KL}}\!\big(\text{stopgrad}(q)\,\|\,p\big)
+ (1-\alpha)\, D_{\mathrm{KL}}\!\big(q\,\|\,\text{stopgrad}(p)\big).
$$

Số hạng thứ nhất chỉ cho prior học (posterior bị tách gradient), số hạng thứ hai chỉ cho posterior
học. Đặt trọng số lớn hơn cho số hạng thứ nhất hướng phần lớn lực vào việc đẩy prior đuổi theo
posterior, đồng thời chỉ regularize nhẹ posterior để không phá hủy thông tin của nó. Giá trị KL
thuận không đổi; chỉ gradient được định tuyến lại.

### 4.3 Gradient actor cho hành động rời rạc

Gradient pathwise hoạt động tốt với hành động liên tục, nơi việc tái tham số hóa trơn. Với hành
động rời rạc, đường straight-through qua actor mang thiên lệch và dễ làm sụp entropy. V2 cho phép
trộn hai loại gradient bằng một hệ số: REINFORCE (score function) cho phần rời rạc, pathwise cho
phần liên tục, cộng một số hạng thưởng entropy luôn hiện diện. Trên Atari, cấu hình nghiêng hẳn
về REINFORCE; trên điều khiển liên tục, nghiêng về pathwise. V2 không thay nguyên lý mà chọn đúng
công cụ gradient theo loại hành động.

### 4.4 Bộ dự đoán continue

Các trò chơi Atari có trạng thái kết thúc (game over). V2 thêm một bộ dự đoán nhị phân cho xác
suất chuỗi còn tiếp tục, để chiết khấu trong tưởng tượng cắt đúng tại các trạng thái kết thúc.
Thành phần này cần cho mọi miền có episode hữu hạn và được bỏ đi ở các miền điều khiển vô hạn.

Ablation trong bài báo cho thấy hai thay đổi đóng góp phần lớn cải thiện là latent categorical và
KL balancing. Hai thay đổi còn lại là điều kiện cần để chạy đúng trên miền rời rạc, có kết thúc.

## 5. Dreamer V3 (2023): một công thức, mọi miền

V2 vẫn cần tinh chỉnh theo miền. V3 nhắm thẳng vào điều đó. Đóng góp của nó không phải một thuật
toán "thông minh hơn" mà là **độ bền**: cùng một bộ siêu tham số, không tinh chỉnh lại, đạt hiệu
năng mạnh trên hơn 150 tác vụ trải khắp các miền có tính chất rất khác nhau — từ điều khiển liên
tục tới Atari, tới Minecraft. Cột mốc đáng chú ý là thu thập kim cương trong Minecraft từ con số
không, không dùng dữ liệu người chơi.

### 5.1 Vấn đề chung: bất biến với thang đo

Sợi chỉ nối mọi thành phần mới của V3 là **bất biến với thang đo (scale-invariance)**. Các đại
lượng — phần thưởng, lợi tức (return), quan sát — có thang đo khác nhau hàng nghìn lần giữa các
miền. Một bộ siêu tham số tối ưu cho thang này sẽ hỏng ở thang khác. V3 thêm một loạt biến đổi để
làm mọi tín hiệu độc lập với thang đo cụ thể, nhờ đó một cấu hình chạy được mọi nơi. Đáng chú ý
về mặt phương pháp: V3 chủ yếu là V2 cộng một hộp công cụ chống-thang-đo, chứ không phải một lõi
mới.

### 5.2 Symlog: nén thang đo rộng

Bộ dự đoán hồi quy học kém khi mục tiêu trải trên thang rất rộng, vì sai số bình phương bị các giá
trị lớn chi phối. V3 học trong không gian symlog (logarit đối xứng):

$$
\text{symlog}(x) = \text{sign}(x)\,\ln(1+|x|),
\qquad
\text{symexp}(y) = \text{sign}(y)\,(e^{|y|}-1).
$$

Gần không, $\ln(1+|x|)\approx |x|$, nên giá trị nhỏ gần như được giữ nguyên; xa không, hàm nén
theo logarit (giá trị $10^4$ co về cỡ $9{,}2$). Tính đối xứng theo dấu xử lý cả giá trị âm. Cùng
một tốc độ học do đó xử lý được cả phần thưởng rất nhỏ lẫn rất lớn. V3 áp dụng symlog cho bộ giải
mã quan sát liên tục, bộ dự đoán phần thưởng và critic.

### 5.3 Two-hot: biến hồi quy thành phân loại

Thay vì hồi quy một số vô hướng cho phần thưởng và giá trị, V3 đặt một lưới các mốc (bins) cố định
trong không gian symlog và để bộ dự đoán xuất một phân phối trên các mốc đó. Giá trị được khôi
phục bằng kỳ vọng $\sum_k p_k b_k$. Mục tiêu huấn luyện là mã hóa **two-hot**: đặt trọng số nội
suy tuyến tính lên hai mốc gần nhất. Ví dụ với các mốc $[0,1,2,3]$ và giá trị thật $1{,}3$, mục
tiêu là $0{,}7$ tại mốc $1$ và $0{,}3$ tại mốc $2$, vì $0{,}7\cdot 1 + 0{,}3\cdot 2 = 1{,}3$. Hàm
mất mát là entropy chéo. Phân loại với entropy chéo ổn định hơn sai số bình phương trên thang
rộng, và một phân phối trên các mốc có thể biểu diễn lợi tức đa đỉnh.

### 5.4 Chuẩn hóa lợi tức theo phân vị

Mất mát của actor tỉ lệ với $-V_\lambda$. Nếu $V_\lambda$ đổi thang giữa các miền hoặc trôi trong
quá trình huấn luyện, độ lớn gradient của actor đổi theo, buộc phải tinh chỉnh hệ số entropy cho
mỗi nơi. V3 chuẩn hóa lợi tức bằng một khoảng phân vị:

$$
S = \text{Per}(R, 95) - \text{Per}(R, 5),
\qquad
\hat{R} = \frac{R}{\max(1, S)}.
$$

Actor tối ưu $\hat{R}$, vốn đã đưa về cỡ đơn vị. Nhờ vậy một hệ số entropy cố định hoạt động trên
mọi miền. Mẫu số $\max(1, S)$ tránh khuếch đại nhiễu khi lợi tức thật sự nhỏ.

### 5.5 Free bits và unimix

Hai vá nhỏ hơn nhưng quan trọng cho độ ổn định:

- **Free bits.** Cắt số hạng KL ở một ngưỡng sàn (cỡ một nat): KL chỉ bị phạt khi vượt sàn. Điều
  này ngăn việc tối ưu dồn lực vào nén KL về không một cách vô ích, qua đó tránh việc bỏ phí dung
  lượng của latent. Đặt ngưỡng này sai có hệ quả đo được lên hiệu năng — một quan sát đã được khảo
  sát riêng trong các ghi chú thực nghiệm trên blog này.
- **Unimix categorical.** Trộn một tỉ lệ nhỏ phân phối đều vào mỗi categorical:
  $p = (1-\epsilon)\,p_{\text{net}} + \epsilon\,\text{Uniform}$. Nhờ đó không xác suất nào bằng
  không tuyệt đối, và KL cùng log-xác suất không phát tán về vô cực.

### 5.6 Khả năng mở rộng thuận lợi

Ngoài độ bền, V3 cho thấy một tính chất quan trọng cho định hướng nghiên cứu: tăng kích thước mô
hình cải thiện điểm số một cách đều đặn, đồng thời tăng hiệu quả mẫu. Tính chất này là điều kiện
để "đáng tin khi đổ thêm tính toán vào" — và nó báo trước hướng đi của V4. Tuy nhiên, cần phân
biệt: ở V3, khả năng mở rộng vẫn nằm trong khung RSSM một-GPU. V4 mới là phiên bản đẩy hẳn sang
chế độ nặng về tính toán.

## 6. Dreamer V4 (2025): đứt gãy kiến trúc

Ba phiên bản đầu chia sẻ một lõi RSSM. V4 thay lõi đó. Đây là khác biệt định tính so với mọi bước
chuyển trước, và là lý do bài viết gọi nó là một đứt gãy chứ không phải một lần tinh chỉnh.

### 6.1 Vì sao bỏ RSSM

Theo lập luận của bài báo, RSSM gọn và hiệu quả nhưng khó mở rộng tới một phân phối dữ liệu đa
dạng. Mặt khác, dòng mô hình sinh video quy mô lớn (các mô hình kiểu Genie, Oasis) mở rộng tốt
theo dữ liệu nhưng chưa dự đoán đủ chính xác tương tác giữa các vật thể để huấn luyện một agent.
V4 nhắm vào khoảng trống giữa hai dòng: lấy kiến trúc khả mở rộng của dòng sinh video nhưng ép nó
chính xác đủ để huấn luyện hành vi, và đủ nhanh để suy luận thời gian thực trên một GPU.

Bối cảnh tác vụ cũng khắc nghiệt hơn hẳn. V4 nhận ảnh thô độ phân giải cao (cỡ 360×640) thay vì
ảnh 64×64 đã tiền xử lý, dùng hành động chuột và bàn phím cấp thấp thay vì hành động ghép sẵn, và
học **hoàn toàn từ một tập dữ liệu ngoại tuyến cố định** thay vì tương tác trực tuyến.

### 6.2 Bộ tokenizer nhân quả và mô hình động lực

V4 gồm hai phần, đều dựa trên transformer hai chiều (thời gian × không gian) với attention nhân
quả theo thời gian.

- **Bộ tokenizer nhân quả** nén video thô thành một chuỗi token liên tục, huấn luyện bằng tự mã
  hóa có che (masked autoencoding). Tính nhân quả theo thời gian cho phép giải mã từng khung hình
  một, điều kiện cần cho suy luận tương tác.
- **Mô hình động lực** dự đoán token tương lai từ một chuỗi xen kẽ gồm hành động, mức nhiễu, cỡ
  bước và token. Đây là trái tim của V4.

### 6.3 Shortcut forcing

Mục tiêu huấn luyện của mô hình động lực, gọi là **shortcut forcing**, gộp ba ý tưởng:

1. **Flow matching / khuếch tán.** Mô hình học khử nhiễu: từ nhiễu thuần dần dựng lại dữ liệu sạch.
2. **Shortcut models.** Mạng được điều kiện theo cỡ bước, nhờ đó sinh một khung hình chỉ cần một
   số ít lần forward thay vì hàng chục bước khử nhiễu như khuếch tán thông thường. Đây là điều
   kiện cho suy luận thời gian thực.
3. **Diffusion forcing.** Mỗi bước thời gian mang một mức nhiễu khác nhau, nên mỗi bước vừa là một
   tác vụ khử nhiễu vừa là ngữ cảnh cho bước sau.

### 6.4 x-prediction và sai số tích lũy

Một chi tiết tham số hóa đáng chú ý vì nó nối thẳng vào một vấn đề trung tâm của mọi world model:
sai số tích lũy (compounding error) khi tưởng tượng dài. Thay vì dự đoán *vận tốc* của quá trình
khử nhiễu (v-prediction), V4 dự đoán *trạng thái sạch* (x-prediction). Theo bài báo, dự đoán vận
tốc tạo ra đầu ra tần số cao và tích lũy lỗi khi triển khai dài; dự đoán trạng thái sạch cho phép
triển khai chất lượng cao ở độ dài tùy ý. Nói cách khác, đây là một câu trả lời ở mức kiến trúc
cho bài toán sai số tích lũy — bài toán mà các phiên bản RSSM giải bằng cách giữ chân trời tưởng
tượng ngắn và dựa vào critic để bootstrap phần đuôi.

### 6.5 Học ngoại tuyến và điều kiện hóa theo hành động

V4 huấn luyện theo ba pha: tiền huấn luyện world model trên video, tinh chỉnh agent bằng sao chép
hành vi cộng một mô hình phần thưởng, và huấn luyện chính sách trong tưởng tượng. Trong pha cuối,
transformer bị đóng băng; chỉ chính sách và critic được cập nhật trên các chuỗi do world model
sinh, hoàn toàn không tương tác môi trường.

Phần lớn kiến thức của world model đến từ video **không nhãn hành động**; chỉ một lượng nhỏ video
có nhãn hành động là đủ để học điều kiện hóa theo hành động. Tách biệt này có ý nghĩa thực tiễn:
nó cho phép tận dụng kho video lớn không nhãn, và phù hợp với các ứng dụng như robot, nơi tương
tác thật để thu nhãn vừa chậm vừa rủi ro. Đặt vấn đề thu thập kim cương Minecraft *chỉ từ dữ liệu
ngoại tuyến* chính là để làm nổi bật năng lực này.

### 6.6 PMPO thay cho chuẩn hóa lợi tức

V3 xử lý vấn đề thang đo của lợi tức bằng chuẩn hóa theo phân vị (Mục 5.4). V4 chọn một câu trả
lời khác: chỉ dùng **dấu của hàm lợi thế (advantage)**, bỏ độ lớn. Vì dấu bất biến với thang đo,
không cần chuẩn hóa lợi tức nữa. Phương pháp này (PMPO) chia các trạng thái thành tập lợi thế
dương và âm rồi cân bằng hai tập, đồng thời cộng một số hạng KL về một prior sao chép hành vi để
giữ chính sách trong vùng hành vi hợp lý. Đây là hai lời giải khác nhau cho cùng một bài toán bất
biến thang đo: V3 chuẩn hóa độ lớn, V4 vứt bỏ độ lớn.

Đáng chú ý là V4 vẫn giữ một số thành phần từ V3: bộ dự đoán phần thưởng và giá trị dạng symexp
two-hot, và λ-return cho critic. Điều này xác nhận luận điểm ở Mục 1: cái bị thay là cỗ máy động
lực, không phải toàn bộ công thức.

### 6.7 Kết quả

V4 là agent đầu tiên thu thập kim cương trong Minecraft hoàn toàn từ dữ liệu ngoại tuyến, không
tương tác môi trường — một tác vụ đòi hỏi chọn chuỗi hơn 20.000 hành động chuột và bàn phím từ
pixel thô. World model của nó dự đoán tương tác vật thể và cơ chế trò chơi chính xác hơn hẳn các
mô hình thế giới trước, và đạt suy luận tương tác thời gian thực trên một GPU đơn nhờ shortcut
forcing. Các con số thành công cụ thể theo từng vật phẩm là số liệu do bài báo báo cáo; điểm chắc
chắn và quan trọng nhất là cột mốc định tính: học ngoại tuyến, từ pixel thô, ở chân trời rất dài.

Cái giá là quy mô tính toán: khoảng hai tỉ tham số, hàng trăm lõi TPU, hàng nghìn giờ video. Đây
là một chế độ vận hành khác hẳn ngân sách một-GPU của V1–V3.

## 7. Hai trục tiến hóa

Tổng hợp toàn bộ, dòng Dreamer tiến hóa theo hai trục độc lập.

**Trục biểu diễn trạng thái** đi từ Gaussian đơn đỉnh, qua categorical rời rạc, tới categorical
được làm bền với thang đo, rồi tới token video do transformer sinh:

| Khía cạnh | V1 | V2 | V3 | V4 |
|---|---|---|---|---|
| World model | RSSM (GRU + latent) | RSSM | RSSM | Transformer + tokenizer |
| Latent ngẫu nhiên | Gaussian | categorical 32×32 | categorical + unimix | token video liên tục |
| Mục tiêu sinh | ELBO (tái tạo) | ELBO | ELBO | shortcut forcing (khuếch tán) |
| KL prior–posterior | đối xứng | KL balancing | KL balancing + free bits | (không áp dụng cùng dạng) |
| Phần thưởng / giá trị | hồi quy MSE | hồi quy MSE | symlog + two-hot | symexp two-hot (giữ) |
| Gradient actor | pathwise | REINFORCE / pathwise trộn | như V2 + chuẩn hóa lợi tức | PMPO (dấu lợi thế) + KL prior |
| Chống thang đo | — | — | symlog, two-hot, chuẩn hóa phân vị | bỏ độ lớn (chỉ giữ dấu) |

**Trục ngân sách tính toán** gần như phẳng qua ba phiên bản đầu rồi nhảy bậc ở phiên bản thứ tư:

| | V1 | V2 | V3 | V4 |
|---|---|---|---|---|
| Tính toán | một GPU | một GPU | một GPU | hàng trăm TPU, ~2 tỉ tham số |
| Nguồn dữ liệu | trực tuyến | trực tuyến | trực tuyến | ngoại tuyến (+ video không nhãn) |
| Quan sát | pixel 64×64 | pixel 64×64 | pixel + vector | pixel thô 360×640 |
| Miền tiêu biểu | DM Control | Atari | hơn 150 tác vụ | Minecraft từ pixel thô |

Đọc hai bảng cùng nhau cho thấy hình dạng thật của dòng này. Ba cột đầu của bảng biểu diễn là
tiến hóa *trong* một kiến trúc: mỗi ô thay đổi là một bộ phận được tháo ra lắp lại trên cùng
khung RSSM. Cột thứ tư, ở cả hai bảng, là nơi khung đổi. Và sợi chỉ xuyên suốt — rõ nhất từ V3 trở
đi — là cuộc truy đuổi tính bất biến với thang đo: symlog và two-hot làm bền bộ dự đoán, chuẩn hóa
phân vị làm bền actor, rồi PMPO của V4 giải cùng bài toán bằng cách loại bỏ độ lớn thay vì chuẩn
hóa nó.

## 8. Hệ quả cho nghiên cứu ít tính toán

Với một người làm nghiên cứu trong điều kiện tính toán hạn chế, V4 gửi một tín hiệu hai mặt, và cả
hai mặt đều đáng ghi nhận thẳng thắn.

Mặt thứ nhất là một bức tường. Tái lập một hệ thống quy mô V4 — hai tỉ tham số, hàng trăm TPU,
hàng nghìn giờ video — nằm ngoài tầm với của cá nhân hay nhóm nhỏ. Tiền tuyến của world model dạng
video giờ là sân chơi của các phòng thí nghiệm lớn. Bài học về bức tường tính toán, vốn đã hiện
ra từ những miền pixel/long-horizon ở V2–V3, được V4 xác nhận dứt khoát.

Mặt thứ hai là một mỏ ý tưởng. Mỗi phiên bản Dreamer, kể cả V4, gài vào những thành phần *tách
rời được*, mỗi thành phần là một câu hỏi có thể kiểm chứng ở quy mô nhỏ trên một miền hẹp:

- **x-prediction so với v-prediction** như một cơ chế chống sai số tích lũy — kiểm được trên một
  RSSM nhỏ, không cần quy mô V4.
- **Huấn luyện trong tưởng tượng từ dữ liệu ngoại tuyến** — một thiết lập hợp với ngân sách hạn
  chế vì không cần một môi trường nhanh.
- **Điều kiện hóa theo hành động từ ít nhãn** — một câu hỏi về hiệu quả mẫu, đo được ở quy mô nhỏ.
- **PMPO so với chuẩn hóa lợi tức** — hai cách xử lý cùng một bài toán bất biến thang đo, so sánh
  được trực tiếp.

Tổng quát hơn, mẫu hình lặp lại qua cả bốn phiên bản gợi ý một chiến lược: các bài báo tiền tuyến
cho thấy *đỉnh* cần quy mô lớn, nhưng câu hỏi đáng giá và khả thi cho người ít tính toán không
phải là tái lập đỉnh, mà là "trên miền hẹp của tôi, thành phần nào thật sự cần thiết, thành phần
nào thừa". Chính vì V3 và V4 *gộp* nhiều thành phần, việc tách chúng ra và đo đóng góp riêng của
từng cái trở thành một loại đóng góp mà một người làm việc một mình có thể thực hiện trọn vẹn.

## 9. Tóm lược

Bốn phiên bản Dreamer không phải bốn mô hình rời rạc mà là một quỹ đạo có cấu trúc rõ ràng. V1
thiết lập paradigm: một world model latent và một actor-critic huấn luyện hoàn toàn trong tưởng
tượng, nối với nhau bằng gradient pathwise. V2 thay biểu diễn từ Gaussian sang categorical và định
tuyến lại gradient để chinh phục các miền rời rạc. V3 thêm một hộp công cụ bất biến thang đo để một
cấu hình duy nhất chạy được mọi miền. Cả ba dùng chung lõi RSSM và ngân sách một GPU. V4 cắt đứt
khỏi lõi đó: thay RSSM bằng một transformer và một mục tiêu khuếch tán, đổi sự gọn nhẹ lấy khả năng
mở rộng theo dữ liệu và tham số, và chuyển sang chế độ học hoàn toàn ngoại tuyến — với cái giá là
quy mô tính toán của một phòng thí nghiệm lớn. Nguyên lý không đổi suốt cả lộ trình là huấn luyện
hành vi bên trong một mô hình học được; cái thay đổi là mô hình đó được dựng nên như thế nào, và
phải lớn tới đâu.

---

### Ghi chú nguồn và độ tin cậy

Các trích dẫn: Dreamer V1 — Hafner và cộng sự, *Dream to Control*, ICLR 2020 (arXiv:1912.01603);
V2 — *Mastering Atari with Discrete World Models*, ICLR 2021 (arXiv:2010.02193); V3 — *Mastering
Diverse Domains through World Models*, 2023 (arXiv:2301.04104); V4 — *Training Agents Inside of
Scalable World Models*, Hafner, Yan, Lillicrap, 2025 (arXiv:2509.24527). Mô tả cơ chế V1–V3 dựa
trên nội dung đã được kiểm chứng rộng rãi của ba bài báo; mô tả V4 dựa trên phần tóm tắt gốc và
phần thân bài báo. Các con số định lượng chi tiết về tỉ lệ thành công của V4 theo từng vật phẩm là
số liệu do bài báo báo cáo và không được nhắc lại ở đây như khẳng định độc lập. Nếu phát hiện sai
lệch giữa mô tả trong bài và bản gốc, ưu tiên bản gốc.
