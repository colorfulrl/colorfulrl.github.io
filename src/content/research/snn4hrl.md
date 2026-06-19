---
title: "Stochastic Neural Networks for Hierarchical Reinforcement Learning"
authors: ["Carlos Florensa", "Yan Duan", "Pieter Abbeel"]
year: 2017
venue: "ICLR 2017"
arxiv: "https://arxiv.org/abs/1704.03012"
abstract: "Deep reinforcement learning has achieved many impressive results in recent years. However, tasks with sparse rewards or long horizons continue to pose significant challenges. To tackle these important problems, we propose a general framework that first learns useful skills in a pre-training environment, and then leverages the acquired skills for learning faster in downstream tasks. Our approach brings together some of the strengths of intrinsic motivation and hierarchical methods: the learning of useful skill is guided by a single proxy reward, the design of which requires very minimal domain knowledge about the downstream tasks. Then a high-level policy is trained on top of these skills, providing a significant improvement of the exploration and allowing to tackle sparse rewards in the downstream tasks. To efficiently pre-train a large span of skills, we use Stochastic Neural Networks combined with an information-theoretic regularizer. Our experiments show that this combination is effective in learning a wide span of interpretable skills in a sample-efficient way, and can significantly boost the learning performance uniformly across a wide range of downstream tasks."
draft: false
graphLabel: "SNN4HRL"
graphDescription: "Florensa, Duan & Abbeel (2017). Pre-trains diverse skills via Stochastic Neural Networks + information-theoretic regularizer, then trains a high-level policy on top — tackles sparse rewards and long horizons without per-task intrinsic reward design. ICLR 2017."
graphEdges:
  - target: hierarchical-rl
    label: uses
  - target: temporal-abstraction
    label: uses
  - target: intrinsic-motivation
    label: uses
  - target: exploration
    label: uses
---
