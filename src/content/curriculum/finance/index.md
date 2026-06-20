---
domain: "Finance / Trading"
description: "Lộ trình RL cho tài chính: trading, thực thi lệnh, quản lý danh mục, market making — nơi RỦI RO (phân phối return) quan trọng ngang lợi nhuận, và backtest dễ lừa người."
descriptionEn: "An RL-for-finance path: trading, execution, portfolio management, market making — where RISK (return distribution) matters as much as profit, and backtests deceive."
order: 6
draft: false
stages:
  - id: prerequisites
    label: "Nền tảng (Core-RL)"
    labelEn: "Prerequisites (Core-RL)"
    items:
      - ref: dqn
      - ref: ppo
      - ref: c51
  - id: trading-execution
    label: "Trading & Thực thi lệnh"
    labelEn: "Trading & Execution"
    items:
      - ref: deep-rl-trading
        after: [dqn]
      - ref: rl-optimal-execution
        after: [ppo]
  - id: portfolio-marketmaking
    label: "Danh mục & Market Making"
    labelEn: "Portfolio & Market Making"
    items:
      - ref: rl-portfolio
        after: [ppo]
      - ref: rl-market-making
        after: [deep-rl-trading]
      - ref: finrl
        after: [deep-rl-trading]
  - id: risk-pitfalls
    label: "Rủi ro & Cạm bẫy"
    labelEn: "Risk & Pitfalls"
    items:
      - ref: deep-hedging
        after: [c51]
      - ref: backtest-overfitting
        after: [deep-rl-trading]
---

Tài chính hấp dẫn RL vì là bài toán ra quyết định tuần tự dưới bất định — nhưng
khác biệt cốt lõi với game/robot: **rủi ro** (đuôi phân phối return) quan trọng
ngang kỳ vọng, và **thị trường phi dừng** (non-stationary) giết nhiều chiến lược
đẹp trên giấy.

- **Nền tảng**: value/policy (**DQN, PPO**) + **distributional RL (C51)** — mô hình
  hóa cả phân phối return, không chỉ trung bình, là nền tự nhiên cho ra quyết định
  có ý thức về rủi ro.
- **Trading & Thực thi**: chiến lược mua/bán (**Deep RL for Trading**) và **optimal
  execution** (chia lệnh lớn để giảm market impact — bài toán RL kinh điển từ 2006).
- **Danh mục & Market Making**: phân bổ đa tài sản (**RL Portfolio**), tạo lập thị
  trường (**RL Market Making**), và thư viện chuẩn **FinRL**.
- **Rủi ro & Cạm bẫy**: phòng hộ rủi ro học sâu (**Deep Hedging**) và — quan trọng
  nhất cho người mới — **backtest overfitting**: với đủ thử nghiệm, BẤT KỲ chiến
  lược nào cũng trông đẹp trên dữ liệu lịch sử. Đọc tầng này trước khi tin bất kỳ
  kết quả trading nào.

> **Prerequisite**: DQN, PPO, C51 (distributional) từ [Core-RL graph](/research).
