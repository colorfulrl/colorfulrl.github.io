---
domain: "Cyber Security"
description: "Lộ trình RL cho an ninh mạng: tự động kiểm thử xâm nhập, phát hiện xâm nhập, và phòng thủ động — gồm cả bảo mật IoT."
descriptionEn: "An RL-for-cybersecurity path: autonomous penetration testing, intrusion detection, and adaptive defense — including IoT security."
order: 11
draft: false
stages:
  - id: prerequisites
    label: "Nền tảng (Core-RL)"
    labelEn: "Prerequisites (Core-RL)"
    items:
      - ref: dqn
      - ref: ppo
  - id: core
    label: "Cốt lõi"
    labelEn: "Core"
    items:
      - ref: rl-penetration-testing
        after: [ppo]
      - ref: rl-intrusion-detection
        after: [dqn]
  - id: advanced
    label: "Nâng cao"
    labelEn: "Advanced"
    items:
      - ref: cyberbattlesim
        after: [rl-penetration-testing]
      - ref: rl-iot-security
        after: [rl-intrusion-detection]
---

An ninh mạng là trò chơi tấn công-phòng thủ — bản chất tuần tự và đối kháng, hợp
với RL (và multi-agent). Mốc: **tự động kiểm thử xâm nhập** (agent học khai thác
lỗ hổng), **phát hiện xâm nhập** thích nghi, môi trường mô phỏng **CyberBattleSim**
(Microsoft), và **bảo mật IoT** (gộp từ "An ninh mạng IoT" trong danh sách gốc).
Lưu ý đạo đức: đây là dual-use — chỉ dùng cho phòng thủ/kiểm thử có ủy quyền.

> **Prerequisite**: DQN, PPO từ [Core-RL graph](/research).
