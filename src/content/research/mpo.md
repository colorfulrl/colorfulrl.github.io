---
title: "Maximum a Posteriori Policy Optimisation"
authors: ["Abbas Abdolmaleki", "Jost Tobias Springenberg", "Yuval Tassa", "Remi Munos", "Nicolas Heess", "Martin Riedmiller"]
year: 2018
venue: "ICLR 2018"
arxiv: "https://arxiv.org/abs/1806.06920"
abstract: "We introduce a new algorithm for reinforcement learning called Maximum aposteriori Policy Optimisation (MPO) based on coordinate ascent on a relative entropy objective. We show that several existing methods can directly be related to our derivation. We develop two off-policy algorithms and demonstrate that they are competitive with the state-of-the-art in deep reinforcement learning. In particular, for continuous control, our method outperforms existing methods with respect to sample efficiency, premature convergence and robustness to hyperparameter settings while achieving similar or better final performance."
draft: false
graphLabel: "MPO"
graphDescription: "Abdolmaleki et al. (2018). Casts policy improvement as probabilistic inference (EM): an E-step reweights sampled actions by their exponentiated advantage under a KL/relative-entropy trust region (no learning rate to tune), an M-step fits the parametric policy to that reweighted action distribution via supervised regression. Off-policy, works from a replay buffer, competitive with DDPG/PPO-era baselines on continuous control with much better robustness to hyperparameters."
graphEdges:
  - target: actor-critic
    label: extends
  - target: trust-region
    label: uses
  - target: model-free-rl
    label: based on
  - target: mujoco
    label: evaluated on
  - target: dm-control
    label: evaluated on
---
