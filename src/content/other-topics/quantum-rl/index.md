---
domain: "Quantum Reinforcement Learning"
description: "Áp dụng mạch lượng tử biến phân (VQC) vào RL: thay thế mạng nơ-ron bằng mạch lượng tử hybrid, từ Q-learning và policy gradient đến triển khai thực tế trên phần cứng NISQ nhiễu. Ba nhánh chính: Hybrid QRL (phổ biến nhất), Quantum-Inspired RL (thuần cổ điển, mượn ý tưởng lượng tử), và Fully Quantum RL (lý thuyết, cần fault-tolerant)."
descriptionEn: "Applying variational quantum circuits (VQC) to RL: replacing neural networks with hybrid quantum circuits, from Q-learning and policy gradient to deployment on noisy NISQ hardware. Three branches: Hybrid QRL (most practical), Quantum-Inspired RL (classical algorithms borrowing quantum ideas), and Fully Quantum RL (theoretical, requires fault-tolerant hardware)."
order: 1
draft: false
stages:
  - id: s0-prereqs
    label: "Nền tảng & Bản đồ"
    labelEn: "Foundations & Map"
    items:
      - ref: dqn
      - ref: ppo
        after: [dqn]
      - ref: qrl-survey
        after: [dqn]

  - id: s1-vqc
    label: "Hybrid QRL: VQC Thay Mạng Nơ-ron"
    labelEn: "Hybrid QRL: VQC Replaces Neural Nets"
    items:
      - ref: vqc-deep-rl
        after: [dqn, qrl-survey]
      - ref: qrl-lockwood
        after: [dqn]

  - id: s2-algorithms
    label: "Q-Learning & Policy Gradient Lượng Tử"
    labelEn: "Quantum Q-Learning & Policy Gradient"
    items:
      - ref: quantum-gym
        after: [vqc-deep-rl]
      - ref: quantum-policy-gradient
        after: [vqc-deep-rl, ppo]

  - id: s3-practical
    label: "Framework & Triển Khai NISQ"
    labelEn: "Frameworks & NISQ Deployment"
    items:
      - ref: tfq
        after: [vqc-deep-rl]
      - ref: qrl-hardware-errors
        after: [quantum-gym, tfq]

  - id: s4-advanced
    label: "Kiến Trúc Nâng Cao: Lý Thuyết & Đa Tác Tử"
    labelEn: "Advanced: Fully Quantum Theory & Multi-Agent"
    items:
      - ref: dunjko-2016-qml
        after: [qrl-survey]
      - ref: qmarl-vqc
        after: [quantum-gym]
      - ref: eqmarl
        after: [qmarl-vqc]
---
