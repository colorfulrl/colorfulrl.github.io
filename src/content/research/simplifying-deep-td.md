---
title: "Simplifying Deep Temporal Difference Learning"
authors: ["Matteo Gallici", "Mattie Fellows", "Benjamin Ellis", "Bartomeu Pou", "Ivan Masmitja", "Jakob Nicolaus Foerster", "Mario Martin"]
year: 2024
venue: "ICLR 2025"
arxiv: "https://arxiv.org/abs/2407.04811"
abstract: "Q-learning played a foundational role in the field of reinforcement learning, but modern deep methods rely on stabilizing components such as target networks and large replay buffers that are expensive and complicate parallelization. This paper shows that regularization, in particular LayerNorm, can make TD algorithms provably convergent without those components, even with off-policy data, and that vectorised online sampling stabilises training without a large replay buffer. Building on this, it proposes PQN, a parallelised, normalised version of DQN that drops both the replay buffer and the target network, remains competitive with Rainbow on Atari, and is substantially faster to train than DQN."
draft: false
graphLabel: "PQN"
graphDescription: "Gallici et al. (2024, ICLR 2025). Argues LayerNorm (and l2 regularization) keeps off-policy TD stable, so the target network and big replay buffer become unnecessary. PQN = DQN with LayerNorm, vectorised online sampling and λ-returns: no buffer, no target net, competitive with Rainbow on Atari and up to ~50x faster. A modern counterpoint to the target-network line of fixes."
graphEdges:
  - target: deadly-triad
    label: resolved by normalization
  - target: target-network
    label: removes
  - target: experience-replay
    label: removes
  - target: dqn
    label: simplifies
  - target: why-target-networks-stabilise
    label: complements
  - target: pitfalls-regularization-td
    label: counters
  - target: q-value-divergence-offline
    label: LayerNorm shared with
  - target: atari
    label: evaluated on
---
