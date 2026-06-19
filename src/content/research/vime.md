---
title: "VIME: Variational Information Maximizing Exploration"
authors: ["Rein Houthooft", "Xi Chen", "Yan Duan", "John Schulman", "Filip De Turck", "Pieter Abbeel"]
year: 2016
venue: "NeurIPS 2016"
arxiv: "https://arxiv.org/abs/1605.09674"
abstract: "Scalable and effective exploration remains a key challenge in reinforcement learning (RL). While there are methods with optimality guarantees in the setting of discrete state and action spaces, these methods cannot be applied in high-dimensional deep RL scenarios. As such, most contemporary RL relies on simple heuristics such as epsilon-greedy exploration or adding Gaussian noise to the controls. This paper introduces Variational Information Maximizing Exploration (VIME), an exploration strategy based on maximization of information gain about the agent's belief of environment dynamics. We propose a practical implementation, using variational inference in Bayesian neural networks which efficiently handles continuous state and action spaces. VIME modifies the MDP reward function, and can be applied with several different underlying RL algorithms. We demonstrate that VIME achieves significantly better performance compared to heuristic exploration methods across a variety of continuous control tasks and algorithms, including tasks with very sparse rewards."
draft: false
graphLabel: "VIME"
graphDescription: "Houthooft et al. (2016). Intrinsic reward = information gain about BNN dynamics model parameters (epistemic uncertainty). Enables curiosity-driven exploration in continuous control without sparse reward."
graphEdges:
  - target: exploration
    label: based on
  - target: intrinsic-motivation
    label: implements
  - target: model-based-rl
    label: uses
  - target: epistemic-uncertainty
    label: uses for exploration
  - target: mujoco
    label: evaluated on
---
