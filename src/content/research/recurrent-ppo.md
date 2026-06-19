---
title: "RecurrentPPO: PPO with Recurrent Policies (LSTM/GRU)"
authors: ["Stable Baselines3 Contributors"]
year: 2021
venue: "SB3-Contrib"
arxiv: "https://github.com/Stable-Baselines-Team/stable-baselines3-contrib"
abstract: "RecurrentPPO extends Proximal Policy Optimization (PPO) with recurrent neural networks (LSTM or GRU) to handle partially observable environments (POMDPs). Rather than feeding only the current observation to the policy, a hidden state is maintained across timesteps, allowing the agent to integrate information over time. The key implementation challenge is correct handling of hidden states across episode boundaries and minibatch construction during policy updates. RecurrentPPO is available in the SB3-Contrib package and is effective on tasks requiring memory, such as navigation with limited field of view, flickering Atari environments, and memory-maze benchmarks."
draft: false
graphLabel: "RecurrentPPO"
graphDescription: "SB3-Contrib (2021). PPO with LSTM/GRU hidden state — handles POMDPs by integrating observations over time. Key challenge: correct hidden-state masking across episode boundaries during minibatch updates."
graphEdges:
  - target: policy-gradient
    label: based on
  - target: actor-critic
    label: uses
---
