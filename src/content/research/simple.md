---
title: "Model-Based Reinforcement Learning for Atari"
authors: ["Lukasz Kaiser", "Mohammad Babaeizadeh", "Piotr Milos", "Blazej Osinski", "Roy H. Campbell", "Konrad Czechowski", "Dumitru Erhan", "Chelsea Finn", "Piotr Kozakowski", "Sergey Levine", "Afroz Mohiuddin", "Ryan Sepassi", "George Tucker", "Henryk Michalewski"]
year: 2020
venue: "ICLR 2020"
arxiv: "https://arxiv.org/abs/1903.00374"
abstract: "Model-free reinforcement learning (RL) can be used to learn effective policies for complex tasks, such as Atari games, even from image observations. However, this typically requires very large amounts of interaction -- substantially more, in fact, than a human would need to learn the same games. How can people learn so quickly? Part of the answer may be that people can learn how the game works and predict which actions will lead to desirable outcomes. In this paper, we explore how video prediction models can similarly enable agents to solve Atari games with fewer interactions than model-free methods. We describe Simulated Policy Learning (SimPLe), a complete model-based deep RL algorithm based on video prediction models and present a comparison of several model architectures, including a novel architecture that yields the best results in our setting. Our experiments evaluate SimPLe on a range of Atari games in low data regime of 100k interactions between the agent and the environment, which corresponds to two hours of real-time play. In most games SimPLe outperforms state-of-the-art model-free algorithms, in some games by over an order of magnitude. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "SimPLe"
graphDescription: "Kaiser et al. (2020). Simulated Policy Learning — a video-prediction world model of Atari frames in which a model-free policy is trained, reaching strong scores in the 100k-interaction (2-hour) regime. The first competitive pixel-level world model on Atari. ICLR 2020."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: world-models-concept
    label: uses
  - target: latent-dynamics
    label: uses
  - target: atari
    label: evaluated on
---
