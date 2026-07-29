---
title: "Towards Control-Centric Representations in Reinforcement Learning from Images"
authors: ["Chen Liu", "Hongyu Zang", "Xin Li", "Yong Heng", "Yifei Wang", "Zhen Fang", "Yisen Wang", "Mingzhong Wang"]
year: 2023
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2310.16655"
abstract: "Image-based Reinforcement Learning is a practical yet challenging task. A major hurdle lies in extracting control-centric representations while disregarding irrelevant information. While approaches that follow the bisimulation principle exhibit the potential in learning state representations to address this issue, they still grapple with the limited expressive capacity of latent dynamics and the inadaptability to sparse reward environments. To address these limitations, we introduce ReBis, which aims to capture control-centric information by integrating reward-free control information alongside reward-specific knowledge. ReBis utilizes a transformer architecture to implicitly model the dynamics and incorporates block-wise masking to eliminate spatiotemporal redundancy. Moreover, ReBis combines bisimulation-based loss with asymmetric reconstruction loss to prevent feature collapse in environments with sparse rewards. Empirical studies on two large benchmarks, including Atari games and DeepMind Control Suit, demonstrate that ReBis has superior performance compared to existing methods, proving its effectiveness."
draft: false
graphLabel: "ReBis"
graphDescription: "Liu, Zang, Li, Heng, Wang, Fang, Wang & Wang (2023). Combines a bisimulation-based loss with a reward-free control-information objective plus asymmetric reconstruction, using a transformer to implicitly model dynamics with block-wise masking (cutting spatiotemporal redundancy). Aimed squarely at bisimulation's two known weak spots at once: limited expressiveness of the latent-dynamics model, and collapse under sparse reward. Evaluated on Atari + DM Control."
graphEdges:
  - target: bisimulation-metric
    label: extends
  - target: sparse-reward
    label: addresses
  - target: atari
    label: evaluated on
  - target: dm-control
    label: evaluated on
---
