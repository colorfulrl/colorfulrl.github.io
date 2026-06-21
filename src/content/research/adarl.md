---
title: "AdaRL: What, Where, and How to Adapt in Transfer Reinforcement Learning"
authors: ["Biwei Huang", "Fan Feng", "Chaochao Lu", "Sara Magliacane", "Kun Zhang"]
year: 2022
venue: "ICLR 2022"
arxiv: "https://arxiv.org/abs/2107.02729"
abstract: "One practical challenge in reinforcement learning (RL) is how to make quick adaptations when faced with new environments. In this paper, we propose a principled framework for adaptive RL, called AdaRL, that adapts reliably and efficiently to changes across domains with a few samples from the target domain, even in partially observable environments. Specifically, we leverage a parsimonious graphical representation that characterizes structural relationships over variables in the RL system. Such graphical representations provide a compact way to encode what and where the changes across domains are, and furthermore inform us with a minimal set of changes that one has to consider for the purpose of policy adaptation. We show that by explicitly leveraging this compact representation to encode changes, we can efficiently adapt the policy to the target domain, in which only a few samples are needed and further policy optimization is avoided. We illustrate the efficacy of AdaRL through a series of experiments that vary factors in the observation, transition, and reward functions for Cartpole and Atari games."
draft: false
graphLabel: "AdaRL"
graphDescription: "Huang, Feng, Lu, Magliacane & Zhang (2022, ICLR). Learns a parsimonious graphical model of WHAT changes and WHERE across domains (in observation, transition, reward), encoded as compact domain-change factors. Adapts the policy to a new domain from a few samples without re-optimization — causal-factored transfer/adaptation."
graphEdges:
  - target: causal-rl
    label: instance of
  - target: contextual-mdp
    label: adapts across
---
