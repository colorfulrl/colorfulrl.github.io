---
title: "Behavior From the Void: Unsupervised Active Pre-Training"
authors: ["Hao Liu", "Pieter Abbeel"]
year: 2021
venue: "NeurIPS 2021"
arxiv: "https://arxiv.org/abs/2103.04551"
abstract: "We introduce a new unsupervised pre-training method for reinforcement learning called APT, which stands for Active Pre-Training. APT learns behaviors and representations by actively searching for novel states in reward-free environments. The key novel idea is to explore the environment by maximizing a non-parametric entropy computed in an abstract representation space, which avoids challenging density modeling and consequently allows our approach to scale much better in environments that have high-dimensional observations (e.g., image observations). We empirically evaluate APT by exposing task-specific reward after a long unsupervised pre-training phase. In Atari games, APT achieves human-level performance on 12 games and obtains highly competitive performance compared to canonical fully supervised RL algorithms. On DMControl suite, APT beats all baselines in terms of asymptotic performance and data efficiency and dramatically improves performance on tasks that are extremely difficult to train from scratch."
draft: false
graphLabel: "APT"
graphDescription: "Liu & Abbeel (2021). Active Pre-Training — reward-free pretraining that maximizes a non-parametric (particle-based) entropy in representation space, scaling to pixel observations without density modeling. Human-level on 12 Atari games after unsupervised pretraining. NeurIPS 2021."
graphEdges:
  - target: unsupervised-rl
    label: based on
  - target: exploration
    label: uses
  - target: intrinsic-motivation
    label: uses
  - target: state-entropy
    label: uses
  - target: urlb
    label: evaluated on
  - target: atari
    label: evaluated on
  - target: dm-control
    label: evaluated on
---
