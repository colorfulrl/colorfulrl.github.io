---
title: "Transformers are Sample-Efficient World Models"
authors: ["Vincent Micheli", "Eloi Alonso", "François Fleuret"]
year: 2023
venue: "ICLR 2023"
arxiv: "https://arxiv.org/abs/2209.00588"
abstract: "Deep reinforcement learning agents are notoriously sample inefficient, which considerably limits their application to real-world problems. Recently, many model-based methods have been designed to address this issue, with learning in the imagination of a world model being one of the most prominent approaches. However, while virtually unlimited interaction with a simulated environment sounds appealing, the world model has to be accurate over extended periods of time. Motivated by the success of Transformers in sequence modeling tasks, we introduce IRIS, a data-efficient agent that learns in a world model composed of a discrete autoencoder and an autoregressive Transformer. With the equivalent of only two hours of gameplay in the Atari 100k benchmark, IRIS achieves a mean human normalized score of 1.046, and outperforms humans on 10 out of 26 games, setting a new state of the art for methods without lookahead search."
draft: false
graphLabel: "IRIS"
graphDescription: "Micheli et al. (2023). Discrete autoencoder + autoregressive Transformer as world model — no RSSM, no reconstruction loss. 1.046 mean HNS on Atari 100k; outperforms humans on 10/26 games."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: transformer
    label: uses
  - target: latent-dynamics
    label: uses
  - target: atari
    label: evaluated on
---
