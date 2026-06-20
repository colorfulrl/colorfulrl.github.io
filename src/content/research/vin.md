---
title: "Value Iteration Networks"
authors: ["Aviv Tamar", "Yi Wu", "Garrett Thomas", "Sergey Levine", "Pieter Abbeel"]
year: 2016
venue: "NeurIPS 2016"
arxiv: "https://arxiv.org/abs/1602.02867"
abstract: "We introduce the value iteration network (VIN): a fully differentiable neural network with a 'planning module' embedded within. VINs can learn to plan, and are suitable for predicting outcomes that involve planning-based reasoning, such as policies for reinforcement learning. Key to our approach is a novel differentiable approximation of the value-iteration algorithm, which can be represented as a convolutional neural network, and trained end-to-end using standard backpropagation. We evaluate VIN based policies on discrete and continuous path-planning domains, and on a natural-language based search task. We show that by learning an explicit planning computation, VIN policies generalize better to new, unseen domains. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "VIN"
graphDescription: "Tamar et al. (2016). Embeds a differentiable approximation of value iteration — expressible as a CNN — inside a policy network, so the agent learns an explicit planning computation end-to-end via backprop. Planning-as-a-layer; generalizes better to unseen domains. NeurIPS 2016 best paper."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: value-based
    label: uses
  - target: trajectory-optimization
    label: uses
---
