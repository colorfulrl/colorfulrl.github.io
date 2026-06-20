---
domain: "Embodied AI"
description: "Lộ trình đọc từ grounding ngôn ngữ-hành động cho robot tới các mô hình vision-language-action quy mô lớn và sim-to-real tự động. Giả định đã biết PPO/SAC từ Core-RL."
descriptionEn: "A reading path from language-action grounding for robots to large-scale vision-language-action models and automated sim-to-real. Assumes PPO/SAC knowledge from Core-RL."
order: 1
draft: false
stages:
  - id: core
    label: "Cốt lõi"
    labelEn: "Core"
    items:
      - ref: saycan
      - ref: mimicgen
  - id: advanced
    label: "Nâng cao"
    labelEn: "Advanced"
    items:
      - ref: rt-2
        after: [saycan]
      - ref: dreureka
---

Embodied AI ghép RL điều khiển với nhận thức thị giác-ngôn ngữ để robot hành
động trong thế giới thực. Lộ trình này bắt đầu từ hai hướng cốt lõi: đưa tri
thức ngôn ngữ vào hành động robot (**SayCan**) và nhân rộng dữ liệu demo
(**MimicGen**) — trước khi tới các mô hình vision-language-action quy mô lớn
(**RT-2**) và sim-to-real có LLM dẫn dắt (**DrEureka**).

> **Prerequisite**: PPO và SAC từ [Core-RL graph](/research).
