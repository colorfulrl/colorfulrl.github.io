---
title: "CM2: Reinforcement Learning with Checklist Rewards for Multi-Turn and Multi-Step Agentic Tool Use"
authors: ["Zhen Zhang", "Kaiqiang Song", "Xun Wang", "Yebowen Hu", "Weixiang Yan", "Chenyang Zhao", "Xiaoyang Wang", "Xin Eric Wang", "Song Wang", "et al."]
year: 2026
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2602.12268"
abstract: "AI agents are increasingly used to solve real-world tasks by reasoning over multi-turn user interactions and invoking external tools. However, applying reinforcement learning to such settings remains difficult: realistic objectives often lack verifiable rewards and instead emphasize open-ended behaviors; moreover, RL for multi-turn, multi-step agentic tool use is still underexplored; and building and maintaining executable tool environments is costly, limiting scale and coverage. We propose CM2, an RL framework that replaces verifiable outcome rewards with checklist rewards. CM2 decomposes each turn's intended behavior into fine-grained binary criteria with explicit evidence grounding and structured metadata, turning open-ended judging into more stable classification-style decisions. To balance stability and informativeness, our method adopts a strategy of sparse reward assignment but dense evaluation criteria. Training is performed in a scalable LLM-simulated tool environment, avoiding heavy engineering for large tool sets. Experiments show that CM2 consistently improves over supervised fine-tuning."
graphLabel: "CM2"
graphDescription: "Zhang et al. (2026). Checklist reward cho agentic tool use nhiều lượt/nhiều bước — phân rã hành vi mỗi lượt thành tiêu chí nhị phân có evidence grounding, biến judging mở thành quyết định kiểu phân loại. Sparse reward + dense criteria; train trong tool env mô phỏng bằng LLM."
draft: false
---
