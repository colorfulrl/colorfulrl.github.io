---
title: "Hieros: Hierarchical Imagination on Structured State Space Sequence World Models"
authors: ["Paul Mattes", "Rainer Schlosser", "Ralf Herbrich"]
year: 2023
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2310.05167"
abstract: "One of the biggest challenges to modern deep reinforcement learning (DRL) algorithms is sample efficiency. Many approaches learn a world model in order to train an agent entirely in imagination, eliminating the need for direct environment interaction during training. However, these methods often suffer from either a lack of imagination accuracy, exploration capabilities, or runtime efficiency. We propose Hieros, a hierarchical policy that learns time abstracted world representations and imagines trajectories at multiple time scales in latent space. Hieros uses an S5 layer-based world model, which predicts next world states in parallel during training and iteratively during environment interaction. Due to the special properties of S5 layers, our method can train in parallel and predict next world states iteratively during imagination. This allows for more efficient training than RNN-based world models and more efficient imagination than Transformer-based world models. We show that our approach outperforms the state of the art in terms of mean and median normalized human score on the Atari 100k benchmark, and that our proposed world model is able to predict complex dynamics very accurately. We also show that Hieros displays superior exploration capabilities compared to existing approaches."
draft: false
graphLabel: "Hieros"
graphDescription: "Mattes et al. (2023). S5 (Structured SSM) WM + hierarchical policy imagining at multiple time scales — parallel training O(n), iterative imagination. Outperforms DreamerV2 on Atari 100k mean+median HNS."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: latent-dynamics
    label: uses
  - target: hierarchical-rl
    label: uses
  - target: atari
    label: evaluated on
---
