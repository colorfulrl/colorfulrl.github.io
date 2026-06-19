---
title: "Off-Policy Actor-Critic"
authors: ["Thomas Degris", "Martha White", "Richard S. Sutton"]
year: 2012
venue: "ICML 2012"
arxiv: "https://icml.cc/2012/papers/268.pdf"
abstract: "This paper presents the first actor-critic algorithm for o↵-policy reinforcement learning.Our algorithm is online and incremental, and its per-time-step complexity scales linearly with the number of learned weights. Previous work on actor-critic algorithms is limited to the on-policy setting and does not take advantage of the recent advances in off-policy gradient temporal-di↵erence learning. Off-policy techniques, such as Greedy-GQ, enable a target policy to be learned while following and obtaining data from another (behavior) policy. For many problems, how ever, actor-critic methods are more practical than action value methods (like Greedy-GQ) because they explicitly represent the policy; consequently, the policy can be stochastic and utilize a large action space. In this paper, we illustrate how to practically combine the generality and learning potential of off-policy learning with the flexibility in action selection given by actor-critic methods. We derive an incremental, linear time and space complexity algorithm that includes eligibility traces, prove convergence under assumptions similar to previous o↵-policy algorithms, and empirically show better or comparable performance to existing algorithms on standard reinforcement-learning benchmark problems."
draft: false
graphLabel: "Off-Policy AC"
graphDescription: "Degris, White & Sutton (2012). First actor-critic algorithm for off-policy learning: importance sampling + eligibility traces + excursion objective. Precursor to DDPG and SAC."
graphEdges:
  - target: actor-critic
    label: extends
  - target: policy-gradient
    label: extends
  - target: temporal-difference
    label: uses
  - target: experience-replay
    label: related to
---
