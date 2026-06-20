---
title: "SimbaV2: Hyperspherical Normalization for Scalable Deep Reinforcement Learning"
authors: ["Hojoon Lee", "Youngdo Lee", "Takuma Seno", "Donghu Kim", "Peter Stone", "Jaegul Choo"]
year: 2025
venue: "ICML 2025"
arxiv: "https://arxiv.org/abs/2502.15280"
abstract: "Scaling up the model size and computation has brought consistent performance improvements in supervised learning. However, this lesson often fails to apply to reinforcement learning (RL) because training the model on non-stationary data easily leads to overfitting and unstable optimization. In response, we introduce SimbaV2, a novel RL architecture designed to stabilize optimization by (i) constraining the growth of weight and feature norm by hyperspherical normalization; and (ii) using a distributional value estimation with reward scaling to maintain stable gradients under varying reward magnitudes. Using the soft actor-critic as a base algorithm, SimbaV2 scales up effectively with larger models and greater compute, achieving state-of-the-art performance on 57 continuous control tasks across 4 domains. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "SimbaV2"
graphDescription: "Lee et al. (2025). Extends SimBa with hyperspherical normalization (bounding weight/feature norm growth) + distributional value estimation with reward scaling — stabilizes optimization so SAC scales cleanly with model size and compute. SOTA on 57 continuous-control tasks. ICML 2025 spotlight."
graphEdges:
  - target: scaling-rl
    label: uses
  - target: simba
    label: extends
  - target: maximum-entropy-rl
    label: uses
  - target: distributional-rl
    label: uses
  - target: dm-control
    label: evaluated on
---
