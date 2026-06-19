---
title: "A Minimalist Approach to Offline Reinforcement Learning"
authors: ["Scott Fujimoto", "Shixiang Shane Gu"]
year: 2021
venue: "NeurIPS 2021"
arxiv: "https://arxiv.org/abs/2106.06860"
abstract: "Offline reinforcement learning (RL) defines the task of learning from a fixed batch of data. Due to errors in value estimation from out-of-distribution actions, most offline RL algorithms take the approach of constraining or regularizing the policy with the actions contained in the dataset. Built on pre-existing RL algorithms, modifications to make an RL algorithm work offline comes at the cost of additional complexity. Offline RL algorithms introduce new hyperparameters and often leverage secondary components such as generative models, while adjusting the underlying RL algorithm. In this paper we aim to make a deep RL algorithm work while making minimal changes. We find that we can match the performance of state-of-the-art offline RL algorithms by simply adding a behavior cloning term to the policy update of an online RL algorithm and normalizing the data. The resulting algorithm is a simple to implement and tune baseline, while more than halving the overall run time by removing the additional computational overhead of previous methods."
draft: false
graphLabel: "TD3+BC"
graphDescription: "Fujimoto & Gu (2021). Minimal offline RL: add BC regularization to TD3 policy update + normalize data. Matches SOTA while halving runtime — the canonical simple baseline for offline RL."
graphEdges:
  - target: offline-rl
    label: based on
  - target: td3
    label: extends
  - target: actor-critic
    label: uses
---
