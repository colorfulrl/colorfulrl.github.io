---
title: "Dream-MPC: Gradient-Based Model Predictive Control with Latent Imagination"
authors: ["J. Spieler", "Sven Behnke"]
year: 2026
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2605.04568"
abstract: "State-of-the-art model-based Reinforcement Learning (RL) approaches either use gradient-free, population-based methods for planning, learned policy networks, or a combination of policy networks and planning. Hybrid approaches that combine Model Predictive Control (MPC) with a learned model and a policy prior to leverage the advantages of both paradigms have shown promising results. However, these approaches typically rely on gradient-free optimization methods, which can be computationally expensive for high-dimensional control tasks. While gradient-based methods are a promising alternative, recent works have empirically shown that gradient-based methods often perform worse than their gradient-free counterparts. We propose Dream-MPC, a novel approach that generates few candidate trajectories from a rolled-out policy and optimizes each trajectory by gradient ascent using a learned world model, uncertainty regularization and amortization of optimization iterations over time by reusing previously optimized actions. Our results on 24 continuous control tasks show that Dream-MPC can significantly improve the performance of the underlying policy and can outperform gradient-free MPC and state-of-the-art baselines."
draft: false
graphLabel: "Dream-MPC"
graphDescription: "Spieler & Behnke (2026). Gradient-based MPC in latent imagination — policy generates candidate trajectories, gradient ascent refines each via WM. Uncertainty regularization + action amortization. 24 continuous control tasks."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: trajectory-optimization
    label: uses
  - target: latent-dynamics
    label: uses
  - target: dm-control
    label: evaluated on
---
