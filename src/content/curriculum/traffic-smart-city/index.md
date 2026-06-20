---
domain: "Traffic Management / Smart City"
description: "Lộ trình RL cho giao thông đô thị: điều khiển đèn tín hiệu đa giao lộ (multi-agent), tối ưu lưu lượng toàn thành phố."
descriptionEn: "An RL-for-traffic path: multi-intersection signal control (multi-agent), city-scale flow optimization."
order: 13
draft: false
stages:
  - id: prerequisites
    label: "Nền tảng (Core-RL)"
    labelEn: "Prerequisites (Core-RL)"
    items:
      - ref: dqn
      - ref: qmix
  - id: core
    label: "Cốt lõi"
    labelEn: "Core"
    items:
      - ref: presslight
        after: [dqn]
      - ref: colight
        after: [qmix]
  - id: advanced
    label: "Nâng cao"
    labelEn: "Advanced"
    items:
      - ref: city-scale-traffic-rl
        after: [colight]
---

Điều khiển đèn giao thông là bài toán **multi-agent** điển hình: mỗi giao lộ là
một agent, phối hợp để giảm tắc nghẽn toàn mạng. RL vượt rule-based cố định vì
thích nghi theo lưu lượng thực. Mốc: **PressLight** (dựa lý thuyết max-pressure),
**CoLight** (attention phối hợp giữa các giao lộ lân cận), và mở rộng **quy mô
thành phố**. Đây là phần *traffic-flow management* tách ra từ "Giao thông" gốc
(phần xe tự hành đã chuyển sang domain Lái xe tự hành). Nối `multi-agent-rl`
(QMIX) trong Core-RL.

> **Prerequisite**: DQN, QMIX (multi-agent) từ [Core-RL graph](/research).
