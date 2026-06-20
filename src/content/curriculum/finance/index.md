---
domain: "Finance / Trading"
description: "Lộ trình RL cho tài chính: trading, quản lý danh mục, market making — nơi rủi ro (phân phối return) quan trọng ngang lợi nhuận kỳ vọng."
descriptionEn: "An RL-for-finance path: trading, portfolio management, market making — where risk (return distribution) matters as much as expected profit."
order: 6
draft: false
stages:
  - id: prerequisites
    label: "Nền tảng (Core-RL)"
    labelEn: "Prerequisites (Core-RL)"
    items:
      - ref: dqn
      - ref: ppo
      - ref: c51
  - id: core
    label: "Cốt lõi"
    labelEn: "Core"
    items:
      - ref: deep-rl-trading
        after: [dqn]
      - ref: rl-portfolio-management
        after: [ppo]
  - id: advanced
    label: "Nâng cao"
    labelEn: "Advanced"
    items:
      - ref: finrl
        after: [deep-rl-trading]
      - ref: rl-market-making
        after: [c51]
---

Tài chính hấp dẫn RL vì là bài toán ra quyết định tuần tự dưới bất định, nhưng
khác biệt cốt lõi: **rủi ro** (đuôi phân phối return) quan trọng ngang kỳ vọng —
nên `distributional-rl` (mô hình hóa cả phân phối) đặc biệt phù hợp. Lộ trình từ
**Deep RL for trading** (Zhang 2020), **quản lý danh mục** (Jiang 2017), thư
viện chuẩn **FinRL**, tới **market making**. Cảnh báo xuyên suốt: backtest dễ
overfit, non-stationarity của thị trường giết nhiều chiến lược đẹp trên giấy.

> **Prerequisite**: DQN, PPO, C51 (distributional) từ [Core-RL graph](/research).
