---
domain: "Recommender Systems"
description: "Lộ trình RL cho hệ gợi ý: tối ưu tương tác dài hạn của người dùng thay vì click tức thời, với off-policy correction trên log khổng lồ."
descriptionEn: "An RL-for-recommendation path: optimizing long-term user engagement over instant clicks, with off-policy correction on massive logs."
order: 8
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
      - ref: youtube-topk-reinforce
        after: [dqn]
      - ref: slateq
        after: [dqn]
  - id: advanced
    label: "Nâng cao"
    labelEn: "Advanced"
    items:
      - ref: drn-news-recommendation
        after: [youtube-topk-reinforce]
---

RL đưa vào recsys một thay đổi tư duy: tối ưu **tương tác dài hạn** (giữ chân
người dùng) thay vì click tức thời — đúng bài toán tuần tự. Thách thức đặc thù:
không gian hành động khổng lồ (hàng triệu item), và phải học **off-policy** từ
log production (không thử-sai trực tiếp). Mốc: **Top-K off-policy REINFORCE**
(YouTube, Chen 2019), **SlateQ** (Google, phân rã giá trị một slate), **DRN**
(gợi ý tin tức). Nối `policy-gradient` và off-policy trong Core-RL.

> **Prerequisite**: DQN, DDPG từ [Core-RL graph](/research).
