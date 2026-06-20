---
title: "RIDE: Rewarding Impact-Driven Exploration for Procedurally-Generated Environments"
authors: ["Roberta Raileanu", "Tim Rocktäschel"]
year: 2020
venue: "ICLR 2020"
arxiv: "https://arxiv.org/abs/2002.12292"
abstract: "Exploration in sparse reward environments remains one of the key challenges of model-free reinforcement learning. Instead of solely relying on extrinsic rewards provided by the environment, many state-of-the-art methods use intrinsic rewards to encourage exploration. However, we show that existing methods fall short in procedurally-generated environments where an agent is unlikely to visit a state more than once. We propose a novel type of intrinsic reward which encourages the agent to take actions that lead to significant changes in its learned state representation. We evaluate our method, RIDE, on procedurally-generated environments and find that it improves the sample efficiency compared to state-of-the-art methods. RIDE also produces an interpretable intrinsic reward which is more robust to the choice of hyperparameters, scales better with the size of the environment, and provides a stronger incentive for the agent to interact with objects in the environment. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "RIDE"
graphDescription: "Raileanu & Rocktäschel (2020). Intrinsic reward = the impact of an action, i.e. the magnitude of change it causes in the learned state representation, combined with episodic visitation counts — stays meaningful in procedurally-generated environments where states are rarely revisited. ICLR 2020."
graphEdges:
  - target: exploration
    label: based on
  - target: intrinsic-motivation
    label: implements
  - target: curiosity-driven
    label: uses
  - target: episodic-exploration
    label: uses
  - target: minigrid
    label: evaluated on
---
