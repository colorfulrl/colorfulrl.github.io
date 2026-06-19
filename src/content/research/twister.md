---
title: "Learning Transformer-based World Models with Contrastive Predictive Coding"
authors: ["Maxime Burchi", "Radu Timofte"]
year: 2025
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2503.04416"
abstract: "The DreamerV3 algorithm recently obtained remarkable performance across diverse environment domains by learning an accurate world model based on Recurrent Neural Networks (RNNs). Following the success of model-based reinforcement learning algorithms and the rapid adoption of the Transformer architecture for its superior training efficiency and favorable scaling properties, recent works such as STORM have proposed replacing RNN-based world models with Transformer-based world models using masked self-attention. However, despite the improved training efficiency of these methods, their impact on performance remains limited compared to the Dreamer algorithm, struggling to learn competitive Transformer-based world models. In this work, we show that the next state prediction objective adopted in previous approaches is insufficient to fully exploit the representation capabilities of Transformers. We propose to extend world model predictions to longer time horizons by introducing TWISTER (Transformer-based World model wIth contraSTivE Representations), a world model using action-conditioned Contrastive Predictive Coding to learn high-level temporal feature representations and improve the agent performance. TWISTER achieves a human-normalized mean score of 162% on the Atari 100k benchmark, setting a new record among state-of-the-art methods that do not employ look-ahead search."
draft: false
graphLabel: "TWISTER"
graphDescription: "Burchi & Timofte (2025). Transformer WM with action-conditioned CPC (multi-step contrastive targets) instead of next-step prediction — exploits Transformer's long-range capacity. 162% HNS Atari 100k; SOTA without search."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: transformer
    label: uses
  - target: latent-dynamics
    label: uses
  - target: atari
    label: evaluated on
---
