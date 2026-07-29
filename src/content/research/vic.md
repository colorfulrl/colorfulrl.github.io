---
title: "Variational Intrinsic Control"
authors: ["Karol Gregor", "Danilo Jimenez Rezende", "Daan Wierstra"]
year: 2016
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/1611.07507"
abstract: "In this paper we introduce a new unsupervised reinforcement learning method for discovering the set of intrinsic options available to an agent. This set is learned by maximizing the number of different states an agent can reliably reach, as measured by the mutual information between the set of options and option termination states. To this end, we instantiate two policy gradient based algorithms, one that creates an explicit embedding space of options and one that represents options implicitly. The algorithms also provide an explicit measure of empowerment in a given state that can be used by an empowerment maximizing agent. The algorithm is evaluated on a range of environments including grid worlds and a simulated robotic arm, demonstrating discovery of meaningful options as well as competence in maximizing the number of reachable states."
draft: false
graphLabel: "VIC"
graphDescription: "Gregor, Rezende & Wierstra (2016). The origin point of information-theoretic skill discovery: maximizes I(option; termination state) — an option is useful if an agent observing where the trajectory ended can infer which option was executed. Gives an explicit measure of empowerment. Predates and is directly cited as the precursor to DIAYN (which instead maximizes I(skill; every visited state) for training stability) and VALOR."
graphEdges:
  - target: skill-discovery
    label: introduces
  - target: unsupervised-rl
    label: based on
  - target: intrinsic-motivation
    label: uses
---
