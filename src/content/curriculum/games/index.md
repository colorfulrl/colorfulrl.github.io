---
domain: "Games & Strategic Play"
description: "Lộ trình từ các thuật toán value/search nền tảng tới các agent chơi game phức tạp: AlphaGo, AlphaStar, OpenAI Five, Cicero."
descriptionEn: "A path from foundational value/search algorithms to agents mastering complex games: AlphaGo, AlphaStar, OpenAI Five, Cicero."
order: 4
draft: false
stages:
  - id: prerequisites
    label: "Nền tảng (Core-RL)"
    labelEn: "Prerequisites (Core-RL)"
    items:
      - ref: dqn
      - ref: muzero
      - ref: ppo
  - id: core
    label: "Cốt lõi"
    labelEn: "Core"
    items:
      - ref: alphago
        after: [dqn]
      - ref: alphastar
        after: [ppo]
  - id: advanced
    label: "Nâng cao"
    labelEn: "Advanced"
    items:
      - ref: openai-five
        after: [ppo]
      - ref: cicero
        after: [alphastar]
      - ref: pluribus
        after: [alphago]
---

Games là chiến trường lịch sử của RL — nơi self-play + search sinh ra siêu nhân
trí tuệ. Lộ trình từ search-based **AlphaGo** (cờ vây) tới điều khiển thời gian
thực đa-đơn-vị **AlphaStar** (StarCraft II) và **OpenAI Five** (Dota 2, PPO quy
mô lớn), rồi tới các game thông tin không hoàn hảo: **Pluribus** (poker), và
**Cicero** (Diplomacy, kết hợp RL + ngôn ngữ + thương lượng).

> **Prerequisite**: DQN, MuZero, PPO từ [Core-RL graph](/research).
