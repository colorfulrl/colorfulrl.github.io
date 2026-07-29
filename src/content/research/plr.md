---
title: "Prioritized Level Replay"
authors: ["Minqi Jiang", "Edward Grefenstette", "Tim Rocktäschel"]
year: 2021
venue: "ICML 2021"
arxiv: "https://arxiv.org/abs/2010.03934"
abstract: "Environments with procedurally generated content serve as important benchmarks for testing systematic generalization in deep reinforcement learning. In this setting, each level is an algorithmically created environment instance with a unique configuration of its factors of variation. Training on a prespecified subset of levels allows for testing generalization to unseen levels. What can be learned from a level depends on the current policy, yet prior work defaults to uniform sampling of training levels independently of the policy. We introduce Prioritized Level Replay (PLR), a general framework for selectively sampling the next training level by prioritizing those with higher estimated learning potential when revisited in the future. We show TD-errors effectively estimate a level's future learning potential and, when used to guide the sampling procedure, induce an emergent curriculum of increasingly difficult levels. By adapting the sampling of training levels, PLR significantly improves sample efficiency and generalization on Procgen Benchmark--matching the previous state-of-the-art in test return--and readily combines with other methods. Combined with the previous leading method, PLR raises the state-of-the-art to over 76% improvement in test return relative to standard RL baselines."
draft: false
graphLabel: "PLR"
graphDescription: "Jiang, Grefenstette & Rocktäschel (2021, ICML). Simpler UED than PAIRED: no environment generator/adversary at all — just re-weights sampling over a FIXED pool of levels, prioritizing those with high estimated 'learning potential' (approximated by TD-error), which induces an emergent difficulty curriculum for free. Large generalization gains on Procgen with much less machinery than PAIRED; the direct ancestor of ACCEL, which adds level generation/editing on top of PLR's prioritization."
graphEdges:
  - target: unsupervised-environment-design
    label: extends
  - target: generalization-rl
    label: addresses
  - target: procgen
    label: evaluated on
  - target: temporal-difference
    label: uses
---
