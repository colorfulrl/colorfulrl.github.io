---
title: "Counterfactual Data Augmentation using Locally Factored Dynamics"
authors: ["Silviu Pitis", "Elliot Creager", "Animesh Garg"]
year: 2020
venue: "NeurIPS 2020"
arxiv: "https://arxiv.org/abs/2007.02863"
abstract: "Many dynamic processes, including common scenarios in robotic control and reinforcement learning (RL), involve a set of interacting subprocesses. Though the subprocesses are not independent, their interactions are often sparse, and the dynamics at any given time step can often be decomposed into locally independent causal mechanisms. Such local causal structures can be leveraged to improve the sample efficiency of sequence prediction and off-policy reinforcement learning. We formalize this by introducing local causal models (LCMs), which are induced from a global causal model by conditioning on a subset of the state space. We propose an approach to inferring these structures given an object-oriented state representation, as well as a novel algorithm for Counterfactual Data Augmentation (CoDA). CoDA uses local structures and an experience replay to generate counterfactual experiences that are causally valid in the global model. We find that CoDA significantly improves the performance of RL agents in locally factored tasks, including the batch-constrained and goal-conditioned settings."
draft: false
graphLabel: "CoDA (Counterfactual Aug)"
graphDescription: "Pitis, Creager & Garg (2020, NeurIPS). Local causal models: when subprocess interactions are sparse, dynamics factor into locally independent mechanisms. CoDA recombines parts of different transitions (conditioned on the local structure) to generate causally-valid counterfactual experience — boosting sample efficiency in off-policy / goal-conditioned RL. Causal data augmentation."
graphEdges:
  - target: causal-rl
    label: instance of
  - target: model-based-rl
    label: augments
---
