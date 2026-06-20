---
title: "Self-Supervised Exploration via Disagreement"
authors: ["Deepak Pathak", "Dhiraj Gandhi", "Abhinav Gupta"]
year: 2019
venue: "ICML 2019"
arxiv: "https://arxiv.org/abs/1906.04161"
abstract: "Efficient exploration is a long-standing problem in sensorimotor learning. Major advances have been demonstrated in noise-free, non-stochastic domains such as video games and simulation. However, most of these formulations either get stuck in environments with stochastic dynamics or are too inefficient to be scalable to real robotics setups. In this paper, we propose a formulation for exploration inspired by the work in active learning literature. Specifically, we train an ensemble of dynamics models and incentivize the agent to explore such that the disagreement of those ensembles is maximized. This allows the agent to learn skills by exploring in a self-supervised manner without any external reward. Notably, we further leverage the disagreement objective to optimize the agent's policy in a differentiable manner, without using reinforcement learning, which results in a sample-efficient exploration. We demonstrate the efficacy of this formulation across a variety of benchmark environments including stochastic-Atari, Mujoco and Unity. Finally, we implement our differentiable exploration on a real robot which learns to interact with objects completely from scratch."
draft: false
graphLabel: "Disagreement"
graphDescription: "Pathak et al. (2019). Intrinsic reward = variance (disagreement) of an ensemble of forward dynamics models — high where the model is uncertain, and crucially zero on irreducible stochastic noise, fixing curiosity's noisy-TV problem. Differentiable, so the policy can be optimized directly. ICML 2019."
graphEdges:
  - target: exploration
    label: based on
  - target: intrinsic-motivation
    label: implements
  - target: curiosity-driven
    label: uses
  - target: epistemic-uncertainty
    label: uses for exploration
  - target: mujoco
    label: evaluated on
---
