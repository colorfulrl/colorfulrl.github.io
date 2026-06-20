---
title: "Agent57: Outperforming the Atari Human Benchmark"
authors: ["Adrià Puigdomènech Badia", "Bilal Piot", "Steven Kapturowski", "Pablo Sprechmann", "Alex Vitvitskyi", "Daniel Guo", "Charles Blundell"]
year: 2020
venue: "ICML 2020"
arxiv: "https://arxiv.org/abs/2003.13350"
abstract: "Atari games have been a long-standing benchmark in the reinforcement learning (RL) community for the past decade. This benchmark was proposed to test general competency of RL algorithms. Previous work has achieved good average performance by doing outstandingly well on many games of the set, but very poorly in several of the most challenging games. We propose Agent57, the first deep RL agent that outperforms the standard human benchmark on all 57 Atari games. To achieve this result, we train a neural network which parameterizes a family of policies ranging from very exploratory to purely exploitative. We propose an adaptive mechanism to choose which policy to prioritize throughout the training process. Additionally, we utilize a novel parameterization of the architecture that allows for more consistent and stable learning."
draft: false
graphLabel: "Agent57"
graphDescription: "Badia et al. (2020). Extends NGU with a meta-controller (bandit) that adaptively selects exploration vs. exploitation policy — first agent to outperform humans on all 57 Atari games."
graphEdges:
  - target: ngu
    label: extends
  - target: exploration
    label: based on
  - target: episodic-exploration
    label: uses
  - target: global-exploration
    label: uses
  - target: atari
    label: evaluated on
---
