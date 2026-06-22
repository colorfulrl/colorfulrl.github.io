---
title: "Bigger, Better, Faster: Human-level Atari with human-level efficiency"
authors: ["Max Schwarzer", "Johan Obando-Ceron", "Aaron Courville", "Marc Bellemare", "Rishabh Agarwal", "Pablo Samuel Castro"]
year: 2023
venue: "ICML 2023"
arxiv: "https://arxiv.org/abs/2305.19452"
abstract: "We introduce a value-based RL agent, which we call BBF, that achieves super-human performance in the Atari 100K benchmark. BBF relies on scaling the neural networks used for value estimation, as well as a number of other design choices that enable this scaling in a sample-efficient manner. We conduct extensive analyses of these design choices and provide insights for future work. We end with a discussion about updating the goalposts for sample-efficient RL research on the Atari Learning Environment. We make our code and data publicly available. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "BBF"
graphDescription: "Schwarzer et al. (2023). First value-based agent to reach super-human Atari 100k — built on scaling the value network (with periodic resets, high replay ratio, shrinking update horizon, and self-prediction) in a sample-efficient way. Sets a new bar for data-efficient RL. ICML 2023."
graphEdges:
  - target: value-based
    label: based on
  - target: scaling-rl
    label: uses
  - target: experience-replay
    label: uses
  - target: plasticity
    label: combats via resets
  - target: atari
    label: evaluated on
---
