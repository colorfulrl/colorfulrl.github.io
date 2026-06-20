---
title: "Reinforcement Learning with Prototypical Representations"
authors: ["Denis Yarats", "Rob Fergus", "Alessandro Lazaric", "Lerrel Pinto"]
year: 2021
venue: "ICML 2021"
arxiv: "https://arxiv.org/abs/2102.11271"
abstract: "Learning effective representations in image-based environments is crucial for sample efficient Reinforcement Learning (RL). Unfortunately, in RL, representation learning is confounded with the exploratory experience of the agent -- learning a useful representation requires diverse data, while effective exploration is only possible with coherent representations. Furthermore, we would like to learn representations that not only generalize across tasks but also accelerate downstream exploration for efficient task-specific training. To address these challenges we propose Proto-RL, a self-supervised framework that ties representation learning with exploration through prototypical representations. These prototypes simultaneously serve as a summarization of the exploratory experience of an agent as well as a basis for representing observations. We pre-train these task-agnostic representations and prototypes on environments without downstream task information. This enables state-of-the-art downstream policy learning on a set of difficult continuous control tasks."
draft: false
graphLabel: "Proto-RL"
graphDescription: "Yarats et al. (2021). Ties representation learning to exploration via learned prototypes — prototypes both summarize exploratory experience and serve as the observation basis, and entropy over them drives reward-free pretraining. SOTA downstream control. ICML 2021."
graphEdges:
  - target: unsupervised-rl
    label: based on
  - target: exploration
    label: uses
  - target: intrinsic-motivation
    label: implements
  - target: state-entropy
    label: uses
  - target: dm-control
    label: evaluated on
---
