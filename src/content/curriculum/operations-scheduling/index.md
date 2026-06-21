---
domain: "Operations & Scheduling"
description: "Lộ trình RL cho tối ưu tổ hợp NP-khó: HỌC heuristic thay vì viết solver thủ công. Từ survey ML-cho-CO, qua neural combinatorial optimization (TSP/graphs), định tuyến phương tiện, lập lịch job-shop, tới chuỗi cung ứng."
descriptionEn: "An RL-for-combinatorial-optimization path: LEARNING heuristics for NP-hard problems instead of hand-coding solvers. From an ML-for-CO survey, through neural combinatorial optimization (TSP/graphs), vehicle routing, job-shop scheduling, to supply chain."
order: 12
draft: false
stages:
  - id: survey
    label: "Survey & Nền tảng"
    labelEn: "Survey & Foundations"
    items:
      - ref: dqn
      - ref: ppo
      - ref: reinforce
      - ref: bengio-survey
        after: [dqn]
  - id: neural-co
    label: "Neural Combinatorial Optimization"
    labelEn: "Neural Combinatorial Optimization"
    items:
      - ref: bello-nco
        after: [reinforce]
      - ref: dai-s2v
        after: [dqn]
      - ref: kool-attention
        after: [bello-nco]
  - id: routing
    label: "Định tuyến Phương tiện (VRP)"
    labelEn: "Vehicle Routing (VRP)"
    items:
      - ref: nazari-vrp
        after: [kool-attention]
  - id: job-shop
    label: "Lập lịch Job-Shop"
    labelEn: "Job-Shop Scheduling"
    items:
      - ref: zhang-l2d
        after: [dai-s2v]
  - id: supply-chain
    label: "Chuỗi Cung ứng & Tồn kho"
    labelEn: "Supply Chain & Inventory"
    items:
      - ref: supply-chain-rl
        after: [ppo]
---

Tối ưu tổ hợp (combinatorial optimization, CO) là mảng RL **học heuristic** cho các
bài toán NP-khó (TSP, VRP, job-shop, bin packing) thay vì viết solver thủ công.
Ý tưởng cốt lõi: coi mỗi instance bài toán như một *data point*, học policy xây lời
giải tuần tự (từng bước chọn thành phần tiếp theo), reward = chất lượng lời giải.

Lineage rõ ràng:

- **Neural CO** (Bello 2016): pointer network + REINFORCE giải TSP, reward = -độ dài
  tour. Paper khai mở "học để giải CO".
- **Graphs** (Dai/Khalil 2017, S2V-DQN): graph embedding + DQN xây greedy policy cho
  bài toán trên đồ thị (Min Vertex Cover, Max Cut, TSP).
- **Attention** (Kool 2019): thay pointer network bằng attention model + REINFORCE với
  greedy-rollout baseline — SOTA cho TSP/VRP/OP.
- **VRP** (Nazari 2018): vượt heuristic cổ điển và Google OR-Tools trên capacitated VRP.
- **Job-shop** (Zhang 2020, L2D): disjunctive graph + GNN học priority dispatching rule,
  tổng quát hóa lên instance lớn hơn lúc train.

Production thật dùng dòng này cho logistics (Amazon, Google). Nối thẳng
`alphachip` trong [Science & Discovery](/research/science-discovery) (cũng là CO bằng RL).

> **Prerequisite**: DQN, PPO, REINFORCE từ [Core-RL graph](/research). *Bốn paper
> lõi đã verified; tầng chuỗi cung ứng đang stub — metadata chờ Khoa cung cấp.*
