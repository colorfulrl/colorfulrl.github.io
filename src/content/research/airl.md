---
title: "Learning Robust Rewards with Adversarial Inverse Reinforcement Learning"
authors: ["Justin Fu", "Katie Luo", "Sergey Levine"]
year: 2018
venue: "ICLR 2018"
arxiv: "https://arxiv.org/abs/1710.11248"
abstract: "Reinforcement learning provides a powerful and general framework for decision making and control, but its application in practice is often hindered by the need for extensive feature and reward engineering. Deep reinforcement learning methods can remove the need for explicit engineering of policy or value features, but still require a manually specified reward function. Inverse reinforcement learning holds the promise of automatic reward acquisition, but has proven exceptionally difficult to apply to large, high-dimensional problems with unknown dynamics. In this work, we propose adverserial inverse reinforcement learning (AIRL), a practical and scalable inverse reinforcement learning algorithm based on an adversarial reward learning formulation. We demonstrate that AIRL is able to recover reward functions that are robust to changes in dynamics, enabling us to learn policies even under significant variation in the environment seen during training. Our experiments show that AIRL greatly outperforms prior methods in these transfer settings."
draft: false
graphLabel: "AIRL"
graphDescription: "Fu, Luo & Levine (2018). Adversarial IRL — recovers a reward function (not just a policy) via an adversarial formulation, with a structure that disentangles reward from dynamics so the reward stays robust under environment changes. ICLR 2018."
graphEdges:
  - target: inverse-rl
    label: based on
  - target: imitation-learning
    label: uses
  - target: maximum-entropy-rl
    label: uses
  - target: mujoco
    label: evaluated on
---
