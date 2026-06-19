---
title: "The Option-Critic Architecture"
authors: ["Pierre-Luc Bacon", "Jean Harb", "Doina Precup"]
year: 2016
venue: "AAAI 2017"
arxiv: "https://arxiv.org/abs/1609.05140"
abstract: "Temporal abstraction is key to scaling up learning and planning in reinforcement learning. While planning with temporally extended actions is well understood, creating such abstractions autonomously from data has remained challenging. We tackle this problem in the framework of options [Sutton, Precup & Singh, 1999; Precup, 2000]. We derive policy gradient theorems for options and propose a new option-critic architecture capable of learning both the internal policies and the termination conditions of options, in tandem with the policy over options, and without the need to provide any additional rewards or subgoals. Experimental results in both discrete and continuous environments showcase the flexibility and efficiency of the framework."
draft: false
graphLabel: "Option-Critic"
graphEdges:
  - target: hierarchical-rl
    label: based on
  - target: options
    label: extends
  - target: temporal-abstraction
    label: uses
  - target: policy-gradient
    label: extends
graphDescription: "Bacon et al. (2016). Derives policy gradient theorems for options and jointly learns intra-option policies, termination functions, and the over-options policy end-to-end."
---
