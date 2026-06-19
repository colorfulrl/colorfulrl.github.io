---
title: "DreamSmooth: Improving Model-based Reinforcement Learning via Reward Smoothing"
authors: ["Vint Lee", "Pieter Abbeel", "Youngwoon Lee"]
year: 2023
venue: "ICLR 2024"
arxiv: "https://arxiv.org/abs/2311.01450"
abstract: "Model-based reinforcement learning (MBRL) has gained much attention for its ability to learn complex behaviors in a sample-efficient way: planning actions by generating imaginary trajectories with predicted rewards. Despite its success, we found that surprisingly, reward prediction is often a bottleneck of MBRL, especially for sparse rewards that are challenging (or even ambiguous) to predict. Motivated by the intuition that humans can learn from rough reward estimates, we propose a simple yet effective reward smoothing approach, DreamSmooth, which learns to predict a temporally-smoothed reward, instead of the exact reward at the given timestep. We empirically show that DreamSmooth achieves state-of-the-art performance on long-horizon sparse-reward tasks both in sample efficiency and final performance without losing performance on common benchmarks, such as Deepmind Control Suite and Atari benchmarks."
draft: false
graphLabel: "DreamSmooth"
graphDescription: "Lee et al. (2023). Predicts temporally-smoothed reward instead of exact per-step reward — breaks the sparse-reward bottleneck in MBRL without degrading dense-reward performance. Abbeel group, ICLR 2024."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: dreamerv3
    label: extends
  - target: atari
    label: evaluated on
  - target: dm-control
    label: evaluated on
---
