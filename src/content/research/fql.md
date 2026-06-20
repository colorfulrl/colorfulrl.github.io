---
title: "Flow Q-Learning"
authors: ["Seohong Park", "Qiyang Li", "Sergey Levine"]
year: 2025
venue: "ICML 2025"
arxiv: "https://arxiv.org/abs/2502.02538"
abstract: "We present flow Q-learning (FQL), a simple and performant offline reinforcement learning (RL) method that leverages an expressive flow-matching policy to model arbitrarily complex action distributions in data. Training a flow policy with RL is a tricky problem, due to the iterative nature of the action generation process. We address this challenge by training an expressive one-step policy with RL, rather than directly guiding an iterative flow policy to maximize values. This way, we can completely avoid unstable recursive backpropagation, eliminate costly iterative action generation at test time, yet still mostly maintain expressivity. We experimentally show that FQL leads to strong performance across 73 challenging state- and pixel-based OGBench and D4RL tasks in offline RL and offline-to-online RL."
draft: false
graphLabel: "FQL"
graphDescription: "Park, Li & Levine (2025). Flow Q-learning — trains the flow policy with behavior cloning only, and extracts a separate one-step policy that maximizes Q while distilling from the flow (a Wasserstein behavioral regularizer). Sidesteps backprop-through-time and iterative test-time sampling entirely. The direct predecessor of RQL. SOTA across 73 OGBench + D4RL tasks. ICML 2025."
graphEdges:
  - target: offline-rl
    label: based on
  - target: flow-matching
    label: uses
  - target: value-based
    label: uses
  - target: actor-critic
    label: uses
  - target: behavior-cloning
    label: uses
  - target: diffusion-ql
    label: related to
  - target: ogbench
    label: evaluated on
  - target: d4rl
    label: evaluated on
---
