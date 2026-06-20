---
domain: "Autonomous Driving"
description: "Lộ trình từ học bắt chước hành vi lái tới các world model lái xe quy mô lớn. Giả định đã biết PPO/SAC và imitation learning từ Core-RL."
descriptionEn: "A path from imitation of driving behavior to large-scale driving world models. Assumes PPO/SAC and imitation learning from Core-RL."
order: 2
draft: false
stages:
  - id: prerequisites
    label: "Nền tảng (Core-RL)"
    labelEn: "Prerequisites (Core-RL)"
    items:
      - ref: gail
      - ref: dagger
      - ref: sac
  - id: core
    label: "Cốt lõi"
    labelEn: "Core"
    items:
      - ref: end-to-end-self-driving
        after: [dagger]
      - ref: learning-to-drive-in-a-day
        after: [sac]
      - ref: chauffeurnet
        after: [gail]
  - id: advanced
    label: "Nâng cao"
    labelEn: "Advanced"
    items:
      - ref: mile
        after: [chauffeurnet]
      - ref: gaia-1
        after: [mile]
---

Lái xe tự hành là một trong những ứng dụng RL/imitation learning có rủi ro cao
nhất: dữ liệu lệch (expert lái an toàn nên hiếm tình huống nguy hiểm), và lỗi
phân phối (compounding error) khi policy lệch khỏi quỹ đạo demo. Lộ trình bắt
đầu từ học bắt chước end-to-end (**ChauffeurNet**, NVIDIA), tới RL thật trên xe
trong một ngày (**Learning to Drive in a Day**), rồi các **world model** lái xe
quy mô lớn (**MILE**, **GAIA-1**) học mô phỏng để lập kế hoạch.

> **Prerequisite**: GAIL, DAgger, SAC từ [Core-RL graph](/research).
