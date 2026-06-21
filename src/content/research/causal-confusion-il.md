---
title: "Causal Confusion in Imitation Learning"
authors: ["Pim de Haan", "Dinesh Jayaraman", "Sergey Levine"]
year: 2019
venue: "NeurIPS 2019"
arxiv: "https://arxiv.org/abs/1905.11979"
abstract: "Behavioral cloning reduces policy learning to supervised learning by training a discriminative model to predict expert actions given observations. Such discriminative models are non-causal: the training procedure is unaware of the causal structure of the interaction between the expert and the environment. We point out that ignoring causality is particularly damaging because of the distributional shift in imitation learning. In particular, it leads to a counter-intuitive 'causal misidentification' phenomenon: access to more information can yield worse performance. We investigate how this problem arises, and propose a solution to combat it through targeted interventions—either environment interaction or expert queries—to determine the correct causal model. We show that causal misidentification occurs in several benchmark control domains as well as realistic driving settings, and validate our solution against DAgger and other baselines and ablations."
draft: false
graphLabel: "Causal Confusion in IL"
graphDescription: "de Haan, Jayaraman & Levine (2019, NeurIPS). Names the 'causal misidentification' phenomenon: behavior cloning is non-causal, so under distribution shift MORE information (e.g. access to history) can yield WORSE policies. Fixes it via targeted interventions to identify the true causal model. Canonical link between Causal RL and imitation learning."
graphEdges:
  - target: causal-rl
    label: instance of
  - target: imitation-learning
    label: diagnoses
---
