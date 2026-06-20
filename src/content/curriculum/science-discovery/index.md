---
domain: "Science & Discovery"
description: "RL cho khám phá khoa học — KHÔNG phải một lộ trình tuyến tính mà ba nhánh song song: điều khiển hệ vật lý (plasma, khí cầu), khám phá thuật toán/toán (nhân ma trận, sắp xếp), và thiết kế (chip, phân tử)."
descriptionEn: "RL for scientific discovery — NOT a linear path but three parallel branches: controlling physical systems (plasma, balloons), discovering algorithms/math (matrix multiply, sorting), and design (chips, molecules)."
order: 7
draft: false
stages:
  - id: prerequisites
    label: "Nền tảng (Core-RL)"
    labelEn: "Prerequisites (Core-RL)"
    items:
      - ref: ppo
      - ref: dqn
      - ref: muzero
  - id: physical-control
    label: "Điều khiển hệ vật lý"
    labelEn: "Physical-System Control"
    items:
      - ref: tokamak-plasma
        after: [ppo]
      - ref: stratospheric-balloon
        after: [ppo]
  - id: algorithm-discovery
    label: "Khám phá Thuật toán & Toán"
    labelEn: "Algorithm & Math Discovery"
    items:
      - ref: alphatensor
        after: [muzero]
      - ref: alphadev
        after: [alphatensor]
      - ref: funsearch
        after: [alphatensor]
  - id: design
    label: "Thiết kế (Chip & Phân tử)"
    labelEn: "Design (Chips & Molecules)"
    items:
      - ref: alphachip
        after: [ppo]
      - ref: moldqn
        after: [dqn]
---

Đây là mảng "wow" nhất của RL ứng dụng — agent giải bài toán khoa học thật, đôi
khi *vượt* lời giải tốt nhất con người từng biết. Khác các domain trước, đây
**không phải một lộ trình tuyến tính** mà ba nhánh độc lập, mỗi nhánh là một
*cách RL chạm khoa học*:

- **Điều khiển hệ vật lý**: giữ hình dạng plasma trong lò phản ứng nhiệt hạch
  (**Tokamak**, Degrave 2022 — RL điều khiển 19 cuộn từ ở 10kHz), và lái khí cầu
  tầng bình lưu bằng dòng gió (**Stratospheric Balloon**, Bellemare 2020). Reward
  từ mô phỏng vật lý + an toàn phần cứng thật.
- **Khám phá Thuật toán & Toán**: tìm thuật toán nhân ma trận nhanh hơn
  (**AlphaTensor**), thuật toán sắp xếp ngắn hơn (**AlphaDev**), và lời giải toán
  mới (**FunSearch** — LLM + tìm kiếm tiến hóa, không RL thuần). Không gian hành
  động khổng lồ, reward = đúng + nhanh hơn.
- **Thiết kế**: bố cục chip (**AlphaChip**, dùng trong TPU thật) và thiết kế phân
  tử-thuốc (**MolDQN**). Hành động = chọn linh kiện/nguyên tử, reward = chất lượng
  thiết kế.

Điểm chung cả ba: **không gian hành động khổng lồ + reward từ mô phỏng/quy luật**,
nối thẳng `model-based-rl`, `mcts` (AlphaTensor/AlphaDev là MuZero-style) và
`trajectory-optimization`.

> **Prerequisite**: PPO, DQN, MuZero từ [Core-RL graph](/research).
