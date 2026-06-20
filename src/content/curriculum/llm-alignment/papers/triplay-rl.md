---
title: "TriPlay-RL: Tri-Role Self-Play Reinforcement Learning for LLM Safety Alignment"
authors: ["Zhewen Tan", "Wenhan Yu", "Jianfeng Si", "Tongxin Liu", "Duohe Ma", "Xiangzheng Zhang", "Tong Yang", "Lin Sun", "et al."]
year: 2026
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2601.18292"
abstract: "In recent years, safety risks associated with large language models have become increasingly prominent, highlighting the urgent need to mitigate the generation of toxic and harmful content. The mainstream paradigm for LLM safety alignment typically adopts a collaborative framework involving three roles: an attacker for adversarial prompt generation, a defender for safety defense, and an evaluator for response assessment. In this paper, we propose a closed-loop reinforcement learning framework called TriPlay-RL that enables iterative and co-improving collaboration among three roles with near-zero manual annotation. Experimental results show that the attacker preserves high output diversity while achieving a 20%-50% improvement in adversarial effectiveness; the defender attains 10%-30% gains in safety performance without degrading general reasoning capability; and the evaluator continuously refines its fine-grained judgment ability through iterations, accurately distinguishing unsafe responses, simple refusals, and useful guidance. Overall, our framework establishes an efficient and scalable paradigm for LLM safety alignment, enabling continuous co-evolution within a unified learning loop."
graphLabel: "TriPlay-RL"
graphDescription: "Tan et al. (2026). Ba vai — attacker (prompt độc hại), defender (phản hồi an toàn), evaluator (chấm) — train trong vòng kín đồng tiến hóa, gần như không cần nhãn tay. RL qua co-evolution của vai thay vì reward model cố định. Hướng post-training an toàn."
draft: false
---
