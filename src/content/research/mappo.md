---
title: "The Surprising Effectiveness of PPO in Cooperative, Multi-Agent Games"
authors: ["Chao Yu", "Akash Velu", "Eugene Vinitsky", "Jiaxuan Gao", "Yu Wang", "Alexandre Bayen", "Yi Wu"]
year: 2022
venue: "NeurIPS 2022 Datasets and Benchmarks"
arxiv: "https://arxiv.org/abs/2103.01955"
abstract: "Proximal Policy Optimization (PPO) is a ubiquitous on-policy reinforcement learning algorithm but is significantly less utilized than off-policy learning algorithms in multi-agent settings. This is often due to the belief that PPO is significantly less sample efficient than off-policy methods in multi-agent systems. In this work, we carefully study the performance of PPO in cooperative multi-agent settings. We show that PPO-based multi-agent algorithms achieve surprisingly strong performance in four popular multi-agent testbeds: the particle-world environments, the StarCraft multi-agent challenge, the Google Research Football environment, and the Hanabi challenge, with minimal hyperparameter tuning and without any domain-specific algorithmic modifications or architectures. Importantly, compared to competitive off-policy methods, PPO often achieves competitive or superior results in both final returns and sample efficiency. Finally, through ablation studies, we analyze implementation and hyperparameter factors that are critical to PPO's empirical performance, and give concrete practical suggestions regarding these factors."
draft: false
graphLabel: "MAPPO"
graphDescription: "Yu et al. (2022). Shows plain PPO with a centralized value function (CTDE) is a strong cooperative-MARL baseline across SMAC, GRF, MPE, and Hanabi — competitive with off-policy methods. Provides the standard implementation recipe. NeurIPS 2022 D&B."
graphEdges:
  - target: multi-agent-rl
    label: based on
  - target: ctde
    label: uses
  - target: trust-region
    label: uses
  - target: actor-critic
    label: uses
  - target: smac
    label: evaluated on
---
