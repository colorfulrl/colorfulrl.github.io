---
domain: "Traffic Management / Smart City"
description: "Lộ trình RL cho giao thông đô thị: bài toán multi-agent điển hình. Từ survey + simulator (CityFlow), qua điều khiển đèn một giao lộ tới phối hợp toàn mạng (IntelliLight → PressLight → CoLight → MPLight), tới điều phối đội xe ride-hailing."
descriptionEn: "An RL-for-urban-traffic path: a canonical multi-agent problem. From a survey + simulator (CityFlow), through single-intersection to network-level signal control (IntelliLight → PressLight → CoLight → MPLight), to ride-hailing fleet dispatch."
order: 13
draft: false
stages:
  - id: survey
    label: "Survey & Môi trường"
    labelEn: "Survey & Environment"
    items:
      - ref: dqn
      - ref: ppo
      - ref: wei-survey
        after: [dqn]
      - ref: cityflow
        after: [dqn]
  - id: single-intersection
    label: "Đèn một Giao lộ"
    labelEn: "Single-Intersection Signal"
    items:
      - ref: intellilight
        after: [dqn]
  - id: coordinated
    label: "Phối hợp Đa Giao lộ"
    labelEn: "Coordinated Multi-Intersection"
    items:
      - ref: presslight
        after: [intellilight]
      - ref: colight
        after: [presslight]
      - ref: mplight
        after: [colight]
  - id: fleet
    label: "Điều phối Đội xe (Ride-hailing)"
    labelEn: "Fleet Dispatch (Ride-hailing)"
    items:
      - ref: fleet-management
        after: [ppo]
---

Điều khiển đèn giao thông là bài toán **multi-agent** điển hình: mỗi giao lộ là một
agent, phối hợp để giảm tắc nghẽn toàn mạng. RL vượt rule-based cố định vì thích
nghi theo lưu lượng thực. Vì không thử-sai trên đường thật, mảng này dựa nặng vào
**simulator** — **CityFlow** (nhanh hơn SUMO ~20×) là nền.

Lineage signal control rõ ràng (nhóm Wei/Zheng, Penn State):

- **IntelliLight** (Wei 2018): DRL cho MỘT giao lộ, học từ dữ liệu thật, mở màn dòng.
- **PressLight** (Wei 2019): nhúng lý thuyết **max-pressure** vào reward → phối hợp
  đa giao lộ có cơ sở giao thông học.
- **CoLight** (Wei 2019): **graph attention** cho phối hợp network-level (hàng trăm
  đèn) — agent học chú ý tới giao lộ lân cận nào.
- **MPLight** (Chen 2020): scalable tới hàng nghìn đèn (thử nghiệm Manhattan).

Ngoài đèn tín hiệu: **điều phối đội xe** ride-hailing (**Fleet Management**, Lin 2018)
— phân bổ xe theo cung-cầu bằng multi-agent RL.

> **Prerequisite**: DQN, PPO từ [Core-RL graph](/research); khái niệm multi-agent
> (QMIX) hữu ích cho phần phối hợp. *4 paper đã verified; IntelliLight/PressLight/
> MPLight mô tả từ kiến thức (paper KDD/AAAI, không trên arXiv).*
