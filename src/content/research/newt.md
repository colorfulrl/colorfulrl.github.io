---
title: "Learning Massively Multitask World Models for Continuous Control"
authors: ["Nicklas Hansen", "Hao Su", "Xiaolong Wang"]
year: 2025
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2511.19584"
abstract: "General-purpose control demands agents that act across many tasks and embodiments, yet research on reinforcement learning (RL) for continuous control remains dominated by single-task or offline regimes, reinforcing a view that online RL does not scale. Inspired by the foundation model recipe (large-scale pretraining followed by light RL) we ask whether a single agent can be trained on hundreds of tasks with online interaction. To accelerate research in this direction, we introduce a new benchmark with 200 diverse tasks spanning many domains and embodiments, each with language instructions, demonstrations, and optionally image observations. We then present Newt, a language-conditioned multitask world model that is first pretrained on demonstrations to acquire task-aware representations and action priors, and then jointly optimized with online interaction across all tasks. Experiments show that Newt yields better multitask performance and data-efficiency than a set of strong baselines, exhibits strong open-loop control, and enables rapid adaptation to unseen tasks."
draft: false
graphLabel: "Newt"
graphDescription: "Hansen et al. (2025). Language-conditioned multitask WM pretrained on demonstrations across 200 tasks — tests whether online RL can scale foundation-model style. From the TD-MPC2 group."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: latent-dynamics
    label: uses
  - target: tdmpc2
    label: extends
  - target: dm-control
    label: evaluated on
---
