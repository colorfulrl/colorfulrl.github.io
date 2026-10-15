---
title: "Why Target Networks Stabilise Temporal Difference Methods"
authors: ["Mattie Fellows", "Matthew J. A. Smith", "Shimon Whiteson"]
year: 2023
venue: "ICML 2023"
arxiv: "https://arxiv.org/abs/2302.12537"
abstract: "Integral to recent successes in deep reinforcement learning has been a class of temporal difference methods that use infrequently updated target values for policy evaluation in a Markov Decision Process. Yet a complete theoretical explanation for the effectiveness of target networks remains elusive. This work provides an analysis of this popular class of algorithms by introducing a framework called partially fitted policy evaluation, which models target networks and links fitted methods to semigradient TD. The analysis shows that target networks mitigate the effects of poor conditioning in the Jacobian of the TD update, and that under mild regularity conditions and a well-tuned update frequency, convergence can be guaranteed even with off-policy sampling and nonlinear function approximation."
draft: false
graphLabel: "Why Target Nets Work"
graphDescription: "Fellows, Smith & Whiteson (2023, ICML). Models a target network as partially fitted policy evaluation, interpolating between fitted value iteration and semi-gradient TD. Shows target networks mitigate poor conditioning of the TD Jacobian, and that under mild regularity conditions and a well-tuned update frequency TD converges even off-policy with nonlinear function approximation."
graphEdges:
  - target: target-network
    label: explains
  - target: semi-gradient-td
    label: relates to
  - target: deadly-triad
    label: mitigates
  - target: breaking-deadly-triad-target-network
    label: extends to nonlinear
---
