---
title: "Expected Policy Gradients for Reinforcement Learning"
authors: ["Kamil Ciosek", "Shimon Whiteson"]
year: 2018
venue: "AAAI 2018"
arxiv: "https://arxiv.org/abs/1706.05374"
abstract: "We propose expected policy gradients (EPG), which unify stochastic policy gradients (SPG) and deterministic policy gradients (DPG) for reinforcement learning. Inspired by expected sarsa, EPG integrates across the action when estimating the gradient, instead of relying only on the action in the sampled trajectory. We establish a new general policy gradient theorem, of which the stochastic and deterministic policy gradient theorems are special cases. We also prove that EPG reduces the variance of the gradient estimates without requiring deterministic policies and, for the Gaussian case, with no computational overhead. Finally, we show that it is optimal in a certain sense to explore with a Gaussian policy such that the covariance is proportional to the exponential of the scaled Hessian of the critic with respect to the actions. We present empirical results confirming that this new form of exploration substantially outperforms DPG with the Ornstein-Uhlenbeck heuristic in four challenging MuJoCo domains."
draft: false
graphLabel: "EPG"
graphDescription: "Ciosek & Whiteson (2018). Unifies stochastic and deterministic policy gradients by integrating over actions (expected SARSA style) — reduces variance without requiring deterministic policies. Generalises SPG and DPG under one theorem."
graphEdges:
  - target: policy-gradient
    label: extends
  - target: actor-critic
    label: uses
  - target: mujoco
    label: evaluated on
---
