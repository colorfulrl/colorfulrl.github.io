---
title: "DAC: The Double Actor-Critic Architecture for Learning Options"
authors: ["Shangtong Zhang", "Shimon Whiteson"]
year: 2019
venue: "NeurIPS 2019"
arxiv: "https://proceedings.neurips.cc/paper_files/paper/2019/file/4f284803bd0966cc24fa8683a34afc6e-Paper.pdf"
abstract: "We reformulate the option framework as two parallel augmented Markov decision processes (MDPs). Under this formulation, conventional policy optimization algorithms can be applied off-the-shelf to learn intra-option policies, option termination conditions, and a master policy over options. We introduce the Double Actor-Critic (DAC) architecture by implementing an actor-critic algorithm on each augmented MDP. We demonstrate that when state-value functions are used as critics, one critic can be expressed in terms of the other, and hence only one critic is necessary. We validate DAC through empirical studies on challenging robot simulation tasks and show superior performance compared to hierarchy-free approaches and prior gradient-based option learning methods in transfer learning scenarios."
draft: false
graphLabel: "DAC (Options)"
graphDescription: "Zhang & Whiteson (2019). Reformulates the options (HRL) framework as two parallel augmented MDPs — standard actor-critic can train intra-option policies, termination, and master policy simultaneously. NeurIPS 2019."
graphEdges:
  - target: actor-critic
    label: uses
  - target: hierarchical-rl
    label: uses
  - target: temporal-abstraction
    label: uses
  - target: mujoco
    label: evaluated on
---
