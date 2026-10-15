---
title: "Breaking the Deadly Triad with a Target Network"
authors: ["Shangtong Zhang", "Hengshuai Yao", "Shimon Whiteson"]
year: 2021
venue: "ICML 2021"
arxiv: "https://arxiv.org/abs/2101.08862"
abstract: "The deadly triad refers to the instability of a reinforcement learning algorithm when it employs off-policy learning, function approximation and bootstrapping simultaneously. The paper investigates the target network as a tool to break the triad, motivated by its empirical success in DQN. It proposes and analyzes a novel target-network update rule that augments the commonly used Polyak-averaging update with two projections, then applies the target network and ridge regularization to several divergent algorithms and proves their convergence to regularized TD fixed points. The results cover linear function approximation in policy evaluation and control, discounted and average-reward, and give the first convergent linear Q-learning algorithms under nonrestrictive and changing behavior policies without bi-level optimization."
draft: false
graphLabel: "Target Net Breaks Triad"
graphDescription: "Zhang, Yao & Whiteson (2021, ICML). Gives the first provable account of how a target network plus ridge regularization restores convergence under off-policy + bootstrapping + linear function approximation. A Polyak target update with two projections makes TD and Q-learning converge to regularized TD fixed points — turning DQN's folk trick into theory."
graphEdges:
  - target: target-network
    label: analyzes
  - target: deadly-triad
    label: breaks
  - target: semi-gradient-td
    label: stabilizes
  - target: deep-rl-deadly-triad
    label: theory behind
  - target: dqn
    label: explains
---
