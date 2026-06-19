---
title: "CURL: Contrastive Unsupervised Representations for Reinforcement Learning"
authors: ["Michael Laskin", "Aravind Srinivas", "Pieter Abbeel"]
year: 2020
venue: "ICML 2020"
arxiv: "https://arxiv.org/abs/2004.04136"
abstract: "We present CURL: Contrastive Unsupervised Representations for Reinforcement Learning. CURL extracts high-level features from raw pixels using contrastive learning and performs off-policy control on top of the extracted features. CURL outperforms prior pixel-based methods, both model-based and model-free, on complex tasks in the DeepMind control suite and Atari game environments, matching (or exceeding) the sample-efficiency of methods that use proprioceptive state information. On the DeepMind control suite, CURL is the first image-based algorithm to nearly match the sample-efficiency of methods that use ground-truth state information for multiple tasks."
draft: false
graphLabel: "CURL"
graphDescription: "Laskin et al. (2020). MoCo-style contrastive learning as auxiliary loss for pixel-based RL — plugs into SAC (continuous) or DQN (discrete). First image-based method to match state-based sample efficiency on DMControl."
graphEdges:
  - target: model-free-rl
    label: based on
  - target: contrastive-rl
    label: uses
  - target: dm-control
    label: evaluated on
  - target: atari
    label: evaluated on
---
