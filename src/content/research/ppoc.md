---
title: "Learnings Options End-to-End for Continuous Action Tasks"
authors: ["Martin Klissarov", "Pierre-Luc Bacon", "Jean Harb", "Doina Precup"]
year: 2017
venue: "NeurIPS 2017 Hierarchical RL Workshop"
arxiv: "https://arxiv.org/abs/1712.00004"
abstract: "We present new results on learning temporally extended actions for continuous tasks, using the options framework (Sutton et al. [1999b], Precup [2000]). In order to achieve this goal we work with the option-critic architecture (Bacon et al. [2017]) using a deliberation cost and train it with proximal policy optimization (Schulman et al. [2017]) instead of vanilla policy gradient. Results on Mujoco domains are promising, but lead to interesting questions about when a given option should be used, an issue directly connected to the use of initiation sets."
draft: false
graphLabel: "PPOC"
graphDescription: "Klissarov et al. (2017). Proximal Policy Option-Critic — trains the option-critic architecture with PPO (instead of vanilla policy gradient) plus a deliberation cost, enabling end-to-end option learning for continuous control. NeurIPS 2017 HRL workshop."
graphEdges:
  - target: hierarchical-rl
    label: uses
  - target: temporal-abstraction
    label: uses
  - target: actor-critic
    label: uses
  - target: trust-region
    label: uses
  - target: mujoco
    label: evaluated on
---
