---
title: "ACE: An Actor Ensemble Algorithm for Continuous Control with Tree Search"
authors: ["Shangtong Zhang", "Hao Chen", "Hengshuai Yao"]
year: 2019
venue: "AAAI 2019"
arxiv: "https://arxiv.org/abs/1811.02696"
abstract: "In this paper, we propose an actor ensemble algorithm, named ACE, for continuous control with a deterministic policy in reinforcement learning. In ACE, we use actor ensemble (i.e., multiple actors) to search the global maxima of the critic. Besides the ensemble perspective, we also formulate ACE in the option framework by extending the option-critic architecture with deterministic intra-option policies, revealing a relationship between ensemble and options. Furthermore, we perform a look-ahead tree search with those actors and a learned value prediction model, resulting in a refined value estimation. We demonstrate a significant performance boost of ACE over DDPG and its variants in challenging physical robot simulators."
draft: false
graphLabel: "ACE"
graphDescription: "Zhang et al. (2019). Actor ensemble searches the global maximum of the critic — cast in the option-critic framework with deterministic intra-option policies. Adds look-ahead tree search with a learned value model for refined estimation. Outperforms DDPG variants. AAAI 2019."
graphEdges:
  - target: actor-critic
    label: uses
  - target: mcts
    label: uses
  - target: model-based-rl
    label: uses
  - target: mujoco
    label: evaluated on
---
