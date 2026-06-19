---
title: "Diffusion for World Modeling: Visual Details Matter in Atari"
authors: ["Eloi Alonso", "Adam Jelley", "Vincent Micheli", "Anssi Kanervisto", "Amos Storkey", "Tim Pearce", "François Fleuret"]
year: 2024
venue: "NeurIPS 2024"
arxiv: "https://arxiv.org/abs/2405.12399"
abstract: "World models constitute a promising approach for training reinforcement learning agents in a safe and sample-efficient manner. Recent world models predominantly operate on sequences of discrete latent variables to model environment dynamics. However, this compression into a compact discrete representation may ignore visual details that are important for reinforcement learning. Concurrently, diffusion models have become a dominant approach for image generation, challenging well-established methods modeling discrete latents. Motivated by this paradigm shift, we introduce DIAMOND (DIffusion As a Model Of eNvironment Dreams), a reinforcement learning agent trained in a diffusion world model. We analyze the key design choices that are required to make diffusion suitable for world modeling, and demonstrate how improved visual details can lead to improved agent performance. DIAMOND achieves a mean human normalized score of 1.46 on the competitive Atari 100k benchmark; a new best for agents trained entirely within a world model. We further demonstrate that DIAMOND's diffusion world model can stand alone as an interactive neural game engine by training on static Counter-Strike: Global Offensive gameplay. To foster future research on diffusion for world modeling, we release our code, agents, videos and playable world models at this https URL."
draft: false
graphLabel: "DIAMOND"
graphDescription: "Alonso et al. (2024). Diffusion model as world model — retains visual detail lost by discrete latents. 1.46 mean HNS on Atari 100k; best WM-only agent. Also deployed as interactive CS:GO neural game engine."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: latent-dynamics
    label: uses
  - target: atari
    label: evaluated on
---
