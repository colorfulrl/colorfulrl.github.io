---
domain: "Curriculum Learning for RL"
description: "Tự động thiết kế lộ trình học — từ dễ đến khó — để agent học nhanh hơn và khái quát tốt hơn. Ba cơ chế: (1) Self-play — Alice đặt ra task, Bob giải (Asymmetric Self-Play); (2) Replay ưu tiên — chọn level theo potential (PLR); (3) Thiết kế môi trường đối nghịch — teacher tạo task khó nhất vừa tầm agent (PAIRED). Giao thoa với Transfer Learning và Exploration."
descriptionEn: "Automatically designing a training progression — easy to hard — so agents learn faster and generalize better. Three mechanisms: (1) Self-play — Alice sets tasks, Bob solves; (2) Prioritized replay — select levels by learning potential (PLR); (3) Adversarial environment design — teacher generates hardest feasible tasks (PAIRED). Intersects Transfer Learning and Exploration."
order: 4
draft: false
stages:
  - id: s0-foundations
    label: "Nền tảng & Bản đồ"
    labelEn: "Foundations & Map"
    items:
      - ref: dqn
      - ref: autocl-survey
        after: [dqn]

  - id: s1-self-play
    label: "Self-Play: Tự Đặt Ra Thử Thách"
    labelEn: "Self-Play: Setting Your Own Challenges"
    items:
      - ref: asymmetric-self-play
        after: [dqn, autocl-survey]

  - id: s2-env-design
    label: "Thiết Kế Môi Trường Tự Động"
    labelEn: "Automatic Environment Design"
    items:
      - ref: plr
        after: [asymmetric-self-play]
      - ref: paired
        after: [asymmetric-self-play]
---
