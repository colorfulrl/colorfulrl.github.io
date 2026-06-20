---
title: "Diversity is All You Need: Learning Skills without a Reward Function"
authors: ["Benjamin Eysenbach", "Abhishek Gupta", "Julian Ibarz", "Sergey Levine"]
year: 2019
venue: "ICLR 2019"
arxiv: "https://arxiv.org/abs/1802.06070"
abstract: "Intelligent creatures can explore their environments and learn useful skills without supervision. In this paper, we propose DIAYN ('Diversity is All You Need'), a method for learning useful skills without a reward function. Our proposed method learns skills by maximizing an information theoretic objective using a maximum entropy policy. On a variety of simulated robotic tasks, we show that this simple objective results in the unsupervised emergence of diverse skills, such as walking and jumping. In a number of reinforcement learning benchmark environments, our method is able to learn a skill that solves the benchmark task despite never receiving the true task reward. We show how pretrained skills can provide a good parameter initialization for downstream tasks, and can be composed hierarchically to solve complex, sparse reward tasks. Our results suggest that unsupervised discovery of skills can serve as an effective pretraining mechanism for overcoming challenges of exploration and data efficiency in reinforcement learning."
draft: false
graphLabel: "DIAYN"
graphDescription: "Eysenbach et al. (2019). Learns diverse skills with no reward by maximizing the mutual information between a skill code z and visited states (a discriminator must recover z from the state) under a max-entropy policy. Skills emerge (walk, jump) and seed downstream tasks. The canonical skill-discovery paper."
graphEdges:
  - target: unsupervised-rl
    label: based on
  - target: skill-discovery
    label: introduces
  - target: intrinsic-motivation
    label: uses
  - target: maximum-entropy-rl
    label: uses
  - target: mujoco
    label: evaluated on
---
