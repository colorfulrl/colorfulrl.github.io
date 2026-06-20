---
domain: "Robotics & Embodied AI"
description: "Lộ trình điều khiển robot: từ control liên tục nền tảng → học từ demo → world models cho robot → generative policy → sim-to-real → các mô hình vision-language-action. Đối xứng với Games (điều khiển ảo) — đây là điều khiển thế giới vật lý."
descriptionEn: "A robot-control path: from continuous-control foundations to learning from demos, robot world models, generative policies, sim-to-real, and vision-language-action models. The physical-world counterpart to Games (virtual control)."
order: 1
draft: false
stages:
  - id: prerequisites
    label: "Nền tảng (Core-RL)"
    labelEn: "Prerequisites (Core-RL)"
    items:
      - ref: ppo
      - ref: sac
      - ref: td3
  - id: imitation
    label: "Học từ demo"
    labelEn: "Learning from Demos"
    items:
      - ref: dagger
        after: [ppo]
      - ref: gail
        after: [dagger]
      - ref: her
        after: [sac]
      - ref: qt-opt
        after: [sac]
  - id: world-models
    label: "World Models & Model-based"
    labelEn: "World Models & Model-based"
    items:
      - ref: planet
        after: [sac]
      - ref: dreamerv1
        after: [planet]
      - ref: tdmpc
        after: [planet]
  - id: generative-policy
    label: "Generative Policies"
    labelEn: "Generative Policies"
    items:
      - ref: diffusion-policy
        after: [her]
      - ref: implicit-bc
        after: [diffusion-policy]
      - ref: behavior-transformers
        after: [diffusion-policy]
  - id: sim-to-real
    label: "Sim-to-Real & Scaling"
    labelEn: "Sim-to-Real & Scaling"
    items:
      - ref: domain-randomization
        after: [ppo]
      - ref: mimicgen
        after: [her]
      - ref: dreureka
        after: [domain-randomization]
  - id: vla-frontier
    label: "Vision-Language-Action (frontier)"
    labelEn: "Vision-Language-Action (frontier)"
    items:
      - ref: saycan
        after: [qt-opt]
      - ref: rt-1
        after: [qt-opt]
      - ref: rt-2
        after: [rt-1]
      - ref: openvla
        after: [rt-2]
      - ref: pi0
        after: [diffusion-policy]
---

Robotics là nơi RL chạm thế giới vật lý — nhiễu, an toàn, dữ liệu đắt, sim-to-real.
Đối xứng với [Games](/research/games): ở đó điều khiển môi trường ảo sạch, ở đây
điều khiển robot thật.

- **Nền tảng**: điều khiển liên tục (**PPO, SAC, TD3**) — xương sống mọi policy robot.
- **Học từ demo**: dữ liệu thật đắt → học từ người (**DAgger, GAIL**), reward thưa
  (**HER**), và Q-learning quy mô lớn trên robot thật (**QT-Opt**).
- **World Models**: học model của thế giới rồi điều khiển trong tưởng tượng
  (**PlaNet, Dreamer, TD-MPC**) — điểm RL-control gặp world models, lõi của workspace này.
- **Generative Policies**: policy biểu cảm cho manipulation đa-mode
  (**Diffusion Policy, Implicit BC, Behavior Transformer**).
- **Sim-to-Real & Scaling**: vượt khoảng cách mô phỏng↔thực (**Domain Randomization**),
  nhân dữ liệu demo (**MimicGen**), LLM tự thiết kế reward/randomization (**DrEureka**).
- **Vision-Language-Action (frontier)**: foundation model cho robot — đưa tri thức
  web vào hành động (**SayCan, RT-1, RT-2, OpenVLA, π0**). Bắc cầu sang
  [LLM/Alignment](/research/llm-alignment). *Tầng này đang mở rộng nhanh — metadata
  một số paper chờ bổ sung.*

> **Prerequisite**: PPO, SAC, TD3 từ [Core-RL graph](/research). Nhiều node khác
> (PlaNet, Dreamer, Diffusion Policy...) cũng nằm trong graph chính.
