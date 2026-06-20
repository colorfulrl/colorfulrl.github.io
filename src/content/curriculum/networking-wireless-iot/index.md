---
domain: "Networking, Wireless & IoT"
description: "Lộ trình RL cho mạng: cấp phát tài nguyên không dây, định tuyến, điều khiển nghẽn, và biên IoT/UAV."
descriptionEn: "An RL-for-networking path: wireless resource allocation, routing, congestion control, and IoT/UAV edge."
order: 10
draft: false
stages:
  - id: prerequisites
    label: "Nền tảng (Core-RL)"
    labelEn: "Prerequisites (Core-RL)"
    items:
      - ref: dqn
      - ref: ddpg
  - id: core
    label: "Cốt lõi"
    labelEn: "Core"
    items:
      - ref: drl-resource-allocation
        after: [dqn]
      - ref: drl-experience-driven-networking
        after: [ddpg]
  - id: advanced
    label: "Nâng cao"
    labelEn: "Advanced"
    items:
      - ref: drl-uav-iot
        after: [drl-resource-allocation]
---

Mạng và viễn thông là bài toán điều khiển trực tuyến dưới bất định: **cấp phát
tài nguyên** (phổ, công suất, băng thông), **định tuyến** thích nghi, **điều
khiển nghẽn**, và điều phối **biên IoT/UAV**. RL hấp dẫn vì môi trường thay đổi
liên tục và mô hình giải tích khó. Mốc: **DRL cho cấp phát tài nguyên không
dây**, **experience-driven networking** (DRL-TE, Xu 2018), điều phối **UAV-IoT**.
Đây là mảng systems — phù hợp page orientation ngắn hơn là lineage sâu.

> **Prerequisite**: DQN, DDPG từ [Core-RL graph](/research).
