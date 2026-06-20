---
title: "Constrained Policy Optimization"
authors: ["Joshua Achiam", "David Held", "Aviv Tamar", "Pieter Abbeel"]
year: 2017
venue: "ICML 2017"
arxiv: "https://arxiv.org/abs/1705.10528"
abstract: "For many applications of reinforcement learning it can be more convenient to specify both a reward function and constraints, rather than trying to design behavior through the reward function. For example, systems that physically interact with or around humans should satisfy safety constraints. Recent advances in policy search algorithms (Mnih et al., 2016, Schulman et al., 2015, Lillicrap et al., 2016, Levine et al., 2016) have enabled new capabilities in high-dimensional control, but do not consider the constrained setting. We propose Constrained Policy Optimization (CPO), the first general-purpose policy search algorithm for constrained reinforcement learning with guarantees for near-constraint satisfaction at each iteration. Our method allows us to train neural network policies for high-dimensional control while making guarantees about policy behavior all throughout training. Our guarantees are based on a new theoretical result, which is of independent interest: we prove a bound relating the expected returns of two policies to an average divergence between them. We demonstrate the effectiveness of our approach on simulated robot locomotion tasks where the agent must satisfy constraints motivated by safety."
draft: false
graphLabel: "CPO"
graphDescription: "Achiam et al. (2017). First general-purpose constrained policy search — a trust-region update (TRPO-style) with a surrogate constraint bound that guarantees near-constraint satisfaction every iteration, not just at convergence. Foundational Safe RL algorithm. ICML 2017."
graphEdges:
  - target: safe-rl
    label: based on
  - target: constrained-mdp
    label: based on
  - target: trust-region
    label: uses
  - target: policy-gradient
    label: based on
  - target: mujoco
    label: evaluated on
---
