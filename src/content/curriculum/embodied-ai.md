---
domain: "Embodied AI"
description: "Lộ trình đọc từ nền tảng RL điều khiển liên tục tới các mô hình ngôn ngữ-hành động cho robot. Đọc theo thứ tự: prerequisites trước, rồi core, rồi advanced."
descriptionEn: "A reading path from continuous-control RL foundations to language-action models for robots. Read in order: prerequisites first, then core, then advanced."
order: 1
draft: false
stages:
  - id: prerequisites
    label: "Nền tảng"
    labelEn: "Prerequisites"
    items:
      - ref: ppo
      - ref: sac
  - id: core
    label: "Cốt lõi"
    labelEn: "Core"
    items:
      - ref: saycan
        after: [ppo, sac]
      - ref: mimicgen
        after: [ppo]
  - id: advanced
    label: "Nâng cao"
    labelEn: "Advanced"
    items:
      - ref: rt-2
        after: [saycan]
      - ref: dreureka
        after: [sac]
---

Embodied AI ghép RL điều khiển với nhận thức thị giác-ngôn ngữ để robot hành
động trong thế giới thực. Bắt đầu từ hai trụ điều khiển liên tục (**PPO**, **SAC**)
— nền cho mọi policy robot — rồi tới cách đưa tri thức ngôn ngữ vào hành động
(**SayCan**) và mở rộng dữ liệu demo (**MimicGen**), trước khi tới các mô hình
vision-language-action quy mô lớn (**RT-2**) và sim-to-real có LLM dẫn dắt
(**DrEureka**).
