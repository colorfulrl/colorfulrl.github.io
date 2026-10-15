---
title: "Eigenoption Discovery through the Deep Successor Representation"
authors: ["Marlos C. Machado", "Clemens Rosenbaum", "Xiaoxiao Guo", "Miao Liu", "Gerald Tesauro", "Murray Campbell"]
year: 2018
venue: "ICLR 2018"
arxiv: "https://arxiv.org/abs/1710.11089"
abstract: "Options allow agents to hierarchically decompose a task into subtasks, but discovering them autonomously remains hard. Eigenoptions, derived from representations that capture diffusive information flow in an environment, were so far defined only in tabular settings and relied on a known linear representation. This paper extends eigenoption discovery to stochastic transitions and to settings without handcrafted features, by learning non-linear state representations from raw pixels with the deep successor representation. The method is illustrated in tabular domains and demonstrated on Atari 2600 games."
draft: false
graphLabel: "Deep SR Eigenoption"
graphDescription: "Machado et al. (2018, ICLR). Scales eigenoptions to raw pixels and stochastic dynamics: because proto-value functions coincide with the span of the successor representation, a deep network that learns the SR from pixels yields the eigenvectors needed for eigenpurposes without a handcrafted state graph. Demonstrated on Atari."
graphEdges:
  - target: eigenoption-laplacian
    label: extends to deep RL
  - target: successor-features
    label: uses SR
  - target: proto-value-functions
    label: equivalent via SR
  - target: options-framework
    label: discovers options for
  - target: atari
    label: evaluated on
---
