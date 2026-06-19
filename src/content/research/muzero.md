---
title: "Mastering Atari, Go, Chess and Shogi by Planning with a Learned Model"
authors: ["Julian Schrittwieser", "Ioannis Antonoglou", "Thomas Hubert", "Karen Simonyan", "Laurent Sifre", "Simon Schmitt", "Arthur Guez", "Edward Lockhart", "Demis Hassabis", "Thore Graepel", "Timothy Lillicrap", "David Silver"]
year: 2019
venue: "Nature 2020"
arxiv: "https://arxiv.org/abs/1911.08265"
abstract: "Constructing agents with planning capabilities has long been one of the main challenges in the pursuit of artificial intelligence. Tree-based planning methods have enjoyed huge success in challenging domains, such as chess and Go, where a perfect simulator is available. However, in real-world problems the dynamics governing the environment are often complex and unknown. In this work we present the MuZero algorithm which, by combining a tree-based search with a learned model, achieves superhuman performance in a range of challenging and visually complex domains, without any knowledge of their underlying dynamics. MuZero learns a model that, when applied iteratively, predicts the quantities most directly relevant to planning: the reward, the action-selection policy, and the value function. When evaluated on 57 different Atari games - the canonical video game environment for testing AI techniques, in which model-based planning approaches have historically struggled - our new algorithm achieved a new state of the art. When evaluated on Go, chess and shogi, without any knowledge of the game rules, MuZero matched the superhuman performance of the AlphaZero algorithm that was supplied with the game rules."
draft: false
graphLabel: "MuZero"
graphEdges:
  - target: model-based-rl
    label: based on
  - target: mcts
    label: uses
  - target: latent-dynamics
    label: uses
  - target: atari
    label: evaluated on
graphDescription: "Schrittwieser et al. (2019). Learns a latent dynamics model that predicts only planning-relevant quantities (reward, policy, value) — no reconstruction — enabling MCTS without known rules."
---
