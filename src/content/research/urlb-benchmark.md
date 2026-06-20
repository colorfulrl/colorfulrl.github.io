---
title: "URLB: Unsupervised Reinforcement Learning Benchmark"
authors: ["Michael Laskin", "Denis Yarats", "Hao Liu", "Kimin Lee", "Albert Zhan", "Kevin Lu", "Catherine Cang", "Lerrel Pinto", "Pieter Abbeel"]
year: 2021
venue: "NeurIPS 2021 Datasets and Benchmarks"
arxiv: "https://arxiv.org/abs/2110.15191"
abstract: "Deep Reinforcement Learning (RL) has emerged as a powerful paradigm to solve a range of complex yet specific control tasks. Yet training generalist agents that can quickly adapt to new tasks remains an outstanding challenge. Recent advances in unsupervised RL have shown that pre-training RL agents with self-supervised intrinsic rewards can result in efficient adaptation. However, these algorithms have been hard to compare and develop due to the lack of a unified benchmark. To this end, we introduce the Unsupervised Reinforcement Learning Benchmark (URLB). URLB consists of two phases: reward-free pre-training and downstream task adaptation with extrinsic rewards. Building on the DeepMind Control Suite, we provide twelve continuous control tasks from three domains for evaluation and open-source code for eight leading unsupervised RL methods. We find that the implemented baselines make progress but are not able to solve URLB and propose directions for future research."
draft: false
graphLabel: "URLB (Benchmark)"
graphDescription: "Laskin et al. (2021). Introduces URLB — a unified two-phase benchmark (reward-free pretraining → downstream adaptation) over 12 DMControl tasks, with open-source implementations of 8 unsupervised RL methods. Standardizes comparison for the field. NeurIPS 2021 D&B."
graphEdges:
  - target: unsupervised-rl
    label: based on
  - target: urlb
    label: introduces
  - target: dm-control
    label: evaluated on
---
