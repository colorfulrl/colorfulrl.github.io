---
title: "Value-Decomposition Networks For Cooperative Multi-Agent Learning"
authors: ["Peter Sunehag", "Guy Lever", "Audrunas Gruslys", "Wojciech Marian Czarnecki", "Vinicius Zambaldi", "Max Jaderberg", "Marc Lanctot", "Nicolas Sonnerat", "Joel Z. Leibo", "Karl Tuyls", "Thore Graepel"]
year: 2017
venue: "AAMAS 2018"
arxiv: "https://arxiv.org/abs/1706.05296"
abstract: "We study the problem of cooperative multi-agent reinforcement learning with a single joint reward signal. This class of learning problems is difficult because of the often large combined action and observation spaces. In the fully centralized and decentralized approaches, we find the problem of spurious rewards and a phenomenon we call the 'lazy agent' problem, which arises due to partial observability. We address these problems by training individual agents with a novel value decomposition network architecture, which learns to decompose the team value function into agent-wise value functions. We perform an experimental evaluation across a range of partially-observable multi-agent domains and show that learning such value-decompositions leads to superior results, in particular when combined with weight sharing, role information and information channels."
draft: false
graphLabel: "VDN"
graphDescription: "Sunehag et al. (2017). Decomposes the team value function as a plain sum of per-agent value functions — the original value-decomposition method, fixing the 'lazy agent' problem under partial observability. QMIX generalizes its additive mixing to monotonic."
graphEdges:
  - target: multi-agent-rl
    label: based on
  - target: ctde
    label: uses
  - target: value-decomposition
    label: introduces
  - target: value-based
    label: based on
---
