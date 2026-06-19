---
title: "FeUdal Networks for Hierarchical Reinforcement Learning"
authors: ["Alexander Sasha Vezhnevets", "Simon Osindero", "Tom Schaul", "Nicolas Heess", "Max Jaderberg", "David Silver", "Koray Kavukcuoglu"]
year: 2017
venue: "ICML 2017"
arxiv: "https://arxiv.org/abs/1703.01161"
abstract: "We introduce FeUdal Networks (FuNs): a novel architecture for hierarchical reinforcement learning. Our approach is inspired by the feudal reinforcement learning proposal of Dayan and Hinton, and gains power and efficacy by decoupling end-to-end learning across multiple levels -- allowing it to utilise different resolutions of time. Our framework employs a Manager module and a Worker module. The Manager operates at a lower temporal resolution and sets abstract goals which are conveyed to and enacted by the Worker. The Worker generates primitive actions at every tick of the environment. The decoupled structure of FuN conveys several benefits -- in addition to facilitating very long timescale credit assignment it also encourages the emergence of sub-policies associated with different goals set by the Manager. These properties allow FuN to dramatically outperform a strong baseline agent on tasks that involve long-term credit assignment or memorisation. We demonstrate the performance of our proposed system on a range of tasks from the ATARI suite and also from a 3D DeepMind Lab environment."
draft: false
graphLabel: "FeUdal Nets"
graphEdges:
  - target: hierarchical-rl
    label: based on
  - target: temporal-abstraction
    label: uses
  - target: actor-critic
    label: extends
  - target: credit-assignment
    label: addresses
  - target: atari
    label: evaluated on
graphDescription: "Vezhnevets et al. (2017). Manager sets latent goals at a slow timescale; Worker pursues them at the fast timescale — hierarchical credit assignment without hand-designed subgoals."
---
