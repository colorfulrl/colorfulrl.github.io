---
title: "Trust Region Policy Optimization"
authors: ["John Schulman", "Sergey Levine", "Philipp Moritz", "Michael I. Jordan", "Pieter Abbeel"]
year: 2015
venue: "ICML 2015"
arxiv: "https://arxiv.org/abs/1502.05477"
abstract: "We describe an iterative procedure for optimizing policies, with guaranteed monotonic improvement. By making several approximations to the theoretically-justified procedure, we develop a practical algorithm, called Trust Region Policy Optimization (TRPO). This algorithm is similar to natural policy gradient methods and is effective for optimizing large nonlinear policies such as neural networks. Our experiments demonstrate its robust performance on a wide variety of tasks: learning simulated robotic swimming, hopping, and walking gaits; and playing Atari games using images of the screen as input. Despite its approximations that deviate from the theory, TRPO tends to give monotonic improvement, with little tuning of hyperparameters."
draft: false
graphLabel: "TRPO"
graphEdges:
  - target: policy-gradient
    label: extends
  - target: trust-region
    label: introduces
  - target: mujoco
    label: evaluated on
  - target: atari
    label: evaluated on
graphDescription: "Schulman et al. (2015). Constrains each policy update to a trust region (KL-divergence bound) to guarantee monotonic improvement — the theoretical precursor to PPO."
---
