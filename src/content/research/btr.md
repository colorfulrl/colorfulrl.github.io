---
title: "Beyond The Rainbow: High Performance Deep Reinforcement Learning on a Desktop PC"
authors: ["Tyler Clark", "Mark Towers", "Christine Evers", "Jonathon Hare"]
year: 2025
venue: "ICLR 2025"
arxiv: "https://openreview.net/forum?id=0ydseYDKRi"
abstract: "Since the introduction of Rainbow DQN, several new algorithmic components have been proposed in value-based deep reinforcement learning, but they have not been studied together. In this paper, we introduce Beyond The Rainbow (BTR), a novel algorithm that integrates six improvements from across the reinforcement learning literature into Rainbow DQN. BTR establishes a new state-of-the-art for reinforcement learning using a desktop PC, achieving a human-normalized interquartile mean (IQM) of 7.6 on Atari-60. Beyond Atari, we demonstrate BTR's capability to handle complex 3D games, successfully training agents to play Super Mario Galaxy, Mario Kart, and Mortal Kombat. We are able to train BTR agents using a high-end desktop PC on 200 million Atari frames within 12 hours. We additionally provide a thorough ablation study of each component. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "Beyond The Rainbow"
graphDescription: "Clark et al. (2025). Integrates six post-Rainbow improvements into a single value-based agent — new SOTA for desktop-PC RL (IQM 7.6 on Atari-60, 200M frames in 12h on one machine), and the first to scale to 3D console games like Super Mario Galaxy. ICLR 2025."
graphEdges:
  - target: value-based
    label: based on
  - target: distributional-rl
    label: uses
  - target: rainbow
    label: extends
  - target: atari
    label: evaluated on
---
