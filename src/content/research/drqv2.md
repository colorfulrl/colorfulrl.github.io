---
title: "Mastering Visual Continuous Control: Improved Data-Augmented Reinforcement Learning"
authors: ["Denis Yarats", "Rob Fergus", "Alessandro Lazaric", "Lerrel Pinto"]
year: 2021
venue: "ICLR 2022"
arxiv: "https://arxiv.org/abs/2107.09645"
abstract: "Mastering pixel-based image observations is still an open challenge in model-free deep reinforcement learning. Several prior works have shown that data augmentation helps alleviate this problem, however, existing approaches either demonstrate performance below native state-based agents or require complex domain-specific knowledge. In this paper, we introduce DrQ-v2, a model-free reinforcement learning algorithm for visual continuous control. DrQ-v2 builds on DrQ, an off-policy actor-critic approach that uses data augmentation to learn directly from pixels. We introduce several improvements to DrQ that yield state-of-the-art performance across many challenging continuous control tasks from the DeepMind Control Suite benchmark and require fewer environment steps."
draft: false
graphLabel: "DrQ-v2"
graphDescription: "Yarats et al. (2021). TD3 + random-shift augmentation + n-step returns for pixel-based continuous control. Strong model-free baseline on DMControl pixels that WM methods must beat."
graphEdges:
  - target: model-free-rl
    label: based on
  - target: td3
    label: extends
  - target: actor-critic
    label: uses
  - target: dm-control
    label: evaluated on
---
