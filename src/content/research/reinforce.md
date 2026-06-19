---
title: "Simple Statistical Gradient-Following Algorithms for Connectionist Reinforcement Learning"
authors: ["Ronald J. Williams"]
year: 1992
venue: "Machine Learning 8(3-4)"
arxiv: "https://link.springer.com/article/10.1007/BF00992696"
abstract: "This article presents a general class of associative reinforcement learning algorithms for connectionist networks containing stochastic units. These algorithms, called REINFORCE algorithms, are shown to be related to gradient ascent in the space of a performance measure. An empirical comparison of several versions of REINFORCE is also presented, with some of these algorithms outperforming alternatives based on backpropagation through time. Furthermore, the use of these algorithms with connectionist networks that implement the actor-critic architecture is described, and experiments involving such networks are presented. Finally, it is shown that some of the assumptions underlying the derivation of REINFORCE algorithms can be relaxed to allow application to networks with hidden units, and a general convergence theorem is presented."
draft: false
graphEdges:
  - target: policy-gradient
    label: introduces
  - target: actor-critic
    label: foundational to
graphLabel: "REINFORCE"
graphDescription: "Williams (1992). Derives the REINFORCE gradient estimator: ∇J ∝ E[∇log π(a|s) · R], the foundation of all policy gradient methods."
---
