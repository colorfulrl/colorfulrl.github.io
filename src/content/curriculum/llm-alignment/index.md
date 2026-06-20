---
domain: "LLM / Alignment (RLHF)"
description: "Lộ trình từ RL học từ sở thích con người (gốc trong Core-RL) tới căn chỉnh mô hình ngôn ngữ lớn: InstructGPT, DPO, Constitutional AI."
descriptionEn: "A path from RL-from-human-preferences (rooted in Core-RL) to large language model alignment: InstructGPT, DPO, Constitutional AI."
order: 3
draft: false
stages:
  - id: prerequisites
    label: "Nền tảng (Core-RL)"
    labelEn: "Prerequisites (Core-RL)"
    items:
      - ref: deep-rl-human-preferences
      - ref: ppo
  - id: core
    label: "Cốt lõi"
    labelEn: "Core"
    items:
      - ref: instructgpt
        after: [deep-rl-human-preferences, ppo]
      - ref: dpo
        after: [instructgpt]
  - id: advanced
    label: "Nâng cao"
    labelEn: "Advanced"
    items:
      - ref: constitutional-ai
        after: [instructgpt]
      - ref: rlaif
        after: [constitutional-ai]
---

RLHF là cầu nối trực tiếp từ Core-RL sang mảng LLM: paper gốc **Deep RL from
Human Preferences** (Christiano 2017, có trong graph chính) học reward model từ
so sánh sở thích, rồi tối ưu policy bằng PPO. **InstructGPT** đưa công thức này
vào LLM (ancestor của ChatGPT); **DPO** loại bỏ reward model rời rạc bằng một
mục tiêu phân loại tương đương; **Constitutional AI** / **RLAIF** thay nhãn
người bằng phản hồi AI. Đây cũng là nơi `reward-hacking` (trong Core-RL) thành
mối lo trung tâm.

> **Prerequisite**: Deep RL from Human Preferences, PPO từ [Core-RL graph](/research).
