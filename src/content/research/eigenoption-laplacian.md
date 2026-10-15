---
title: "A Laplacian Framework for Option Discovery in Reinforcement Learning"
authors: ["Marlos C. Machado", "Marc G. Bellemare", "Michael Bowling"]
year: 2017
venue: "ICML 2017"
arxiv: "https://arxiv.org/abs/1703.00956"
abstract: "Representation learning and option discovery are two of the biggest challenges in reinforcement learning. Proto-value functions (PVFs) are a well-known approach for representation learning in MDPs. This paper shows that PVFs also implicitly define options by introducing eigenpurposes, intrinsic reward functions derived from the learned representations. The options discovered follow the principal directions of the state space and are useful across tasks because they are learned without environment rewards. Different options act at different time scales, which helps exploration. The approach is evaluated in tabular domains and on Atari 2600 games."
draft: false
graphLabel: "Eigenoption"
graphDescription: "Machado, Bellemare & Bowling (2017, ICML). Takes the eigenvectors of the state-graph Laplacian (proto-value functions), turns each into an intrinsic reward (an 'eigenpurpose'), and learns the option that maximizes it — an eigenoption. Reward-free, task-agnostic options that follow the principal directions of the state space and move agents across bottlenecks at several time scales. Defined in the tabular case with a known linear representation."
graphEdges:
  - target: options-framework
    label: discovers options for
  - target: proto-value-functions
    label: built on
  - target: intrinsic-motivation
    label: eigenpurpose reward
  - target: options
    label: extends
  - target: atari
    label: evaluated on
---
