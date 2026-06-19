---
title: "Efficient Parallel Methods for Deep Reinforcement Learning"
authors: ["Alfredo V. Clemente", "Humberto N. Castejón", "Arjun Chandra"]
year: 2017
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/1705.04862"
abstract: "We propose a novel framework for efficient parallelization of deep reinforcement learning algorithms, enabling these algorithms to learn from multiple actors on a single machine. The framework is algorithm agnostic and can be applied to on-policy, off-policy, value based and policy gradient based algorithms. Given its inherent parallelism, the framework can be efficiently implemented on a GPU, allowing the usage of powerful models while significantly reducing training time. We demonstrate the effectiveness of our framework by implementing an advantage actor-critic algorithm on a GPU, using on-policy experiences and employing synchronous updates. Our algorithm achieves state-of-the-art performance on the Atari domain after only a few hours of training. Our framework thus opens the door for much faster experimentation on demanding problem domains."
draft: false
graphLabel: "PAAC"
graphDescription: "Clemente et al. (2017). Parallel Advantage Actor-Critic — synchronous multi-actor A2C on a single GPU. Algorithm-agnostic parallelism; achieves A3C-level Atari performance in hours rather than days."
graphEdges:
  - target: policy-gradient
    label: based on
  - target: actor-critic
    label: uses
  - target: atari
    label: evaluated on
---
