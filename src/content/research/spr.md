---
title: "Data-Efficient Reinforcement Learning with Self-Predictive Representations"
authors: ["Max Schwarzer", "Ankesh Anand", "Rishab Goel", "R Devon Hjelm", "Aaron Courville", "Philip Bachman"]
year: 2021
venue: "ICLR 2021"
arxiv: "https://arxiv.org/abs/2007.05929"
abstract: "While deep reinforcement learning excels at solving tasks where large amounts of data can be collected, its sample efficiency compared to humans remains quite poor. In this work, we study how self-supervised representation learning can be used to improve the sample efficiency of deep reinforcement learning from pixels. We introduce SPR, a method that trains an agent to make predictions about its own latent state representations several steps into the future. We compute target representations for future states using a momentum encoder, then train the agent to predict these representations using a learned transition model. We find that these targets are a useful prediction task that encourages learning of representations that are both predictive and consistent across time. Our method achieves a median human-normalized score of 0.415 on the Atari 100K benchmark, outperforming all prior methods by at least 29%."
draft: false
graphLabel: "SPR"
graphDescription: "Schwarzer et al. (2021). Self-supervised multi-step latent prediction (momentum encoder targets) on top of DQN — 0.415 median HNS on Atari 100k; first non-WM method to substantially outperform CURL/DrQ."
graphEdges:
  - target: model-free-rl
    label: based on
  - target: value-based
    label: uses
  - target: latent-dynamics
    label: uses
  - target: atari
    label: evaluated on
---
