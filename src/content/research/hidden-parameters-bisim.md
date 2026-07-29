---
title: "Learning and Understanding a Disentangled Feature Representation for Hidden Parameters in Reinforcement Learning"
authors: ["Christopher Reale", "Rebecca Russell"]
year: 2022
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2211.16315"
abstract: "[Note: abstract reconstructed from a secondary-source summary, not fetched verbatim — verify against the original before quoting.] Hidden parameters are latent variables in a reinforcement learning environment that stay constant throughout a trajectory (e.g. a robot's mass, a pole's length) but are not directly observed — exactly the Block MDP setting. This paper presents an unsupervised approach to map RL trajectories into a feature space where distance reflects behavioral differences caused by these hidden parameters, by isolating hidden-parameter information inside the memory of a recurrent neural-network world model (used for model-based RL) and applying metric learning so distances in that memory space approximate a bisimulation metric taken with respect to the hidden parameters specifically. Validated across four hidden parameters in three RL environments; also proposes two further methods for identifying and interpreting which hidden parameters affect the system."
draft: false
graphLabel: "Hidden-Param Disentanglement"
graphDescription: "Reale & Russell (2022). Targets the Block MDP / hidden-context setting head-on: instead of Gaussian-dynamics-model + closed-form Wasserstein (DBC's construction), uses an RNN world model's memory as the representation substrate and shapes it with metric learning so distance approximates bisimulation WITH RESPECT TO the hidden parameter specifically (not overall behavior). Emphasis is on interpreting/identifying which hidden parameters matter, more than on maximizing downstream policy return — a different research question than most bisimulation-for-generalization papers, but the closest match to 'bisimulation metric defined directly over Block-MDP hidden parameters' in this reading list."
graphEdges:
  - target: bisimulation-metric
    label: applies to
  - target: block-mdp
    label: addresses
  - target: rssm
    label: uses
---
