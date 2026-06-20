---
domain: "LLM / Alignment (RLHF)"
description: "Lộ trình căn chỉnh LLM phân theo NGUỒN reward: từ sở thích con người (RLHF) tới phản hồi AI (RLAIF), reward kiểm chứng được (RLVR), và phổ rich-feedback đang bùng nổ."
descriptionEn: "An LLM alignment path organized by REWARD SOURCE: from human preference (RLHF) to AI feedback (RLAIF), verifiable rewards (RLVR), and the emerging rich-feedback spectrum."
order: 3
draft: false
stages:
  - id: prerequisites
    label: "Nền tảng (Core-RL)"
    labelEn: "Prerequisites (Core-RL)"
    items:
      - ref: deep-rl-human-preferences
      - ref: ppo
  - id: rlhf
    label: "RLHF — phản hồi con người"
    labelEn: "RLHF — human feedback"
    items:
      - ref: summarize-from-feedback
        after: [deep-rl-human-preferences, ppo]
      - ref: instructgpt
        after: [summarize-from-feedback]
  - id: direct-alignment
    label: "Direct Alignment — bỏ reward model"
    labelEn: "Direct Alignment — no reward model"
    items:
      - ref: dpo
        after: [instructgpt]
      - ref: simpo
        after: [dpo]
  - id: rlaif
    label: "RLAIF — phản hồi AI"
    labelEn: "RLAIF — AI feedback"
    items:
      - ref: constitutional-ai
        after: [instructgpt]
      - ref: rlaif
        after: [constitutional-ai]
  - id: rlvr
    label: "RLVR — reward kiểm chứng được"
    labelEn: "RLVR — verifiable rewards"
    items:
      - ref: lets-verify
        after: [instructgpt]
      - ref: tulu3
        after: [lets-verify]
  - id: reasoning
    label: "Reasoning RL"
    labelEn: "Reasoning RL"
    items:
      - ref: grpo
        after: [tulu3]
      - ref: deepseek-r1
        after: [grpo]
  - id: safety
    label: "An toàn & Giới hạn"
    labelEn: "Safety & Limits"
    items:
      - ref: reward-overoptimization
        after: [instructgpt]
      - ref: weak-to-strong
        after: [instructgpt]
      - ref: sycophancy
        after: [instructgpt]
  - id: rich-feedback
    label: "Rich Feedback (đang nổi)"
    labelEn: "Rich Feedback (emerging)"
    items:
      - ref: rlcf-scientific-taste
      - ref: rlcf-community-notes
      - ref: rlcf-checklist
      - ref: cm2
      - ref: critique-rl
      - ref: crl
      - ref: icrl
      - ref: rlbf
      - ref: triplay-rl
      - ref: spiral
      - ref: co-rewarding
      - ref: restrain
      - ref: prl
      - ref: rlsf
---

RLHF là chiến lược chủ đạo cho post-training LLM. Bản đồ này phân theo **nguồn của
reward** — câu hỏi cốt lõi: *"tín hiệu huấn luyện đến từ đâu?"*

- **RLHF**: con người chấm → reward model → PPO (công thức nền ChatGPT: SFT → RM → PPO).
- **Direct Alignment**: bỏ hẳn reward model rời rạc và RL — **DPO** tối ưu trực tiếp trên
  cặp sở thích bằng một mục tiêu phân loại tương đương (đơn giản, ổn định hơn).
- **RLAIF**: thay nhãn người bằng đánh giá của AI (nhanh, rẻ, mở rộng được).
- **RLVR**: reward **kiểm chứng tự động** (đúng/sai toán, pass unit test) — không qua sở thích.
- **Reasoning RL**: làn sóng dùng RLVR ở quy mô lớn để khơi dậy **suy luận** (GRPO,
  DeepSeek-R1) — về cơ chế dùng verifiable reward, nhưng nổi bật vì năng lực reasoning.
- **An toàn & Giới hạn**: nơi RLHF/RLVR *gãy* — reward over-optimization (Goodhart),
  giám sát yếu-mạnh (weak-to-strong), và xu nịnh (sycophancy).
- **Rich Feedback**: phổ tín hiệu đang bùng nổ ngoài các cái trên — critique, checklist,
  community, self-confidence, process reward, backtracking, self-play... Mỗi hướng dưới
  đây để **một paper tượng trưng**; đây là vùng frontier, thay đổi nhanh.

> **Cạm bẫy xuyên suốt**: reward hacking — model tối ưu proxy reward mà bỏ mục tiêu thật
> (xem `reward-hacking` trong [Core-RL graph](/research); paper *Reward Model
> Over-optimization* ở tầng RLHF là bằng chứng thực nghiệm).
>
> **Prerequisite**: Deep RL from Human Preferences, PPO từ [Core-RL graph](/research).
