---
title: "Deep Reinforcement Learning that Matters"
authors: ["Peter Henderson", "Riashat Islam", "Philip Bachman", "Joelle Pineau", "Doina Precup", "David Meger"]
year: 2017
venue: "AAAI 2018"
arxiv: "https://arxiv.org/abs/1709.06560"
abstract: "In recent years, significant progress has been made in solving challenging problems across various domains using deep reinforcement learning (RL). Reproducing existing work and accurately judging the improvements offered by novel methods is vital to sustaining this progress. Unfortunately, reproducing results for state-of-the-art deep RL methods is seldom straightforward. In particular, non-determinism in standard benchmark environments, combined with variance intrinsic to the methods, can make reported results tough to interpret. Without significance metrics and tighter standardization of experimental reporting, it is difficult to determine whether improvements over the prior state-of-the-art are meaningful. In this paper, we investigate challenges posed by reproducibility, proper experimental techniques, and reporting procedures. We illustrate the variability in reported metrics and results when comparing against common baselines and suggest guidelines to make future results in deep RL more reproducible. We aim to spur discussion about how to ensure continued progress in the field by minimizing wasted effort stemming from results that are non-reproducible and easily misinterpreted."
draft: false
graphLabel: "Deep RL that Matters"
graphDescription: "Henderson, Islam, Bachman, Pineau, Precup & Meger (2017/AAAI 2018). The classic wake-up call: shows empirically that hyperparameters, network architecture, reward scaling, random seed, and even which codebase you use can shift reported deep-RL results as much as (or more than) the algorithmic change being proposed. Predates Rliable by four years but drives the same conclusion — implementation-detail rigor is not optional. Directly explains why the DBC repo carries undocumented tricks (clamp log_std, sigmoid-rescale, smooth L1, selective detach, ensemble dynamics) that never appear in the paper text."
graphEdges:
  - target: rigorous-evaluation
    label: motivates
  - target: mujoco
    label: evaluated on
---
