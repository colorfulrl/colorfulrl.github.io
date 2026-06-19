---
title: "Learning Abstract Options"
authors: ["Matthew Riemer", "Miao Liu", "Gerald Tesauro"]
year: 2018
venue: "NeurIPS 2018"
arxiv: "https://arxiv.org/abs/1810.11583"
abstract: "Building systems that autonomously create temporal abstractions from data is a key challenge in scaling learning and planning in reinforcement learning. One popular approach for addressing this challenge is the options framework (Sutton et al., 1999). However, only recently in (Bacon et al., 2017) was a policy gradient theorem derived for online learning of general purpose options in an end to end fashion. In this work, we extend previous work on this topic that only focuses on learning a two-level hierarchy including options and primitive actions to enable learning simultaneously at multiple resolutions in time. We achieve this by considering an arbitrarily deep hierarchy of options where high level temporally extended options are composed of lower level options with finer resolutions in time. We extend results from (Bacon et al., 2017) and derive policy gradient theorems for a deep hierarchy of options. Our proposed hierarchical option-critic architecture is capable of learning internal policies, termination conditions, and hierarchical compositions over options without the need for any intrinsic rewards or subgoals. Our empirical results in both discrete and continuous environments demonstrate the efficiency of our framework."
draft: false
graphLabel: "Hierarchical Option-Critic"
graphDescription: "Riemer et al. (2018). Extends Option-Critic to an arbitrarily deep option hierarchy — policy gradient theorems derived for multi-level composition of options. No intrinsic rewards needed; learns internal policies and termination conditions end-to-end. NeurIPS 2018."
graphEdges:
  - target: hierarchical-rl
    label: uses
  - target: temporal-abstraction
    label: uses
  - target: actor-critic
    label: uses
  - target: policy-gradient
    label: extends
---
