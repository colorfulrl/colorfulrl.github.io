---
title: "An Equivalence between Loss Functions and Non-Uniform Sampling in Experience Replay"
authors: ["Scott Fujimoto", "David Meger", "Doina Precup"]
year: 2020
venue: "NeurIPS 2020"
arxiv: "https://arxiv.org/abs/2007.06049"
abstract: "Prioritized Experience Replay (PER) is a deep reinforcement learning technique in which agents learn from transitions sampled with non-uniform probability proportionate to their temporal-difference error. We show that any loss function evaluated with non-uniformly sampled data can be transformed into another uniformly sampled loss function with the same expected gradient. Surprisingly, we find in some environments PER can be replaced entirely by this new loss function without impact to empirical performance. Furthermore, this relationship suggests a new branch of improvements to PER by correcting its uniformly sampled loss function equivalent. We demonstrate the effectiveness of our proposed modifications to PER and the equivalent loss function in several MuJoCo and Atari environments."
draft: false
graphLabel: "LAP / PAL"
graphDescription: "Fujimoto, Meger & Precup (2020). Proves any non-uniformly-sampled loss equals a uniformly-sampled loss with the same expected gradient — so PER can sometimes be replaced by a reweighted loss (PAL), and corrected to give the Loss-Adjusted Prioritized (LAP) variant. Reframes prioritized replay. NeurIPS 2020."
graphEdges:
  - target: experience-replay
    label: extends
  - target: prioritized-replay
    label: extends
  - target: value-based
    label: uses
---
