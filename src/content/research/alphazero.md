---
title: "A General Reinforcement Learning Algorithm that Masters Chess, Shogi and Go through Self-Play"
authors: ["David Silver", "Thomas Hubert", "Julian Schrittwieser", "Ioannis Antonoglou", "Matthew Lai", "Arthur Guez", "Marc Lanctot", "Laurent Sifre", "Dharshan Kumaran", "Thore Graepel", "Timothy Lillicrap", "Karen Simonyan", "Demis Hassabis"]
year: 2018
venue: "Science 362(6419)"
arxiv: "https://arxiv.org/abs/1712.01815"
abstract: "The game of chess is the most widely-studied domain in the history of artificial intelligence. The strongest programs are based on a combination of sophisticated search techniques, domain-specific adaptations, and handcrafted evaluation functions that have been refined by human experts over several decades. In contrast, the AlphaGo Zero program recently achieved superhuman performance in the game of Go, by tabula rasa reinforcement learning from games of self-play. In this paper, we generalise this approach into a single AlphaZero algorithm that can achieve, tabula rasa, superhuman performance in many challenging domains. Starting from random play, and given no domain knowledge except the game rules, AlphaZero achieved within 24 hours a superhuman level of play in the games of chess and shogi (Japanese chess) as well as Go, and convincingly defeated a world-champion program in each case."
draft: false
graphLabel: "AlphaZero"
graphDescription: "Silver et al. (2018). Generalises AlphaGo Zero to chess, shogi and Go — single tabula rasa algorithm; no domain-specific features or handcrafted evaluation. Precursor to MuZero."
graphEdges:
  - target: alphago-zero
    label: extends
  - target: mcts
    label: uses
  - target: model-based-rl
    label: related to
---
