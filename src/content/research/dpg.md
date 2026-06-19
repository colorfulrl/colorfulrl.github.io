---
title: "Deterministic Policy Gradient Algorithms"
authors: ["David Silver", "Guy Lever", "Nicolas Heess", "Thomas Degris", "Daan Wierstra", "Martin Riedmiller"]
year: 2014
venue: "ICML 2014"
arxiv: "https://proceedings.mlr.press/v32/silver14.html"
abstract: "In this paper we consider deterministic policy gradient algorithms for reinforcement learning with continuous actions. The deterministic policy gradient has a particularly appealing form: it is the expected gradient of the action-value function. This simple form means that the deterministic policy gradient can be estimated much more efficiently than the usual stochastic policy gradient. To ensure adequate exploration, we introduce an off-policy actor-critic algorithm that learns a deterministic target policy from an exploratory behaviour policy. Deterministic policy gradient algorithms outperformed their stochastic counterparts in several benchmark problems, particularly in high-dimensional action spaces."
draft: false
graphLabel: "DPG"
graphDescription: "Silver et al. (2014). Proves deterministic policy gradient theorem: ∇J(μ) = E[∇_a Q^μ(s,a) · ∇_θ μ_θ(s)]. Foundational for DDPG and TD3."
graphEdges:
  - target: policy-gradient
    label: extends
  - target: actor-critic
    label: uses
  - target: model-free-rl
    label: based on
---
