---
title: "Proximal Policy Optimization Algorithms"
authors: ["John Schulman", "Filip Wolski", "Prafulla Dhariwal", "Alec Radford", "Oleg Klimov"]
year: 2017
venue: "arXiv"
arxiv: "https://arxiv.org/abs/1707.06347"
abstract: "PPO proposes a clipped surrogate objective that prevents destructively large policy updates while remaining simple to implement. It achieves strong performance across continuous and discrete control tasks and has become the default algorithm for RLHF."
draft: false
graphLabel: "PPO"
graphDescription: "Schulman et al. (2017). Clipped surrogate objective for stable policy updates. Simple, reliable, now the backbone of most RLHF systems."
graphEdges:
  - target: policy-gradient
    label: based on
  - target: trust-region
    label: approximates
  - target: trpo
    label: simplifies
  - target: actor-critic
    label: uses
  - target: atari
    label: evaluated on
  - target: mujoco
    label: evaluated on
---
