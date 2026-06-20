---
title: "An Online Learning Approach to Model Predictive Control"
authors: ["Nolan Wagener", "Ching-An Cheng", "Jacob Sacks", "Byron Boots"]
year: 2019
venue: "RSS 2019"
arxiv: "https://arxiv.org/abs/1902.08967"
abstract: "We provide a new theoretical perspective on online model predictive control (MPC) by relating it to online learning. We show that an MPC algorithm can be viewed as an instance of dynamic mirror descent (DMD), an online learning algorithm designed for non-stationary setups. By making this connection, we provide a unifying framework, DMD-MPC, that subsumes a wide class of MPC algorithms, including popular methods such as model predictive path integral control (MPPI) and the cross-entropy method (CEM). We further use this framework to motivate and design new MPC algorithms by choosing different loss functions and update rules, and validate our approach in simulation and on a real-world aggressive driving task. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "DMD-MPC"
graphDescription: "Wagener et al. (2019). Casts online MPC as dynamic mirror descent (online learning) — a unifying framework, DMD-MPC, that subsumes MPPI and CEM as special cases and lets new planners be designed by choosing the loss and update. Validated on real aggressive driving. RSS 2019."
graphEdges:
  - target: trajectory-optimization
    label: based on
  - target: model-based-rl
    label: uses
  - target: cem
    label: generalizes
---
