---
domain: "Recommender Systems"
description: "Lộ trình RL cho hệ gợi ý: từ khung MDP/long-term engagement, qua value-based (SlateQ) và off-policy policy-gradient (YouTube REINFORCE), tới mô phỏng người dùng, và cạm bẫy feedback loop / filter bubble. Khác supervised RecSys: tối ưu giá trị DÀI HẠN."
descriptionEn: "An RL-for-recommendation path: from the MDP/long-term-engagement framing, through value-based (SlateQ) and off-policy policy-gradient (YouTube REINFORCE), to user simulation, and the feedback-loop / filter-bubble pitfalls. Unlike supervised RecSys it optimizes LONG-TERM value."
order: 8
draft: false
stages:
  - id: prerequisites
    label: "Nền tảng & Survey"
    labelEn: "Foundations & Survey"
    items:
      - ref: dqn
      - ref: reinforce
      - ref: afsar-survey
        after: [dqn]
  - id: value-based
    label: "Value-based RecSys"
    labelEn: "Value-based RecSys"
    items:
      - ref: drn-news
        after: [dqn]
      - ref: slateq
        after: [drn-news]
  - id: policy-gradient
    label: "Off-policy Policy-Gradient"
    labelEn: "Off-policy Policy-Gradient"
    items:
      - ref: youtube-topk
        after: [reinforce]
  - id: simulation
    label: "Mô phỏng & User Models"
    labelEn: "Simulation & User Models"
    items:
      - ref: recsim
        after: [slateq]
      - ref: virtual-taobao
        after: [recsim]
  - id: pitfalls
    label: "Cạm bẫy: Feedback Loop"
    labelEn: "Pitfalls: Feedback Loops"
    items:
      - ref: degenerate-feedback-loops
        after: [recsim]
---

Gợi ý không phải bài toán phân loại một-lần mà là **tương tác tuần tự** người–hệ
thống: mỗi gợi ý thay đổi trạng thái và hành vi tương lai của người dùng. Đặt
thành MDP cho phép tối ưu **engagement DÀI HẠN** thay vì click tức thời — đó là
lý do RL vào RecSys.

Hai khó khăn đặc thù định hình lĩnh vực:

- **Không gian hành động khổng lồ + slate**: hàng triệu item, và ta gợi ý cả một
  *slate* (danh sách) có tương tác lẫn nhau. **SlateQ** phân rã giá trị slate thành
  tổng giá trị từng item để Q-learning khả thi.
- **Off-policy từ log**: chỉ có dữ liệu log từ policy cũ (implicit feedback: click,
  dwell time). **YouTube Top-K REINFORCE** thêm off-policy correction để học từ log
  lệch phân phối, scale tới hàng triệu action.

Lộ trình: survey (**Afsar 2021**) → value-based (**DRN** news DQN, **SlateQ**) →
off-policy policy-gradient (**YouTube Top-K REINFORCE**) → mô phỏng người dùng
(**RecSim**, **Virtual-Taobao** — vì thử trực tiếp trên người dùng thật rất đắt/rủi
ro) → **cạm bẫy feedback loop**: hệ gợi ý tự định hình niềm tin người dùng, tạo
echo chamber / filter bubble (**Jiang 2019**).

> **Prerequisite**: DQN, REINFORCE từ [Core-RL graph](/research). *Một số paper
> recent metadata chờ Khoa bổ sung.*
