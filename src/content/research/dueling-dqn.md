---
title: "Dueling Network Architectures for Deep Reinforcement Learning"
authors: ["Ziyu Wang", "Tom Schaul", "Matteo Hessel", "Hado van Hasselt", "Marc Lanctot", "Nando de Freitas"]
year: 2015
venue: "ICML 2016"
arxiv: "https://arxiv.org/abs/1511.06581"
abstract: "In recent years there have been many successes of using deep representations in reinforcement learning. Still, many of these applications use conventional architectures, such as convolutional networks, LSTMs, or auto-encoders. In this paper, we present a new neural network architecture for model-free reinforcement learning. Our dueling network represents two separate estimators: one for the state value function and one for the state-dependent action advantage function. The main benefit of this factoring is to generalize learning across actions without imposing any change to the underlying reinforcement learning algorithm. Our results show that this architecture leads to better policy evaluation in the presence of many similar-valued actions. Moreover, the dueling architecture enables our RL agent to outperform the state-of-the-art on the Atari 2600 domain."
draft: false
graphLabel: "Dueling DQN"
graphEdges:
  - target: dqn
    label: extends
  - target: value-based
    label: based on
  - target: atari
    label: evaluated on
graphDescription: "Wang et al. (2015). Splits the Q-network into separate V(s) and A(s,a) streams that are recombined, enabling better generalisation across actions without changing the RL algorithm."
---
