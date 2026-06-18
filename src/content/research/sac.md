---
title: "Soft Actor-Critic: Off-Policy Maximum Entropy Deep Reinforcement Learning with a Stochastic Actor"
authors: ["Tuomas Haarnoja", "Aurick Zhou", "Pieter Abbeel", "Sergey Levine"]
year: 2018
venue: "ICML 2018"
arxiv: "https://arxiv.org/abs/1801.01290"
abstract: "SAC maximizes a trade-off between expected return and entropy, leading to more robust and sample-efficient learning. The automatic temperature tuning variant removes the need for manual reward scaling."
draft: false
graphLabel: "SAC"
graphDescription: "Haarnoja et al. (2018). Maximum entropy RL that auto-balances reward and entropy for robust, sample-efficient exploration."
graphEdges:
  - target: actor-critic
    label: based on
  - target: dm-control
    label: evaluated on
---
