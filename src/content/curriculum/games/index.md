---
domain: "Games & Strategic Play"
description: "Lộ trình phân theo độ phức tạp thông tin: từ game thông tin hoàn hảo (search + self-play) tới học model, real-time quy mô lớn, game thông tin KHÔNG hoàn hảo (game theory), và game hợp tác + ngôn ngữ."
descriptionEn: "A path organized by information complexity: from perfect-information games (search + self-play) to learned models, real-time large-scale, imperfect-information (game theory), and cooperative + language games."
order: 4
draft: false
stages:
  - id: prerequisites
    label: "Nền tảng (Core-RL)"
    labelEn: "Prerequisites (Core-RL)"
    items:
      - ref: dqn
      - ref: ppo
  - id: search-selfplay
    label: "Search + Self-Play (thông tin hoàn hảo)"
    labelEn: "Search + Self-Play (perfect info)"
    items:
      - ref: alphago
        after: [dqn]
      - ref: alphago-zero
        after: [alphago]
      - ref: alphazero
        after: [alphago-zero]
  - id: learned-models
    label: "Học model thay vì biết luật"
    labelEn: "Learned Models"
    items:
      - ref: muzero
        after: [alphazero]
      - ref: efficientzero
        after: [muzero]
  - id: realtime-scale
    label: "Real-time + quy mô lớn"
    labelEn: "Real-time & Large-scale"
    items:
      - ref: alphastar
        after: [ppo]
      - ref: openai-five
        after: [ppo]
  - id: imperfect-info
    label: "Thông tin KHÔNG hoàn hảo (Game Theory)"
    labelEn: "Imperfect Information (Game Theory)"
    items:
      - ref: cfr
        after: [alphazero]
      - ref: deepstack
        after: [cfr]
      - ref: libratus
        after: [cfr]
      - ref: pluribus
        after: [libratus]
  - id: cooperative-language
    label: "Hợp tác + Ngôn ngữ"
    labelEn: "Cooperative & Language"
    items:
      - ref: hanabi
        after: [openai-five]
      - ref: cicero
        after: [pluribus]
---

Games là chiến trường lịch sử của RL — nơi self-play và search sinh ra trí tuệ
siêu nhân. Bản đồ này phân theo **độ phức tạp thông tin**: game khó ở đâu, RL
giải bằng cách nào.

- **Search + Self-Play**: thông tin hoàn hảo (cờ vây/vua/shogi) — MCTS + self-play
  + neural net. **AlphaGo → AlphaGo Zero → AlphaZero**.
- **Học model**: bỏ luật cho sẵn, **MuZero** học model rồi search trong đó — bước
  nhảy gần với world models (lõi của workspace này).
- **Real-time + quy mô lớn**: partial observability, không gian hành động khổng lồ,
  đa-agent, real-time — **AlphaStar** (StarCraft II), **OpenAI Five** (Dota 2, PPO
  quy mô lớn + population self-play).
- **Thông tin KHÔNG hoàn hảo**: poker cần *bluff* và cân bằng Nash — đây **không
  phải RL thuần** mà chủ yếu là **game theory** (Counterfactual Regret Minimization,
  CFR) + search. Cầu nối về Core-RL ở tầng này *yếu hơn* các tầng khác — đó là điểm
  cần nhớ: thông tin không hoàn hảo đòi công cụ khác.
- **Hợp tác + Ngôn ngữ**: theory-of-mind (**Hanabi**) và thương lượng bằng ngôn ngữ
  (**Cicero** chơi Diplomacy — kết hợp RL + LLM), bắc cầu sang domain
  [LLM/Alignment](/research/llm-alignment).

> **Prerequisite**: DQN, PPO từ [Core-RL graph](/research). MuZero/AlphaZero cũng
> nằm trong graph chính (các node xanh có thể click sang).
