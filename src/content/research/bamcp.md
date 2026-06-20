---
title: "Efficient Bayes-Adaptive Reinforcement Learning using Sample-Based Search"
authors: ["Arthur Guez", "David Silver", "Peter Dayan"]
year: 2012
venue: "NeurIPS 2012"
arxiv: "https://arxiv.org/abs/1205.3109"
abstract: "Bayesian model-based reinforcement learning is a formally elegant approach to learning optimal behaviour under model uncertainty, trading off exploration and exploitation in an ideal way. Unfortunately, finding the resulting Bayes-optimal policies is notoriously taxing, since the search space becomes enormous. In this paper we introduce a tractable, sample-based method for approximate Bayes-optimal planning which exploits Monte-Carlo tree search. Our approach outperformed prior Bayesian model-based RL algorithms by a significant margin on several well-known benchmark problems -- because it avoids expensive applications of Bayes rule within the search tree by lazily sampling models from the current beliefs. We illustrate the advantages of our approach by showing it working in an infinite state space domain which is qualitatively out of reach of almost all previous work in Bayesian exploration."
draft: false
graphLabel: "BAMCP"
graphDescription: "Guez, Silver & Dayan (2012). Bayes-Adaptive Monte-Carlo Planning — approximates the Bayes-optimal policy in a BAMDP via MCTS, lazily sampling a model from the current belief at the root of each simulation to avoid repeated Bayes updates inside the tree. The classic tractable BAMDP planner. NeurIPS 2012."
graphEdges:
  - target: bamdp
    label: solves
  - target: mcts
    label: uses
  - target: model-based-rl
    label: based on
  - target: exploration
    label: addresses
---
