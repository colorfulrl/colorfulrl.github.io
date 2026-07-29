---
title: "Equivalence notions and model minimization in Markov decision processes"
authors: ["Robert Givan", "Thomas Dean", "Matthew Greig"]
year: 2003
venue: "Artificial Intelligence, 147(1-2):163-223"
arxiv: "https://www.sciencedirect.com/science/article/pii/S0004370202003764"
abstract: "[Note: abstract reconstructed from secondary sources, not fetched verbatim due to publisher paywall — verify against the original before quoting.] The paper imports the notion of bisimulation from process algebra and formal-methods model checking into Markov decision processes: two states are declared equivalent (stochastic bisimilar) if they have identical immediate rewards under every action and their action-conditional transitions distribute probability identically over other equivalence classes. This exact equivalence relation licenses lossless state aggregation — an MDP can be minimized into a reduced model on equivalence classes that preserves optimal value and optimal policies, with algorithms and complexity results for computing the coarsest such partition, plus approximate/bounded versions of the equivalence for when exact equivalence is too strict to find non-trivial aggregation."
draft: false
graphLabel: "MDP Bisimulation"
graphDescription: "Givan, Dean & Greig (2003). Imports exact bisimulation (a binary equivalence relation from process algebra / formal methods) into MDPs: two states are equivalent iff same immediate reward and identical transition probabilities onto other equivalence classes, under every action. Enables lossless state aggregation for discrete MDPs. The origin point of the entire bisimulation line — Ferns et al. immediately generalize this brittle binary relation into a continuous metric, which DBC later approximates with a neural encoder."
graphEdges:
  - target: bisimulation-metric
    label: introduces
  - target: value-based
    label: related
---
