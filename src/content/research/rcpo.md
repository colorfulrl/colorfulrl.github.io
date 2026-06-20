---
title: "Reward Constrained Policy Optimization"
authors: ["Chen Tessler", "Daniel J. Mankowitz", "Shie Mannor"]
year: 2019
venue: "ICLR 2019"
arxiv: "https://arxiv.org/abs/1805.11074"
abstract: "Solving tasks in Reinforcement Learning is no easy feat. As the goal of the agent is to maximize the accumulated reward, it often learns to exploit loopholes and misspecifications in the reward signal resulting in unwanted behavior. While constraints may solve this issue, there is no closed form solution for general constraints. In this work we present a novel multi-timescale approach for constrained policy optimization, called `Reward Constrained Policy Optimization' (RCPO), which uses an alternative penalty signal to guide the policy towards a constraint satisfying one. We prove the convergence of our approach and provide empirical evidence of its ability to train constraint satisfying policies."
draft: false
graphLabel: "RCPO"
graphDescription: "Tessler et al. (2019). Multi-timescale Lagrangian approach to Safe RL — adapts a penalty (dual) variable that converts the constraint into a reward shaping signal, guiding the policy toward feasibility. Proven convergent; model- and constraint-agnostic. ICLR 2019."
graphEdges:
  - target: safe-rl
    label: based on
  - target: constrained-mdp
    label: based on
  - target: policy-gradient
    label: based on
  - target: actor-critic
    label: uses
---
