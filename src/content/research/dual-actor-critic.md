---
title: "On the Theory of Risk-Aware Agents: Bridging Actor-Critic and Economics"
authors: ["Michal Nauman", "Marek Cygan"]
year: 2024
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2310.19527"
abstract: "Risk-aware Reinforcement Learning (RL) algorithms like SAC and TD3 were shown empirically to outperform their risk-neutral counterparts in a variety of continuous-action tasks. However, the theoretical basis for the pessimistic objectives these algorithms employ remains unclear. In this work, we study the under-explored theoretical relationship between risk-aware RL and expected utility theory from economics. We show that the risk-aware and risk-neutral RL objectives can both be interpreted through exponential utility functions, and that risk-aware policies effectively maximize value certainty equivalent. Building on this analysis, we propose Dual Actor-Critic (DAC), a model-free algorithm that uses two distinct actor networks: a pessimistic actor used for temporal-difference learning and an optimistic actor used for exploration. Experiments across locomotion and manipulation tasks show that DAC achieves improved sample efficiency and competitive performance with model-based methods, while requiring substantially fewer computational resources. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "Dual Actor-Critic (risk-aware)"
graphDescription: "Nauman & Cygan (2024). Links risk-aware RL to expected-utility theory (risk-aware policies maximize value certainty equivalent), then proposes Dual Actor-Critic: a pessimistic actor for TD learning + an optimistic actor for exploration. Sample-efficient, rivals model-based methods cheaply. Distinct from the options-DAC."
graphEdges:
  - target: actor-critic
    label: uses
  - target: maximum-entropy-rl
    label: uses
  - target: exploration
    label: uses
  - target: mujoco
    label: evaluated on
---
