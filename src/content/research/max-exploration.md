---
title: "Model-Based Active Exploration"
authors: ["Pranav Shyam", "Wojciech Jaśkowski", "Faustino Gomez"]
year: 2019
venue: "ICML 2019"
arxiv: "https://arxiv.org/abs/1810.12162"
abstract: "Efficient exploration is an unsolved problem in Reinforcement Learning which is usually addressed by reactively rewarding the agent for fortuitously encountering novel situations. This paper introduces an efficient active exploration algorithm, Model-Based Active eXploration (MAX), which uses an ensemble of forward models to plan to observe novel events. This is carried out by optimizing agent behaviour with respect to a measure of novelty derived from the Bayesian perspective of exploration, which is estimated using the disagreement between the futures predicted by the ensemble members. We show empirically that in semi-random discrete environments where directed exploration is critical to make progress, MAX is at least an order of magnitude more efficient than strong baselines. MAX scales to high-dimensional continuous environments where it builds task-agnostic models that can be used for any downstream task."
draft: false
graphLabel: "MAX"
graphDescription: "Shyam et al. (2019). MBRL that plans to visit novel states: ensemble disagreement as epistemic uncertainty proxy → active exploration bonus. Task-agnostic world model reusable for downstream tasks."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: exploration
    label: based on
  - target: epistemic-uncertainty
    label: uses for exploration
  - target: intrinsic-motivation
    label: implements
---
