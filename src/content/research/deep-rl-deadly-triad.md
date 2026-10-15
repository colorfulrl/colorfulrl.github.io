---
title: "Deep Reinforcement Learning and the Deadly Triad"
authors: ["Hado van Hasselt", "Yotam Doron", "Florian Strub", "Matteo Hessel", "Nicolas Sonnerat", "Joseph Modayil"]
year: 2018
venue: "arXiv 2018"
arxiv: "https://arxiv.org/abs/1812.02648"
abstract: "The paper builds on Sutton and Barto's account of a deadly triad: when function approximation, bootstrapping and off-policy learning are combined, learning can diverge and value estimates become unbounded. Several algorithms nevertheless combine all three properties successfully, which suggests a gap in our understanding. The authors study the triad empirically in deep Q-networks trained with experience replay, examining how the components of that system contribute to the emergence of the triad and to agent performance."
draft: false
graphLabel: "Deadly Triad (Deep RL)"
graphDescription: "van Hasselt et al. (2018). An empirical study of when the deadly triad actually appears in deep Q-networks trained with experience replay: deep agents combine all three ingredients and often work, so the paper dissects which components of the DQN system (replay, target networks, bootstrapping horizon, network size) contribute to divergence and to performance. Frames the triad as something to measure, not just a theoretical cliff."
graphEdges:
  - target: deadly-triad
    label: studies empirically
  - target: dqn
    label: analyzes
  - target: double-dqn
    label: relates to
  - target: experience-replay
    label: examines
  - target: target-network
    label: examines
  - target: sutton-barto
    label: builds on
---
