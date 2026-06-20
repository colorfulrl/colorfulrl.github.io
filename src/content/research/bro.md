---
title: "Bigger, Regularized, Optimistic: scaling for compute and sample-efficient continuous control"
authors: ["Michal Nauman", "Mateusz Ostaszewski", "Krzysztof Jankowski", "Piotr Miłoś", "Marek Cygan"]
year: 2024
venue: "NeurIPS 2024"
arxiv: "https://arxiv.org/abs/2405.16158"
abstract: "Sample efficiency in Reinforcement Learning (RL) has traditionally been driven by algorithmic enhancements. In this work, we demonstrate that scaling can also lead to substantial improvements. We conduct a thorough investigation into the interplay of scaling model capacity and domain-specific RL enhancements. These empirical findings inform the design choices underlying our proposed BRO (Bigger, Regularized, Optimistic) algorithm. The key innovation behind BRO is that strong regularization allows for effective scaling of the critic networks, which, paired with optimistic exploration, leads to superior performance. BRO achieves state-of-the-art results, significantly outperforming the leading model-based and model-free algorithms across 40 complex tasks from the DeepMind Control, MetaWorld, and MyoSuite benchmarks. BRO is the first model-free algorithm to achieve near-optimal policies in the notoriously challenging Dog and Humanoid tasks. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "BRO"
graphDescription: "Nauman et al. (2024). Bigger, Regularized, Optimistic — strong regularization (weight decay, layer norm) lets the critic scale to a large network, paired with optimistic exploration. SOTA across 40 DMControl/MetaWorld/MyoSuite tasks; first model-free agent to solve Dog and Humanoid. NeurIPS 2024 spotlight."
graphEdges:
  - target: scaling-rl
    label: uses
  - target: actor-critic
    label: uses
  - target: maximum-entropy-rl
    label: uses
  - target: exploration
    label: uses
  - target: dm-control
    label: evaluated on
---
