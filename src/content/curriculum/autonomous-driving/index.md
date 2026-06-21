---
domain: "Autonomous Driving"
description: "Lộ trình từ học bắt chước hành vi lái (imitation) tới RL trên xe thật và world model lái xe — nơi compounding error và long-tail là cạm bẫy sống còn. Giả định đã biết imitation learning từ Core-RL."
descriptionEn: "A path from imitation of driving behaviour to real-car RL and driving world models — where compounding error and the long tail are existential pitfalls. Assumes imitation learning from Core-RL."
order: 2
draft: false
stages:
  - id: prerequisites
    label: "Nền tảng (Core-RL · Imitation)"
    labelEn: "Prerequisites (Core-RL · Imitation)"
    items:
      - ref: dagger
      - ref: gail
      - ref: sac
  - id: end-to-end
    label: "Học bắt chước End-to-End"
    labelEn: "End-to-End Imitation"
    items:
      - ref: end-to-end-self-driving
        after: [dagger]
      - ref: chauffeurnet
        after: [gail]
  - id: rl-worldmodels
    label: "RL trên xe thật & World Models"
    labelEn: "Real-Car RL & World Models"
    items:
      - ref: learning-to-drive-in-a-day
        after: [sac]
      - ref: mile
        after: [chauffeurnet]
      - ref: gaia-1
        after: [mile]
  - id: sim-longtail
    label: "Mô phỏng & Long-tail"
    labelEn: "Simulation & Long-tail"
    items:
      - ref: carla
        after: [end-to-end-self-driving]
---

Lái xe tự hành là một trong những ứng dụng RL/imitation có RỦI RO CAO nhất, và
bị định hình bởi hai vấn đề cốt lõi:

- **Compounding error (covariate shift)**: expert lái an toàn nên dữ liệu hiếm
  tình huống nguy hiểm; khi policy lệch khỏi quỹ đạo demo, lỗi tích lũy và nó rơi
  vào trạng thái chưa từng thấy. **ChauffeurNet** giải bằng cách *tổng hợp tình
  huống xấu* để dạy xe phục hồi — chính là DAgger-tư-duy cho lái xe.
- **Long tail**: 99% lái xe là nhàm chán, 1% hiếm-gặp mới giết người (trẻ chạy ra
  đường, vật thể lạ). Đây là lý do đánh giá AD cực khó và benchmark mô phỏng
  (**CARLA**) quan trọng.

Lộ trình: học bắt chước end-to-end (**NVIDIA End-to-End**, **ChauffeurNet**) → RL
thật trên xe trong một ngày (**Learning to Drive in a Day**, SAC) → **world model**
lái xe (**MILE** model-based imitation, **GAIA-1** generative world model) học mô
phỏng để lập kế hoạch — nối thẳng `world-models-concept` trong Core-RL.

> **Prerequisite**: DAgger, GAIL, SAC từ [Core-RL graph](/research). Đây là
> domain anh em với [Robotics](/research/embodied-ai) (cùng gốc imitation + control).
