---
title: "Metrics for Finite Markov Decision Processes"
authors: ["Norman Ferns", "Prakash Panangaden", "Doina Precup"]
year: 2004
venue: "UAI 2004"
arxiv: "https://arxiv.org/abs/1207.4114"
abstract: "We present metrics for measuring the similarity of states in a finite Markov decision process (MDP). The formulation of our metrics is based on the notion of bisimulation for MDPs, with an aim towards solving discounted infinite horizon reinforcement learning tasks. Such metrics can be used to aggregate states, as well as to better structure other value function approximators (e.g., memory-based or nearest-neighbor approximators). We provide bounds that relate our metric distances to the optimal values of states in the given MDP."
draft: false
graphLabel: "Bisimulation Metric (Finite)"
graphDescription: "Ferns, Panangaden & Precup (2004, UAI). Relaxes Givan-Dean-Greig's brittle binary bisimulation relation into a continuous pseudometric: state distance = |reward difference| + gamma * (Wasserstein distance between next-state distributions). Two states can now be 'almost bisimilar' rather than only exactly-or-not, with distance provably bounding the difference in optimal value — the key theoretical object every later deep bisimulation method (DBC, MICo, SimSR) tries to approximate with a neural network."
graphEdges:
  - target: bisimulation-metric
    label: introduces
  - target: mdp-model-minimization
    label: extends
---
