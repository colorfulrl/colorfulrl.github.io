---
domain: "Continual / Lifelong RL"
description: "Học tuần tự qua nhiều task mà không quên — bài toán cốt lõi của AI dài hạn. Ba nhánh giải pháp: (1) Regularization — bảo vệ trọng số quan trọng (EWC, P&C); (2) Replay — lưu và tái phát kinh nghiệm cũ; (3) Modular — mở rộng kiến trúc theo task. RL là bối cảnh tự nhiên nhất: agent sống trong môi trường non-stationary theo thời gian."
descriptionEn: "Learning sequentially across tasks without forgetting — the core challenge for long-horizon AI. Three solution branches: (1) Regularization — protect important weights (EWC, P&C); (2) Replay — store and replay past experiences; (3) Modular — expand architecture per task. RL is the most natural setting: agents live in non-stationary environments."
order: 3
draft: false
stages:
  - id: s0-foundations
    label: "Nền tảng & Bản đồ"
    labelEn: "Foundations & Map"
    items:
      - ref: dqn
      - ref: ppo
        after: [dqn]
      - ref: continual-rl-review
        after: [dqn]

  - id: s1-regularization
    label: "Regularization: Bảo Vệ Trọng Số Quan Trọng"
    labelEn: "Regularization: Protecting Important Weights"
    items:
      - ref: ewc
        after: [dqn, continual-rl-review]
      - ref: progress-compress
        after: [ewc]

  - id: s2-replay
    label: "Replay: Tái Phát Kinh Nghiệm Cũ"
    labelEn: "Replay: Replaying Past Experience"
    items:
      - ref: experience-replay-cl
        after: [ewc, ppo]
---
