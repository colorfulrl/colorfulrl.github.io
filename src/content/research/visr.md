---
title: "Fast Task Inference with Variational Intrinsic Successor Features"
authors: ["Steven Hansen", "Will Dabney", "Andre Barreto", "Tom Van de Wiele", "David Warde-Farley", "Volodymyr Mnih"]
year: 2020
venue: "ICLR 2020"
arxiv: "https://arxiv.org/abs/1906.05030"
abstract: "It has been established that diverse behaviors spanning the controllable subspace of a Markov decision process can be trained by rewarding a policy for being distinguishable from other policies. However, one limitation of this formulation is the difficulty to generalize beyond the finite set of behaviors being explicitly learned, as may be needed in subsequent tasks. Successor features provide an appealing solution to this generalization problem, but require defining the reward function as linear in some grounded feature space. In this paper, we show that these two techniques can be combined, and that each method solves the other's primary limitation. To do so we introduce Variational Intrinsic Successor FeatuRes (VISR), a novel algorithm which learns controllable features that can be leveraged to provide enhanced generalization and fast task inference through the successor features framework. We empirically validate VISR on the full Atari suite, in a novel setup wherein the rewards are only exposed briefly after a long unsupervised phase. Achieving human-level performance on 14 games and beating all baselines, we believe VISR represents a step towards agents that rapidly learn from limited feedback. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "VISR"
graphDescription: "Hansen et al. (2020). Combines unsupervised skill learning with successor features — learns controllable features during a reward-free phase so a new task's reward can be inferred fast (linear in those features). Human-level on 14 Atari games after brief reward exposure. Bridges skill discovery and task inference. ICLR 2020."
graphEdges:
  - target: unsupervised-rl
    label: based on
  - target: skill-discovery
    label: uses
  - target: task-inference
    label: addresses
  - target: atari
    label: evaluated on
---
