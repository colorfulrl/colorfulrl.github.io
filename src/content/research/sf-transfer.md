---
title: "Successor Features for Transfer in Reinforcement Learning"
authors: ["André Barreto", "Will Dabney", "Rémi Munos", "Jonathan J. Hunt", "Tom Schaul", "Hado van Hasselt", "David Silver"]
year: 2017
venue: "NeurIPS 2017"
arxiv: "https://arxiv.org/abs/1606.05312"
abstract: "Transfer in reinforcement learning refers to the notion that generalization should occur not only within a task but also across tasks. We propose a transfer framework for the scenario where the reward function changes between tasks but the environment's dynamics remain the same. Our approach rests on two key ideas: 'successor features', a value function representation that decouples the dynamics of the environment from the rewards, and 'generalized policy improvement', a generalization of dynamic programming's policy improvement operation that considers a set of policies rather than a single one. Put together, the two ideas lead to an approach that integrates seamlessly within the reinforcement learning framework and allows the free exchange of information across tasks. The proposed method also provides performance guarantees for the transferred policy even before any learning has taken place. We derive two theorems that set our approach in firm theoretical ground and present experiments that show that it successfully promotes transfer in practice, significantly outperforming alternative methods in a sequence of navigation tasks and in the control of a simulated robotic arm."
draft: false
graphLabel: "Successor Features"
graphDescription: "Barreto et al. (2017). Introduces successor features (value representation decoupling dynamics from reward, Q = ψ·w) + generalized policy improvement (GPI over a set of policies). Enables instant value transfer when only the reward changes, with guarantees before any learning. The foundational SF&GPI paper. NeurIPS 2017."
graphEdges:
  - target: successor-features
    label: introduces
  - target: value-based
    label: based on
  - target: temporal-difference
    label: uses
---
