---
title: "MuDreamer: Learning Predictive World Models without Reconstruction"
authors: ["Maxime Burchi", "Radu Timofte"]
year: 2024
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2405.15083"
abstract: "The DreamerV3 agent recently demonstrated state-of-the-art performance in diverse domains, learning powerful world models in latent space using a pixel reconstruction loss. However, while the reconstruction loss is essential to Dreamer's performance, it also necessitates modeling unnecessary information. Consequently, Dreamer sometimes fails to perceive crucial elements which are necessary for task-solving when visual distractions are present in the observation, significantly limiting its potential. In this paper, we present MuDreamer, a robust reinforcement learning agent that builds upon the DreamerV3 algorithm by learning a predictive world model without the need for reconstructing input signals. Rather than relying on pixel reconstruction, hidden representations are instead learned by predicting the environment value function and previously selected actions. Similar to predictive self-supervised methods for images, we find that the use of batch normalization is crucial to prevent learning collapse. We also study the effect of KL balancing between model posterior and prior losses on convergence speed and learning stability. We evaluate MuDreamer on the commonly used DeepMind Visual Control Suite and demonstrate stronger robustness to visual distractions compared to DreamerV3 and other reconstruction-free approaches, replacing the environment background with task-irrelevant real-world videos. Our method also achieves comparable performance on the Atari100k benchmark while benefiting from faster training."
draft: false
graphLabel: "MuDreamer"
graphDescription: "Burchi & Timofte (2024). Decoder-free DreamerV3 — learns latent representations by predicting value function + actions instead of pixels. Batch norm prevents collapse. More distraction-robust than DreamerV3."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: decoder-free
    label: instance of
  - target: dreamerv3
    label: extends
  - target: latent-dynamics
    label: uses
  - target: atari
    label: evaluated on
  - target: dm-control
    label: evaluated on
---
