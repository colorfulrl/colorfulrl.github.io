---
title: "Rainbow: Combining Improvements in Deep Reinforcement Learning"
authors: ["Matteo Hessel", "Joseph Modayil", "Hado van Hasselt", "Tom Schaul", "Georg Ostrovski", "Will Dabney", "Dan Horgan", "Bilal Piot", "Mohammad Azar", "David Silver"]
year: 2017
venue: "AAAI 2018"
arxiv: "https://arxiv.org/abs/1710.02298"
abstract: "The deep reinforcement learning community has made several independent improvements to the DQN algorithm. However, it is unclear which of these extensions are complementary and can be fruitfully combined. This paper examines six extensions to the DQN algorithm and empirically studies their combination. Our experiments show that the combination provides state-of-the-art performance on the Atari 2600 benchmark, both in terms of data efficiency and final performance. We also provide results from a detailed ablation study that shows the contribution of each component to overall performance."
draft: false
graphLabel: "Rainbow"
graphEdges:
  - target: dqn
    label: extends
  - target: double-dqn
    label: combines
  - target: dueling-dqn
    label: combines
  - target: prioritized-replay
    label: combines
  - target: c51
    label: combines
  - target: noisy-nets
    label: combines
  - target: distributional-rl
    label: based on
  - target: atari
    label: evaluated on
graphDescription: "Hessel et al. (2017). Integrates six DQN improvements — Double, Dueling, PER, multi-step, distributional (C51), and NoisyNets — into one agent that dominates Atari benchmarks."
---
