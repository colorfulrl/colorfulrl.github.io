---
title: "Q-learning"
authors: ["Christopher J.C.H. Watkins", "Peter Dayan"]
year: 1992
venue: "Machine Learning 8(3-4)"
arxiv: "https://link.springer.com/article/10.1007/BF00992698"
abstract: "Q-learning (Watkins, 1989) is a simple way for agents to learn how to act optimally in controlled Markovian domains. It amounts to an incremental method for dynamic programming which imposes limited computational demands. It works by successively improving its evaluations of the quality of particular actions at particular states. This paper presents and proves in detail a convergence theorem forQ-learning based on that outlined in Watkins (1989). We show thatQ-learning converges to the optimum action-values with probability 1 so long as all actions are repeatedly sampled in all states and the action-values are represented discretely. We also sketch extensions to the cases of non-discounted, but absorbing, Markov environments, and where manyQ values can be changed each iteration, rather than just one."
draft: false
graphEdges:
  - target: value-based
    label: foundational to
  - target: temporal-difference
    label: extends
graphLabel: "Q-Learning"
graphDescription: "Watkins & Dayan (1992). Convergence proof for Q-learning: off-policy TD update that recovers optimal Q* from arbitrary behaviour policies under tabular conditions."
---
