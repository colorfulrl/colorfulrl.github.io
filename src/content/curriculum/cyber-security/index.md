---
domain: "Cyber Security"
description: "Lộ trình RL cho an ninh mạng (PHÒNG THỦ & kiểm thử có ủy quyền): từ môi trường mô phỏng chuẩn, tới red-team tự động, blue-team phòng thủ, và phát hiện xâm nhập. Khác các domain khác: xoay quanh MÔI TRƯỜNG/benchmark."
descriptionEn: "An RL-for-cybersecurity path (DEFENSIVE & authorized testing): from standard simulation environments to autonomous red-teaming, blue-team defence, and intrusion detection. Unlike other domains, it centers on ENVIRONMENTS/benchmarks."
order: 11
draft: false
stages:
  - id: prerequisites
    label: "Nền tảng & Tổng quan"
    labelEn: "Foundations & Survey"
    items:
      - ref: dqn
      - ref: ppo
      - ref: nguyen-reddi-survey
        after: [dqn]
  - id: environments
    label: "Môi trường & Benchmark"
    labelEn: "Environments & Benchmarks"
    items:
      - ref: cyberbattlesim
        after: [ppo]
      - ref: cyborg
        after: [cyberbattlesim]
      - ref: nasim
        after: [cyberbattlesim]
  - id: red-team
    label: "Red-Team tự động (có ủy quyền)"
    labelEn: "Autonomous Red-Team (authorized)"
    items:
      - ref: schwartz-pentest
        after: [nasim]
      - ref: pentest-eval
        after: [schwartz-pentest]
      - ref: pentest-r1
        after: [pentest-eval]
  - id: blue-team
    label: "Blue-Team Phòng thủ"
    labelEn: "Blue-Team Defence"
    items:
      - ref: entity-based-acd
        after: [cyborg]
      - ref: graph-agent-defence
        after: [entity-based-acd]
  - id: intrusion-detection
    label: "Phát hiện Xâm nhập"
    labelEn: "Intrusion Detection"
    items:
      - ref: ids-dqn
        after: [dqn]
      - ref: ids-survey
        after: [ids-dqn]
---

> **Phạm vi & đạo đức**: bản đồ này dành cho **an ninh phòng thủ, kiểm thử xâm
> nhập CÓ ỦY QUYỀN, và mục đích giáo dục/nghiên cứu**. "Red-team tự động" ở đây là
> thực hành an ninh chuẩn mực (kiểm thử hệ thống của chính mình/được phép), không
> phải hướng dẫn tấn công thực tế.

An ninh mạng là trò chơi tấn công–phòng thủ tuần tự, đối kháng — hợp với RL (và
multi-agent). Điểm KHÁC biệt lớn so với các domain trước: lĩnh vực này **xoay
quanh môi trường/benchmark**, không phải một chuỗi paper-thuật-toán. Nên tầng
"Môi trường" đặt sớm.

- **Nền tảng & Tổng quan**: value/policy (**DQN, PPO** — PPO là thuật toán thành
  công nhất trong các môi trường phòng thủ tự động) + **survey** Nguyen & Reddi
  (2019) bao quát toàn cảnh.
- **Môi trường & Benchmark**: **CyberBattleSim** (Microsoft — kẻ tấn công di chuyển
  ngang trong mạng), **CybORG** (gym MARL blue/red, nền của CAGE Challenge),
  **NASim** (network attack simulator cho pentest). Không có env thì không train được.
- **Red-Team tự động**: pentest tự động bằng RL (**Schwartz 2019** — mô hình hóa
  pentest thành MDP) và đánh giá thuật toán (**A3C/DQN**, Becker 2024).
- **Blue-Team Phòng thủ**: tác tử phòng thủ tổng quát hóa qua nhiều topology mạng
  (**Entity-based RL**, **Graph Agent**) — thách thức cốt lõi là generalize.
- **Phát hiện Xâm nhập**: RL cho IDS (phát hiện bất thường, chọn đặc trưng) trên
  các dataset chuẩn (NSL-KDD).

> **Prerequisite**: DQN, PPO từ [Core-RL graph](/research). *Một số paper recent
> (2025) metadata chờ Khoa bổ sung.*
