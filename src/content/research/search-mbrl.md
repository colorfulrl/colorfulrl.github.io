---
title: "The Surprising Difficulty of Search in Model-Based Reinforcement Learning"
authors: ["Wei-Di Chang", "Mikael Henaff", "Brandon Amos", "Gregory Dudek", "Scott Fujimoto"]
year: 2026
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2601.21306"
abstract: "This paper investigates search in model-based reinforcement learning (RL). Conventional wisdom holds that long-term predictions and compounding errors are the primary obstacles for model-based RL. We challenge this view, showing that search is not a drop-in replacement for a learned policy. Surprisingly, we find that search can harm performance even when the model is highly accurate. Instead, we show that mitigating overestimation bias matters more than improving model or value function accuracy. Building on this insight, we identify that taking the minimum over an ensemble of value functions effectively addresses this bias and enables effective search, achieving state-of-the-art performance across multiple popular benchmark domains."
draft: false
graphLabel: "Search in MBRL"
graphDescription: "Chang, Henaff, Amos, Fujimoto et al. (2026). Counterintuitive finding: search hurts even with accurate models; overestimation bias is the real bottleneck. Fix: ensemble-minimum value functions. Challenges conventional MBRL wisdom."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: trajectory-optimization
    label: uses
  - target: epistemic-uncertainty
    label: uses
  - target: mujoco
    label: evaluated on
  - target: dm-control
    label: evaluated on
---
