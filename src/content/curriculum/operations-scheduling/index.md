---
domain: "Operations & Scheduling"
description: "Lộ trình RL cho tối ưu tổ hợp: lập lịch job-shop, định tuyến phương tiện, đóng gói — học heuristic thay vì giải solver từ đầu."
descriptionEn: "An RL-for-combinatorial-optimization path: job-shop scheduling, vehicle routing, bin packing — learning heuristics instead of hand-coded solvers."
order: 12
draft: false
stages:
  - id: prerequisites
    label: "Nền tảng (Core-RL)"
    labelEn: "Prerequisites (Core-RL)"
    items:
      - ref: ppo
      - ref: dqn
  - id: core
    label: "Cốt lõi"
    labelEn: "Core"
    items:
      - ref: neural-combinatorial-optimization
        after: [ppo]
      - ref: l2d-job-shop
        after: [dqn]
  - id: advanced
    label: "Nâng cao"
    labelEn: "Advanced"
    items:
      - ref: attention-routing
        after: [neural-combinatorial-optimization]
      - ref: rl-bin-packing
        after: [l2d-job-shop]
---

Tối ưu tổ hợp (combinatorial optimization) là mảng RL học **heuristic** cho các
bài toán NP-khó thay vì viết solver thủ công: **lập lịch job-shop** (gộp
Job-Shop Scheduling trong danh sách gốc), **định tuyến phương tiện** (TSP/VRP),
**đóng gói** (bin packing). Mốc: **Neural Combinatorial Optimization** (Bello
2016, pointer network + REINFORCE), **Learning to Dispatch** (L2D, job-shop),
**Attention, Learn to Solve Routing** (Kool 2019). Phù hợp với production thật
(Google, Amazon dùng RL cho logistics).

> **Prerequisite**: PPO, DQN từ [Core-RL graph](/research).
