---
title: "Noisy Networks for Exploration"
authors: ["Meire Fortunato", "Mohammad Gheshlaghi Azar", "Bilal Piot", "Jacob Menick", "Ian Osband", "Alex Graves", "Vlad Mnih", "Remi Munos", "Demis Hassabis", "Olivier Pietquin", "Charles Blundell", "Shane Legg"]
year: 2017
venue: "ICLR 2018"
arxiv: "https://arxiv.org/abs/1706.10295"
abstract: "We introduce NoisyNet, a deep reinforcement learning agent with parametric noise added to its weights, and show that the induced stochasticity of the agent's policy can be used to aid efficient exploration. The parameters of the noise are learned with gradient descent along with the remaining network weights. NoisyNet is straightforward to implement and adds little computational overhead. We find that replacing the conventional exploration heuristics for A3C, DQN and dueling agents (entropy reward and ε-greedy respectively) with NoisyNet yields substantially higher scores for a wide range of Atari games, in some cases advancing the agent from sub to super-human performance."
draft: false
graphLabel: "NoisyNet"
graphDescription: "Fortunato et al. (2017). Learnable parametric noise on network weights replaces ε-greedy — exploration adapts to the value landscape. Key component of Rainbow."
graphEdges:
  - target: exploration
    label: implements
  - target: value-based
    label: extends
  - target: a3c
    label: extends
  - target: atari
    label: evaluated on
---
