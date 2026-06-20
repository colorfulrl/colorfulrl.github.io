---
domain: "Science & Discovery"
description: "Lộ trình RL cho khám phá khoa học: điều khiển plasma lò fusion, khám phá thuật toán, thiết kế chip và phân tử — nơi RL giải bài toán con người chưa giải được."
descriptionEn: "An RL-for-science path: fusion plasma control, algorithm discovery, chip and molecule design — RL solving problems humans hadn't."
order: 7
draft: false
stages:
  - id: prerequisites
    label: "Nền tảng (Core-RL)"
    labelEn: "Prerequisites (Core-RL)"
    items:
      - ref: ppo
      - ref: muzero
  - id: core
    label: "Cốt lõi"
    labelEn: "Core"
    items:
      - ref: tokamak-plasma-control
        after: [ppo]
      - ref: alphatensor
        after: [muzero]
  - id: advanced
    label: "Nâng cao"
    labelEn: "Advanced"
    items:
      - ref: alphachip
        after: [alphatensor]
      - ref: moldqn
        after: [tokamak-plasma-control]
---

Đây là mảng "wow" nhất của RL ứng dụng — nơi agent giải bài toán khoa học thật:
**điều khiển plasma** trong lò phản ứng nhiệt hạch (Degrave 2022, Nature — RL giữ
hình dạng plasma trong tokamak), **AlphaTensor** (khám phá thuật toán nhân ma
trận nhanh hơn), **AlphaChip** (thiết kế bố cục chip), và **MolDQN** / thiết kế
phân tử-thuốc. Điểm chung: không gian hành động khổng lồ + reward từ mô phỏng/quy
luật vật lý, nối thẳng `model-based-rl`, `mcts` và `trajectory-optimization`.

> **Prerequisite**: PPO, MuZero từ [Core-RL graph](/research).
