---
domain: "Energy & Smart Grid"
description: "Lộ trình RL cho năng lượng: điều khiển HVAC tòa nhà, đáp ứng nhu cầu (demand response), tối ưu vận hành lưới điện."
descriptionEn: "An RL-for-energy path: building HVAC control, demand response, and grid operation optimization."
order: 9
draft: false
stages:
  - id: prerequisites
    label: "Nền tảng (Core-RL)"
    labelEn: "Prerequisites (Core-RL)"
    items:
      - ref: ddpg
      - ref: sac
  - id: core
    label: "Cốt lõi"
    labelEn: "Core"
    items:
      - ref: rl-hvac-control
        after: [ddpg]
      - ref: rl-demand-response
        after: [sac]
  - id: advanced
    label: "Nâng cao"
    labelEn: "Advanced"
    items:
      - ref: rl-grid-optimization
        after: [rl-demand-response]
---

Năng lượng là sân chơi của điều khiển liên tục: **HVAC** (sưởi/làm mát tòa nhà,
chiếm phần lớn điện năng — RL tiết kiệm 10-40% so với rule-based), **demand
response** (dịch tải theo giá/đỉnh), và **tối ưu lưới điện** (tích hợp năng lượng
tái tạo biến động). Điểm chung: mô hình vật lý sẵn để mô phỏng (an toàn để
train) + reward đa mục tiêu (chi phí ↔ tiện nghi ↔ ổn định). Nối `model-based-rl`
và điều khiển liên tục (DDPG/SAC).

> **Prerequisite**: DDPG, SAC từ [Core-RL graph](/research).
