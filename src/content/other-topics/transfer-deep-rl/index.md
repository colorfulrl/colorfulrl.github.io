---
domain: "Transfer Learning in Deep RL"
description: "Ba nhánh chính để chuyển giao tri thức trong Deep RL: (1) Sim-to-Real — train trong mô phỏng với domain randomization, deploy trên robot thật; (2) Meta-RL — học cách học nhanh qua nhiều task (RL², MAML, PEARL); (3) Multi-Task & Distillation — chia sẻ representation và nén policy qua nhiều task (Policy Distillation, Progressive Nets, PCGrad)."
descriptionEn: "Three main branches of knowledge transfer in Deep RL: (1) Sim-to-Real — train in simulation with domain randomization, deploy on real hardware; (2) Meta-RL — learning to learn fast across tasks (RL², MAML, PEARL); (3) Multi-Task & Distillation — sharing representations and compressing policies (Policy Distillation, Progressive Nets, PCGrad)."
order: 2
draft: false
stages:
  - id: s0-foundations
    label: "Nền tảng & Bản đồ"
    labelEn: "Foundations & Map"
    items:
      - ref: dqn
      - ref: ppo
        after: [dqn]
      - ref: tl-drl-survey
        after: [dqn]

  - id: s1-sim-to-real
    label: "Sim-to-Real: Domain Randomization"
    labelEn: "Sim-to-Real: Domain Randomization"
    items:
      - ref: domain-randomization
        after: [dqn, tl-drl-survey]
      - ref: adr-rubiks
        after: [domain-randomization]

  - id: s2-meta-rl
    label: "Meta-RL: Học Cách Học"
    labelEn: "Meta-RL: Learning to Learn"
    items:
      - ref: rl2
        after: [tl-drl-survey]
      - ref: maml
        after: [rl2, ppo]
      - ref: pearl
        after: [maml]

  - id: s3-multitask-distill
    label: "Multi-Task & Policy Distillation"
    labelEn: "Multi-Task & Policy Distillation"
    items:
      - ref: policy-distillation
        after: [dqn]
      - ref: progressive-neural-nets
        after: [policy-distillation]
      - ref: pcgrad
        after: [ppo, progressive-neural-nets]

  - id: s4-repr-transfer
    label: "Representational Transfer: Pre-train từ Video & Images"
    labelEn: "Representational Transfer: Pre-training from Video & Images"
    items:
      - ref: mvp
        after: [tl-drl-survey]
      - ref: r3m
        after: [mvp]
      - ref: vip
        after: [r3m]
---
