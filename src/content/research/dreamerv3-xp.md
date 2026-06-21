---
title: "DreamerV3-XP: Optimizing exploration through uncertainty estimation"
authors: ["Lukas Bierling", "Davide Pasero", "Jan-Henrik Bertrand", "Kiki Van Gerwen"]
year: 2025
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2510.21418"
abstract: "We introduce DreamerV3-XP, an extension of DreamerV3 that improves exploration and learning efficiency. This includes (i) a prioritized replay buffer, scoring trajectories by return, reconstruction loss, and value error and (ii) an intrinsic reward based on disagreement over predicted environment rewards from an ensemble of world models. DreamerV3-XP is evaluated on a subset of Atari100k and DeepMind Control Visual Benchmark tasks, confirming the original DreamerV3 results and showing that our extensions lead to faster learning and lower dynamics model loss, particularly in sparse-reward settings."
draft: false
graphLabel: "DreamerV3-XP"
graphDescription: "Bierling et al. (2025). Extends DreamerV3 with two exploration upgrades: (i) a prioritized replay buffer scoring trajectories by return + reconstruction loss + value error, and (ii) an intrinsic reward from ensemble DISAGREEMENT over predicted environment rewards (multiple world models). Faster learning and lower dynamics loss, especially in sparse-reward Atari100k / DMC visual tasks."
graphEdges:
  - target: dreamerv3
    label: extends
  - target: prioritized-replay
    label: uses
  - target: disagreement
    label: intrinsic reward via
  - target: intrinsic-motivation
    label: uses
  - target: exploration
    label: improves
  - target: atari
    label: evaluated on
  - target: dm-control
    label: evaluated on
---
