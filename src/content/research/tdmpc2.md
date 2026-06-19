---
title: "TD-MPC2: Scalable, Robust World Models for Continuous Control"
authors: ["Nicklas Hansen", "Hao Su", "Xiaolong Wang"]
year: 2023
venue: "ICLR 2024"
arxiv: "https://arxiv.org/abs/2310.16828"
abstract: "TD-MPC is a model-based reinforcement learning (RL) algorithm that performs local trajectory optimization in the latent space of a learned implicit (decoder-free) world model. In this work, we present TD-MPC2: a series of improvements upon the TD-MPC algorithm. We demonstrate that TD-MPC2 improves significantly over baselines across 104 online RL tasks spanning 4 diverse task domains, achieving consistently strong results with a single set of hyperparameters. We further show that agent capabilities increase with model and data size, and successfully train a single 317M parameter agent to perform 80 tasks across multiple task domains, embodiments, and action spaces. We conclude with an account of lessons, opportunities, and risks associated with large TD-MPC2 agents."
draft: false
graphLabel: "TD-MPC2"
graphEdges:
  - target: model-based-rl
    label: based on
  - target: trajectory-optimization
    label: uses
  - target: latent-dynamics
    label: uses
  - target: mujoco
    label: evaluated on
  - target: dm-control
    label: evaluated on
  - target: tdmpc
    label: extends
graphDescription: "Hansen et al. (2023). Implicit decoder-free world model + local trajectory optimization; scales to a 317M single generalist agent across 80 tasks and 4 domains."
---
