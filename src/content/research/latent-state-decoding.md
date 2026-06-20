---
title: "Provably Efficient RL with Rich Observations via Latent State Decoding"
authors: ["Simon S. Du", "Akshay Krishnamurthy", "Nan Jiang", "Alekh Agarwal", "Miroslav Dudík", "John Langford"]
year: 2019
venue: "ICML 2019"
arxiv: "https://arxiv.org/abs/1901.09018"
abstract: "We study the exploration problem in episodic MDPs with rich observations generated from a small number of latent states. Under certain identifiability assumptions, we demonstrate how to estimate a mapping from the observations to latent states inductively through a sequence of regression and clustering steps -- where previously decoded latent states provide labels for later regression problems -- and use it to construct good exploration policies. We provide finite-sample guarantees on the quality of the learned state decoding function and exploration policies, and complement our theory with an empirical evaluation on a class of hard exploration problems. Our method exponentially improves over Q-learning with naïve exploration, even when Q-learning has cheating access to latent states."
draft: false
graphLabel: "Latent State Decoding"
graphDescription: "Du et al. (2019). The Block MDP RL paper — decodes rich observations to a small set of latent states via inductive regression+clustering, with finite-sample guarantees, then builds exploration policies on the recovered state. Exponentially beats naive-exploration Q-learning. Foundational rich-observation RL theory. ICML 2019."
graphEdges:
  - target: block-mdp
    label: introduces
  - target: latent-dynamics
    label: uses
  - target: exploration
    label: addresses
  - target: value-based
    label: based on
---
